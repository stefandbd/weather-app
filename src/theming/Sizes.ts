import {Dimensions, Platform} from 'react-native';

import {gridSize} from './Constants';
import {Size, Sizes} from './Types';
const {width, height} = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

export default {
  customTabbarHeight: 105,

  gutterSize: 8,

  headerHeight: {
    android: 40,
    ios: 40,
  },

  navbarHeight: Platform.OS === 'ios' ? 60 : 50,

  ratio_3_1: 3 / 1,

  ratio_16_9: 16 / 9,
  // Window Dimensions
  screen: {
    height: screenHeight,
    width: screenWidth,
    widthHalf: screenWidth * 0.5,
    widthQuarter: screenWidth * 0.25,
    widthThird: screenWidth * 0.333,
    widthThreeQuarters: screenWidth * 0.75,
    widthTwoThirds: screenWidth * 0.666,
  },
  statusBarHeight: Platform.OS === 'ios' ? 16 : 0,
  tabbarHeight: 51,
  textSizes: {
    bigger: '16px',
    ctaButton: '14px',
    heading1: '60px',
    heading2: '27px',
    heading3: '18px',
    medium: '12px',
    normal: '14px',
    small: '10px',
  },
};

/**
 * THis is the default predefined set of size factors in use in the app.
 * They are all calculated based on the grid size (8pt) and the font size
 */
export const sizes: Sizes = {
  large: gridSize * 3,
  medium: gridSize * 2,
  small: gridSize,
  xLarge: gridSize * 4,
  xSmall: gridSize / 2,
  xxLarge: gridSize * 5,
  xxxLarge: gridSize * 6,
  xxxxLarge: gridSize * 7,
};

export const relativeSize = (size: Size) => {
  return sizes[size];
};

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 691;

export const scale = (size: number) =>
  (screenWidth / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (screenHeight / guidelineBaseHeight) * size;

export function calculateHeightSize() {
  if (screenHeight >= 932) {
    return screenHeight * 0.58;
  } else if (screenHeight >= 896 && screenHeight < 932) {
    return screenHeight * 0.54;
  } else if (screenHeight >= 852 && screenHeight < 896) {
    return screenHeight * 0.56;
  } else if (screenHeight >= 812 && screenHeight < 852) {
    return screenHeight * 0.56;
  } else if (screenHeight >= 667 && screenHeight < 812) {
    return screenHeight * 0.46;
  } else if (screenHeight < 667) {
    return screenHeight * 0.3;
  }
}

export function calculateMarginSize() {
  if (screenHeight >= 932) {
    return scale(screenHeight * 0.01);
  } else if (screenHeight >= 896 && screenHeight < 932) {
    return scale(screenHeight * 0.008);
  } else if (screenHeight >= 852 && screenHeight < 896) {
    return scale(screenHeight * 0.12);
  } else if (screenHeight >= 812 && screenHeight < 852) {
    return scale(screenHeight * 0.12);
  } else if (screenHeight >= 667 && screenHeight < 812) {
    return scale(screenHeight * 0.065);
  } else if (screenHeight < 667) {
    return scale(screenHeight * 0.05);
  }
}

export function calculateAspectRatio() {
  if (screenHeight >= 932) {
    return 106 / 144;
  } else if (screenHeight >= 896 && screenHeight < 932) {
    return 114 / 144;
  } else if (screenHeight >= 852 && screenHeight < 896) {
    return 110 / 144;
  } else if (screenHeight >= 812 && screenHeight < 852) {
    return 130 / 144;
  } else if (screenHeight >= 667 && screenHeight < 812) {
    return 130 / 144;
  } else if (screenHeight < 667) {
    return 110 / 144;
  }
}
