import {combineReducers} from 'redux';

import weathers from './weathers/reducer';
import cities from './cities/reducer';

export default combineReducers({
  weathers,
  cities,
});
