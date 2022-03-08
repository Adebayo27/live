import { theme as origTheme, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  // components: {
  //   Toast: {
  //     variants: {
  //       subtle: (props) => { // only applies to `subtle` variant
  //         const { colorScheme: c } = props
  //         if (c !== "blue") {
  //           // use original definition for all color schemes except "blue"
  //           return origTheme.components.Alert.variants.subtle(props)
  //         }
  //         return {
  //           container: {
  //             bg: `red`, // or literal color, e.g. "#0984ff"
  //           },
  //         }
  //       }
  //     }
  //   }
  // },
  fonts: {
    heading: "'Lexend', sans-serif",
    body: "'Lexend', sans-serif",
  },
  colors: {
    blue: {
      blue500: '#211f5c',
      blue400: '#2C346D',
      blue300: '#3A4A7E',
      blue200: '#6689BB',
      blue100: '#78AADB',
    },
    red: {
      red500: '#EE4223',
      red400: '#F05C36',
      red300: '#F06944',
      red200: '#F3937A',
      red100: '#F5BDB7',
    },
    orange: {
      orange500: '#F5862E',
      orange400: '#F79749',
      orange300: '#FBBA7F',
      orange200: '#FCC38D',
      orange100: '#FEE8C9',
    },
    gray: {
      gray500: '#524F4E',
      gray400: '#606060',
      gray300: '#858383',
      gray200: '#C0C0C1',
      gray100: '#E7E8E9',
    },
    background: '#EEF3FF',
    green: '#38890B',
    white: '#FFFFFF',
    black: '#292F33',
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
});

export default theme;
