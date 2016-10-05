import { SUGGEST_MEMORY_CARD, CHANGE_VALUES } from '../actions/index';

const INITIAL_STATE = {
  type: 'RAW',
  resolution: 1,
  cardSize: '1 GB',
  rawDataSize: 1,
  numberOfPictures: 1
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {

    case SUGGEST_MEMORY_CARD:
      const result = calculateMemoryCardSize(state);
      const sizeToBuy = findMemoryCardSize(result.raw);
      return {
        ...state,
        cardSize: sizeToBuy || '1 GB',
        rawDataSize: result.raw
      }

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
            resolution: parseInt(newValue)
          }
        case 'picture_count':
          return {
            ...state,
            numberOfPictures: parseInt(newValue)
          }
      }
      return state;

      default:
        return state;
  }
}

function calculateMemoryCardSize(state) {
  const divisor = state.type === 'RAW' ? 0.3333333 : 3.333333;
  const fileSize = state.resolution / divisor;
  const cardSize = state.numberOfPictures * fileSize / 1000 / 0.86;

  return {
    normalised: Math.ceil(cardSize),
    raw: cardSize
  }
}

function findMemoryCardSize(dataNeeded) {
  const possibleSizes = [ 1, 2, 4, 8, 16, 32, 64, 128, 256, 512 ];

  if (dataNeeded > possibleSizes[possibleSizes.length -1]){
    return 'Multiple cards required';
  }

  for (let i = 0; i < possibleSizes.length; ++i) {
    let current = possibleSizes[i];
    let next = possibleSizes[i + 1];

    if (next === undefined) {
      next = 1024;
    }
    
    if (current <= dataNeeded && dataNeeded <= next) {
      return `${next} GB`;
    }
  }
}
