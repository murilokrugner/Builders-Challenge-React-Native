import produce from 'immer';

const INITIAL_STATE = {
  data: null,
};

export default function weathers(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@weathers/UPDATE_WEATHERS_REQUEST': {
        draft.data = action.payload.data;
        break;
      }
      case '@weathers/UPDATE_WEATHERS_SUCCESS': {
        draft.data = action.payload.data;
        break;
      }
      default:
    }
  });
}
