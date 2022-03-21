import produce from 'immer';

export default function cities(state = [], action) {
  switch (action.type) {
    case '@cities/UPDATE_CITIES_REQUEST': {
      return produce(state, (draft) => {
        const {data} = action;

        draft.push(data);
      });
    }
    case '@cities/REMOVE':
      return produce(state, (draft) => {
        draft.splice(action.index, 1);
      });
    default:
      return state;
  }
}
