export const CALCULATE_NUMBER_OF_PICTURES = 'CALCULATE_NUMBER_OF_PICTURES';
export const CHANGE_VALUES = 'CHANGE_VALUES';
export const CHANGE_TYPE = 'CALCULATE_CARD_SIZE';
export const CHANGE_RESOLUTION = 'CALCULATE_CARD_SIZE';
export const CHANGE_CARD_SIZE = 'CALCULATE_CARD_SIZE';

export function changeType(type) {

  let data = {
    value: type,
    type: 'picture_type'
  }

  return {
    type: CHANGE_VALUES,
    data
  }
}

export function changeResolution(resolution) {

  let data = {
    value: resolution,
    type: 'resolution'
  }

  return {
    type: CHANGE_VALUES,
    data
  }
}

export function changeMemoryCardSize(size) {

  let data = {
    value: size,
    type: 'card_size'
  }

  return {
    type: CHANGE_VALUES,
    data
  }
}

export function calculateNumberOfPictures(data) {
  return {
    type: CALCULATE_NUMBER_OF_PICTURES,
    data
  }
}
