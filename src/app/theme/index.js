import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const Spacing = {
  inputSideSpacing: '15px'
};

export const Palette = {
  primary: {
    light: '#66a1ff',
    main: '#3074f1',
    dark: '#1e60d9',
    contrastText: '#fff'
  },
  secondary: {
    light: '#2bd3d9',
    main: '#17b8be',
    dark: '#0f9ea3',
    contrastText: '#000'
  },
  error: {
    light: '#f27e6d',
    main: '#f25139',
    dark: '#d94d38',
    contrastText: '#fff'
  },
  grey: {
    40: '#f0f3f7',
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161',
    greyBase: '#a1aebd'
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // divider: '#d94d38',
  background: {
    paper: '#fff',
    default: '#fafafa'
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(0, 0, 0, 0.14)',
    disabled: '#a1aebd',
    disabledBackground: '#f0f3f7'
  }
};

const Weight = {
  light: 200,
  regular: 300,
  medium: 500,
  bold: 600
};

const Breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

const Gutters = {};

const Magins = {};

const Shape = {
  borderRadius: 2
};

const zIndex = {
  mobileStepper: 1000,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
export const Typography = {
  fontFamily: 'Inter',
  fontSize: 14,
  fontWeightLight: 200,
  fontWeightRegular: 300,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  useNextVariants: true,
  h1: {
    fontSize: `${4}rem`,
    fontWeight: Weight.medium,
    letterSpacing: '-0.5px'
  },
  h2: {
    fontFamily: 'Inter-BETA',
    fontSize: `${3.5}rem`,
    fontWeight: Weight.regular,
    lineHeight: '64px'
  },
  h3: {
    fontSize: `${3}rem`,
    fontWeight: Weight.medium
  },
  h4: {
    fontSize: `${2.125}rem`,
    fontWeight: Weight.bold,
    letterSpacing: '0.3px'
  },
  h6: {
    fontSize: `${1.5}rem`,
    fontWeight: Weight.bold,
    lineHeight: '1.5'
  },
  h5: {
    fontSize: `${1.25}rem`,
    fontWeight: Weight.light,
    lineHeight: '1.5'
  },
  body1: {
    fontSize: `${1}rem`,
    fontWeight: Weight.regular
  },
  body2: {
    fontSize: `${0.875}rem`,
    fontWeight: Weight.regular,
    lineHeight: '1.71',
    letterSpacing: '0.3px'
  },
  subtitle1: {
    fontSize: `${1}rem`,
    fontWeight: Weight.medium,
    lineHeight: '1.5',
    letterSpacing: '0.2px'
  },
  subtitle2: {
    fontSize: `${0.875}rem`,
    fontWeight: Weight.medium
  },
  button: {
    fontSize: `${0.875}rem`,
    fontWeight: Weight.bold
  },
  caption: {
    fontSize: `${0.75}rem`,
    fontWeight: Weight.regular,
    lineHeight: '1.33',
    letterSpacing: '0.4px'
  },
  overline: {
    fontSize: `${0.75}rem`,
    fontWeight: Weight.regular
  },
  code: {
    fontSize: `${0.875}rem`,
    fontWeight: Weight.regular
  }
};

const Mixins = {
  content: {
    paddingTop: '1.5rem',
    paddingRight: '1rem',
    paddingBottom: '1.5rem',
    paddingLeft: '1rem',
    '@media (min-width: 600px)': {
      paddingTop: '2rem',
      paddingRight: '1.5rem',
      paddingBottom: '2rem',
      paddingLeft: '1.5rem'
    },
    '@media (min-width: 828px)': {
      paddingLeft: 0,
      paddingRight: 0,
      maxWidth: 780,
      margin: '0 auto'
    }
  }
};

export default createMuiTheme({
  palette: Palette,
  typography: Typography,
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      disableRipple: true,
      disableTouchRipple: true,
      focusRipple: false
    },
    MuiButton: {}
  },
  mixins: Mixins,
  shape: Shape,
  zIndex: zIndex
});
