export default {
  capture: {
    capture: false,
    captureText: 'Capture',
    disabled: '',
    resetDisabled: 'disabled'
  },
  octave: {
    current: 4,
    up: '',
    down: '',
  },
  keyStrokeEvents: [],
  exerciseScores: [],
  greenTime: {
    accumulated: 0,
    required: 1,
  },
  score: 100,
  targetNote: null,
  targetNoteIndex: 0,
  sungNote: {
    frequency: null,
    name: null,
    centDiff: null,
    arrowValue: 90 / 180,
  },
  recordingStatus: false,
  singButton: {
    singText: 'Sing',
    disabled: true,
  },
  user: [],
  allPastExercises: [],
  currentExerciseId: null,
  graphData: [],
};
