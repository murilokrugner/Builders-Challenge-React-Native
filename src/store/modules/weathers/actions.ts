export function updateWeathersRequest(data) {
  return {
    type: '@weathers/UPDATE_WEATHERS_REQUEST',
    payload: {data},
  };
}

export function updateWeathersSuccess(data) {
  return {
    type: '@weathers/UPDATE_WEATHERS_SUCCESS',
    payload: {data},
  };
}

export function updateWeathersFailure() {
  return {
    type: '@weathers/UPDATE_WEATHERS_FAILURE',
  };
}
