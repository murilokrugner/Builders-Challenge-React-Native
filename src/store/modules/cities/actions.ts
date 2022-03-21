export function updateCitiesRequest(data: object) {
  return {
    type: '@cities/UPDATE_CITIES_REQUEST',
    data,
  };
}

export function updateCitiesSuccess(data: object) {
  return {
    type: '@cities/UPDATE_CITIES_SUCCESS',
    data,
  };
}

export function removeCity(index: number) {
  return {type: '@cities/REMOVE', index};
}

export function updateCitiesFailure() {
  return {
    type: '@cities/UPDATE_CITIES_FAILURE',
  };
}
