export const Colors = {
  LIGHT_BLUE: 'rgb(75,145,222)',
  BUTTON_BLUE: '#05448c',
  WHITE: '#ffffff',
  OFF_WHITE: '#f7f7f7',
  WHITE_1: '#fafafa',
  GREEN_1: '#4b9d4f',
  GRAY_LIGHT: '#DBE2E5',
  TEXT_DARK: '#5B6068',
  TEXT_LIGHT: '#3266ba',
  SECTION_HEADER_BG: '#2C303A',
  GRAY_DARK: 'rgb(84, 90, 99)',
  GRAY_DARK_TRANPARENT: 'rgba(84, 90, 99, 0.5)',
  GRAY_DARK_1: '#323742',
  GRAY_1: '#3f444c',
  GRAY_2: 'rgb(216, 216, 216)',
  GRAY_3: '#757575',
  GRAY_4: '#616161',
  GRAY_5: '#3a4454',
  GRAY_6: '#dedede',
  GRAY_7: '#929292',
  GRAY_80: '#cccccc',
  GRAY_92: '#ebebeb',
  DARK_GRAY: '#404040',
  LIGHT_GREEN: '#7ed321',
  LIGHT_GREEN_1: '#64b50a',
  DARK_GREEN: 'rgb(105, 184, 84)',
  DARKER_GREEN: '#3a8227',
  BRIGHT_GREEN: '#44aa00',
  LIGHT_YELLOW: 'rgb(248, 231, 28)',
  LIGHT_RED: '#ffe3e3',
  DARK_RED: 'rgb(232, 73, 70)',
  RED_1: '#D32F2F',
  RED_2: '#e53935',
  RED_3: '#f44336',
  RED_ORANGE: '#ee2727',
  TORCH_RED: '#fc4e03',
  DARK_YELLOW: 'rgb(255, 193, 7)',
  GAINSBORO: '#DCDCDC',
  DISABLED: '#a2a8b2',
  DISABLED_OPAQUE: '#dddddd66',
  ORANGE: '#ff9000',
  ORANGE_1: '#ffae1a',
  BLACK: '#171717',
  BLACK_PURE: '#000000',
  GRAY_OPAQUE: 'rgba(40,40,40, 0.95)',
  TEXT_GRAY: '#888888',
  LIGHT_RED_1: '#ef5350',
  LABEL_TEXT_COLOR: '#545a63',
  SECONDARY_COLOR: '#003c8f',
  SILVER: '#F0F0F0',
  YELLOW_1: '#ffd439',
  YELLOW_GREEN: '#9acd32',
  LIGHT_ORANGE: '#FFA500F0',
  CREC_BROWN: '#BF6F2F',
  BLU_BLUE: '#0099bb',
};

export const alternateBgRowStyle = (index) => [
  {
    backgroundColor: index % 2 === 0 ? Colors.WHITE : 'rgba(0, 0, 0, 0.10)',
  },
];
