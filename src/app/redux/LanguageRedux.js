import {Constants, Languages} from '@common';
const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

export function switchLanguage(language) {
  return {
    type: SWITCH_LANGUAGE,
    data: {
      lang: language,
    },
  };
}

const initialState = {
  lang: Constants.Language,
};

export const reducer = (state = initialState, action) => {
  const {type, data} = action;
  switch (type) {
    case SWITCH_LANGUAGE:
      Languages.setLanguage(data.lang);

      return Object.assign({}, state, data);
    default:
      return state;
  }
};
