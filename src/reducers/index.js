import formVisibleReducer from './form-visible-reducer';
import kegBeerListReducer from './kegbeer-list-reducer';
import editingReducer from './editing-reducer';
import selectedKegBeerReducer from './selectedkegbeer-reducer';
//import pintsLeftReducer from './pintsleft-reducer';
import { combineReducers } from 'redux';
//import { pintsLeft } from '../actions';




const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegBeerList: kegBeerListReducer,
  editing: editingReducer,
  selectedKegBeer: selectedKegBeerReducer,
  //pintsLeft: pintsLeftReducer
});

export default rootReducer;