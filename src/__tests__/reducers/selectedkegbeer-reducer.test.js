import selectedKegBeerReducer from '../../reducers/selectedkegbeer-reducer';
import * as c from '../../actions/ActionTypes';

describe("selectedKegBeerReducer", () => {
  let action;
  const kegBeerData = {
    name: 'Guinness Blonde',
    brand: 'Guinness',
    price: 4.99,
    alcoholContent: 5.0,
    pintsLeft: 124,
    id: 1
  }

  
  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegBeerReducer(null, { type: null })).toEqual(null);
  });

  test('Should successfully return a keg beer', ()=>{
    action = {
      type: c.SELECT_KEGBEER,
      selectedKegBeer: kegBeerData,
    };
    expect(selectedKegBeerReducer(null, action)).toMatchObject(kegBeerData)
  });

  test('Should successfully deselect a keg beer and return null', ()=>{
    const { name, brand, price, alcoholContent, pintsLeft, id } = kegBeerData;
    const currentState = {
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsLeft: pintsLeft,
      id: id
    };
    action = {type: c.DESELECT_KEGBEER}
    expect(selectedKegBeerReducer(currentState, action)).toEqual(null);
  });

  test('Should successfully sell a keg pint', () => {
    let action = {
      type: c.SELL_PINT,
    };
    expect(selectedKegBeerReducer(kegBeerData, action)).toEqual({
        name: 'Guinness Blonde',
        brand: 'Guinness',
        price: 4.99,
        alcoholContent: 5.0,
        pintsLeft: 123,
        id: 1
    });
  });
});