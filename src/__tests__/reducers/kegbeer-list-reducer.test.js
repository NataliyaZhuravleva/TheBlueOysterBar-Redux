import kegBeerListReducer from '../../reducers/kegbeer-list-reducer';

describe('kegBeerListReducer', () => {
  let action;
  const kegBeerData = {
    name: 'Guinness Blonde',
    brand: 'Guinness',
    price: 4.99,
    alcoholContent: 5.0,
    id: 1
  }
  const currentState = {
    1: {
      name: 'Guinness Blonde',
      brand: 'Guinness',
      price: 4.99,
      alcoholContent: 5.0,
      id: 1
    },
    2: {
      name: 'Guinness Extra Stout',
      brand: 'Guinness',
      price: 5.99,
      alcoholContent: 5.6,
      id: 2
    },
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegBeerListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg beer data to masterKegBeerList', () => {
    const { name, brand, price, alcoholContent, id } = kegBeerData;
    action = {
      type: 'ADD_KEGBEER',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      id: id
    };
    expect(kegBeerListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        id: id
      }
    });
  });

  test('Should successfully delete a keg beer', () => {
    action = {
      type: 'DELETE_KEGBEER',
      id: 1
    };
    expect(kegBeerListReducer(currentState, action)).toEqual({
      2: {
        name: 'Guinness Extra Stout',
        brand: 'Guinness',
        price: 5.99,
        alcoholContent: 5.6,
        id: 2
      },
    });
  });
});