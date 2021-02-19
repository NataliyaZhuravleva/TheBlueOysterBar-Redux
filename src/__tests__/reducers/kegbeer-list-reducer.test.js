import kegBeerListReducer from '../../reducers/kegbeer-list-reducer';

describe('kegBeerListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegBeerListReducer({}, { type: null })).toEqual({});
  });
});