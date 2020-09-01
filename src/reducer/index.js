import React, { useReducer, createContext } from "react";
import * as tome from 'chromotome';
import { randomItem } from '../helpers'

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
} from './actions'

const palette = tome.getRandom().colors
const backgroundColor = randomItem(palette);
const withOutBg = palette.filter(c => c !== backgroundColor);
const strokeColor = randomItem(withOutBg);


const initialSettings = {
  width: 1280,
  height: 1600,
  bleed: 60,
  strokeWidth: 8,
  base: 16,
  ratio: 1.61803398875,
  sunX: (1280 / 2),               // (width / 2) - (bleed * 2)
  sunY: (1600 / 4),               // height / 4
  sunRadius: 1280 / 8,            // width / 8
  backgroundColor,
  strokeColor
}

const settingsReducer = (state, action) => {
  console.log({action});
  switch(action.type) {
    case SET_WIDTH:
      return {
        ...state,
        width: parseInt(action.payload)
      };
    case SET_HEIGHT:
      return {
        ...state,
        height: parseInt(action.payload)
      };
    case SET_BLEED:
      return {
        ...state,
        bleed: parseInt(action.payload)
      };
    case SET_STROKEWIDTH:
      return {
        ...state,
        strokeWidth: parseInt(action.payload)
      };
    case SET_BASE:
      return {
        ...state,
        base: parseInt(action.payload)
      };
    case SET_RATIO:
      return {
        ...state,
        ratio: parseFloat(action.payload)
      };
    case SET_BACKGROUND:
      return {
        ...state,
        backgroundColor: action.payload
      };
    case SET_STROKECOLOR:
      return {
        ...state,
        strokeColor: action.payload
      };
    case SET_SUNX:
      return {
        ...state,
        sunX: action.payload
      };
    case SET_SUNY:
      return {
        ...state,
        sunY: action.payload
      };
    case SET_SUNRADIUS:
      return {
        ...state,
        sunRadius: action.payload
      };
    default:
      throw new Error('Invalid action');
  }
}

const SettingsContext = createContext();

const SettingsContextProvider = props => {
  const [state, dispatch] = useReducer(settingsReducer, initialSettings);

  return <SettingsContext.Provider value={[state, dispatch]}>{props.children}</SettingsContext.Provider>;
};

export { initialSettings, SettingsContext, settingsReducer, SettingsContextProvider }