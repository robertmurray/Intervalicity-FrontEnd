import initialState from './initialState';

const sungNoteReducer = (state = initialState.sungNote, action) => {
  switch (action.type) {
    case 'SET_SUNG_NOTE':
      return action.payload;
    case 'RESET_SUNG_NOTE':
      return {
        frequency: null,
        name: null,
        centDiff: null,
        arrowValue: 90/180,
      };
    default:
      return state;
  }
};

export default sungNoteReducer;
