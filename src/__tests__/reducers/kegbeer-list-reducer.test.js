import kegBeerListReducer from '../../reducers/kegbeer-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('kegBeerListReducer', () => {
  let action;
  const kegBeerData = {
    name: 'Guinness Blonde',
    brand: 'Guinness',
    price: 4.99,
    alcoholContent: 5.0,
    pintsLeft: 124,
    id: 1
  }
  const currentState = {
    1: {
      name: 'Guinness Blonde',
      brand: 'Guinness',
      price: 4.99,
      alcoholContent: 5.0,
      pintsLeft: 124,
      id: 1
    },
    2: {
      name: 'Guinness Extra Stout',
      brand: 'Guinness',
      price: 5.99,
      alcoholContent: 5.6,
      pintsLeft: 124,
      id: 2
    },
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegBeerListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg beer data to masterKegBeerList', () => {
    const { name, brand, price, alcoholContent, pintsLeft, id } = kegBeerData;
    action = {
      type: c.ADD_KEGBEER,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsLeft: pintsLeft,
      id: id
    };
    expect(kegBeerListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pintsLeft: pintsLeft,
        id: id
      }
    });
  });

  test('Should successfully delete a keg beer', () => {
    action = {
      type: c.DELETE_KEGBEER,
      id: 1
    };
    expect(kegBeerListReducer(currentState, action)).toEqual({
      2: {
        name: 'Guinness Extra Stout',
        brand: 'Guinness',
        price: 5.99,
        alcoholContent: 5.6,
        pintsLeft: 124,
        id: 2
      },
    });
  });
});