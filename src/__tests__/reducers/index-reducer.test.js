import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegBeerListReducer from '../../reducers/kegbeer-list-reducer';
import editingReducer from '../../reducers/editing-reducer';
import selectedKegBeerReducer from '../../reducers/selectedkegbeer-reducer';
import pintsLeftReducer from '../../reducers/pintsleft-reducer';
import * as c from '../../actions/ActionTypes';
import { selectedKegBeer } from '../../actions';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegBeerList: {},
      formVisibleOnPage: false,
      editing: false,
      selectedKegBeer: null,
      pintsLeft: {}
    });
  });
  test('Check that initial state of kegBeerListReducer matches root reducer', () => {
    expect(store.getState().masterKegBeerList).toEqual(kegBeerListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of pintsLeftReducer matches root reducer', () => {
    expect(store.getState().pintsLeft).toEqual(pintsLeftReducer(undefined, { type: null }));
  });

  test('Check that ADD_KEGBEER action works for kegBeerListReducer and root reducer', () => {
    const action = {
      type: c.ADD_KEGBEER,
      name: 'Guinness Blonde',
      brand: 'Guinness',
      price: 4.99,
      alcoholContent: 5.0,
      pintsLeft: 124,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKegBeerList).toEqual(kegBeerListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

  test('Check that TOGGLE_UPDATE action works for editingReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_UPDATE
    }
    store.dispatch(action);
    expect(store.getState().editing).toEqual(editingReducer(undefined, action));
  });

  test('Check that SELECT_KEGBEER action works for selectedKegBeerReducer and root reducer', () => {
    const action = {
      type: c.SELECT_KEGBEER,
      selectedKegBeer: selectedKegBeer
    }
    store.dispatch(action);
    expect(store.getState().selectedKegBeer).toEqual(selectedKegBeerReducer(undefined, action));
  });

  test('Check that SELL_PINT action works for pintsLeftReducer and root reducer', () => {
    const action = {
      type: c.SELL_PINT,     
    }
    store.dispatch(action);
    expect(store.getState().pintsLeft).toEqual(pintsLeftReducer(undefined, action));
  });
});