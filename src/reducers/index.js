import { combineReducers } from 'redux';
import storeData from './ajaxStatusReducers';

const rootReducer = combineReducers({
  storeData,
})
export default rootReducer;