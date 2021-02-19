import formVisibleReducer from './form-visible-reducer';
import kegBeerListReducer from './kegbeer-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegBeerList: kegBeerListReducer
});

export default rootReducer;