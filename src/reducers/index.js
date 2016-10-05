import { combineReducers } from 'redux';
import calculator from './calculator_reducer'
import suggestor from './suggestion_reducer'

const rootReducer = combineReducers({
  calculator,
  suggestor
});

export default rootReducer;
