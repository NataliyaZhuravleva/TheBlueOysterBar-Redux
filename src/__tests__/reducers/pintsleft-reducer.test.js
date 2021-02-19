import pintsLeftReducer from '../../reducers/pintsleft-reducer';
import * as c from '../../actions/ActionTypes';

describe ('pintsLeftReducer', ()=>{
  const kegBeerData = {
    name: 'Guinness Blonde',
    brand: 'Guinness',
    price: 4.99,
    alcoholContent: 5.0,
    pintsLeft: 124,
    id: 1
  }
  test('Should successfully sell a keg pint', () => {
    
    expect(pintsLeftReducer(kegBeerData, c.SELL_PINT)).toEqual({
        name: 'Guinness Blonde',
        brand: 'Guinness',
        price: 4.99,
        alcoholContent: 5.0,
        pintsLeft: 123,
        id: 1
    });
  });
});  