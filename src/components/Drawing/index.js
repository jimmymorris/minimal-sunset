import React, { useState, useEffect, useContext } from 'react';
import { SettingsContext } from "../../reducer";

const Drawing = () => {
  const [state] = useContext(SettingsContext);
  const { width, height, strokeWidth, bleed, base, ratio, backgroundColor, strokeColor, sunX, sunY, sunRadius } = state;
  const [lines, setLines] = useState([]);
  const middleY = height / 2;
  const maxY = height - bleed;

  useEffect(() => {
    console.log({bleed})
    let v = 0;
    let y = middleY;
    setLines([])
    while (y < maxY) {
      if (y < maxY - 32) {
        const newLine = { x1: bleed, y1: y, x2: width - bleed, y2: y };
        setLines(prevLines => [...prevLines, newLine]);
      }
      y += Math.pow(ratio, v) * base;
      v += 1;
    }
  }, [base, bleed, width, maxY, middleY, ratio])

  const aspectPercent = (height / width) * 100;

  const wrapperCSS = {
    height: 0,
    overflow: 'hidden',
    padding: `${aspectPercent}% 0 0`,
    position: 'relative'
  }

  const svgCSS = {
    position: 'absolute',
    left: '50%',
    marginLeft: '-50%',
    top: 0,
  }

  return (
    <div style={wrapperCSS}>
      <svg viewBox={`0 0 ${width} ${height}`} style={svgCSS} xmlns="https://www.w3.org/2000/svg">
        <rect
          id="background"
          height="100%"
          fill={backgroundColor}
        />
        <ellipse
          id="sun"
          cx={sunX}
          cy={sunY}
          rx={sunRadius}
          ry={sunRadius}
          fill={strokeColor}
        />
        <rect
          x={lines.length > 0 ? lines[0].x1 : 0}
          y={lines.length > 0 ? lines[0].y1 : height / 2}
          width={width - (bleed * 2)}
          height={lines.length > 0 ? (height / 2 - bleed) : 0}
          fill={backgroundColor}
        />
        <rect
          id="border"
          x={bleed}
          y={bleed}
          width={width - (bleed * 2)}
          height={height - (bleed * 2)}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {lines.map((l, index) => <line key={`line-${index}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke={strokeColor} strokeWidth={strokeWidth} />)}
      </svg>
    </div>
  );

}

export default Drawing;
