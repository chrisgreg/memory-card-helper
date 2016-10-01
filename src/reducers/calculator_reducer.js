import { CALCULATE_NUMBER_OF_PICTURES, CHANGE_VALUES } from '../actions/index';

const INITIAL_STATE = {
  type: 'RAW',
  resolution: 1,
  cardSize: 1,
  numberOfPictures: null
};

export default function(state = INITIAL_STATE, action){
  switch(action.type) {
    case CHANGE_VALUES:
      const valueToChange = action.data.type;
      const newValue = action.data.value;

      switch(valueToChange) {
        case 'picture_type':
          return {
            ...state,
            type: newValue
          }
        case 'resolution':
          return {
            ...state,
            resolution: newValue
          }
        case 'card_size':
          return {
            ...state,
            cardSize: parseInt(newValue)
          }
      }
      return state;

    case CALCULATE_NUMBER_OF_PICTURES:
      const divisor = state.type === 'RAW' ? 0.3333333 : 3.333333;
      const fileSize = state.resolution / divisor;
      const newNumber = Math.floor(state.cardSize * 1000 * 0.86 / fileSize);

      return {
        ...state,
        numberOfPictures: newNumber
      }

    default:
      return state;
  }
}
