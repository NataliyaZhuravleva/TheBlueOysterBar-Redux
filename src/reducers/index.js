import formVisibleReducer from './form-visible-reducer';
import kegBeerListReducer from './kegbeer-list-reducer';
import editingReducer from './editing-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegBeerList: kegBeerListReducer,
  editing: editingReducer
});

export default rootReducer;