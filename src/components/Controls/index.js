import React, { useContext } from 'react';
import { SettingsContext } from "../../reducer";
import { normalizeText } from '../../helpers'
import {
  SET_WIDTH,
  SET_HEIGHT,
  SET_BLEED,
  SET_STROKEWIDTH,
  SET_BASE,
  SET_RATIO,
  SET_BACKGROUND,
  SET_STROKECOLOR,
  SET_SUNX,
  SET_SUNY,
  SET_SUNRADIUS
} from '../../reducer/actions'

const Control = () => {

  const [state, dispatch] = useContext(SettingsContext);

  const updateSetting = (e, key) => {
    let action = '';
    switch (key) {
      case 'width':
        action = SET_WIDTH;
        break;
      case 'height':
        action = SET_HEIGHT;
        break;
      case 'bleed':
        action = SET_BLEED;
        break;
      case 'strokeWidth':
        action = SET_STROKEWIDTH;
        break;
      case 'base':
        action = SET_BASE;
        break;
      case 'ratio':
        action = SET_RATIO;
        break;
      case 'backgroundColor':
        action = SET_BACKGROUND;
        break;
      case 'strokeColor':
        action = SET_STROKECOLOR;
        break;
      case 'sunX':
        action = SET_SUNX;
        break;
      case 'sunY':
        action = SET_SUNY;
        break;
      case 'sunRadius':
        action = SET_SUNRADIUS;
        break;
      default:
        throw new Error('Invalid action field');
    }

    dispatch({
      type: action,
      payload: e.target.value,
    });
  }

  return (
    <>
      {
        Object.keys(state).map((key) => {
          return (
            <div key={key} style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center' }}>
              <label style={{ marginRight: '8px', fontSize: '14px' }}>{normalizeText(key)}</label>
              <input
                style={{ maxWidth: '125px' }}
                value={state[key]}
                onChange={e => updateSetting(e, key)}
                type={key === 'strokeColor' || key === 'backgroundColor' ? 'color' : 'number'}
              />
              {key === 'strokeColor' || key === 'backgroundColor' ? <span style={{padding: '0 8px', fontSize: '12px'}}>{state[key]}</span> : null}
            </div>
          );
        })
      }
    </>
  )
}

export default Control;