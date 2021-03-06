import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import keyEventsReducer from './keyEvents_reducer';
import targetNoteReducer from './targetNote_reducer';
import targetNoteIndexReducer from './targetNoteIndex_reducer';
import sungNoteReducer from './sungNote_reducer';
import recordingStatusReducer from './recordingStatus_reducer';
import greenTimeReducer from './greenTime_reducer';
import scoreReducer from './score_reducer';
import exerciseScoresReducer from './exerciseScores_reducer';
import currentExerciseIdReducer from './currentExerciseId_reducer';
import allPastExercisesReducer from './allPastExercises_reducer';
import { captureReducer, octaveReducer, currentNoteReducer } from './interface';
import signupReducer from './signUp';
import loginReducer from './login';
import dashboard from './dashboard';
import singButtonReducer from './singButton';
import resetStateReducer from './resetState';
import initialState from './initialState';
import searchExercise from './searchAllExercises';
import allScorePerExercise from './allIntonationScorePerExercise';
import graphDataReducer from './graphData_reducer';

const appReducer = combineReducers({
  form: formReducer,
  currentNoteReducer,
  captureReducer,
  octaveReducer,
  greenTimeReducer,
  scoreReducer,
  exerciseScoresReducer,
  currentExerciseIdReducer,
  allPastExercisesReducer,
  keyEventsReducer,
  targetNoteReducer,
  targetNoteIndexReducer,
  sungNoteReducer,
  recordingStatusReducer,
  singButtonReducer,
  signupReducer,
  loginReducer,
  dashboard,
  searchExercise,
  allScorePerExercise,
  graphDataReducer,
});

const rootReducer = (state, action) => {
  let resetState = (JSON.parse(JSON.stringify(initialState)));
  if (action.type === 'RESET_STATE') {
    state = resetState;
  }
  return appReducer(state, action);
};


export default rootReducer;
