import * as actions from './actionTypes';

const appReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_WORDS:
      return {
        ...state,
        words: action.payload,
      };


    default:
      return state;
  }
};

export default appReducer;
