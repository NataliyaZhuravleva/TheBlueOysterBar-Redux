import editingReducer from '../../reducers/editing-reducer.js';
import * as c from '../../actions/ActionTypes';

describe("editingReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(editingReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle editing property from false to true', () => {
    expect(editingReducer(false, { type: c.TOGGLE_UPDATE})).toEqual(true);
  });
});