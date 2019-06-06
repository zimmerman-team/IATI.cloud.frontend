import { addParameters, addDecorator, configure } from '@storybook/react';
// import StoryRouter from 'storybook-react-router';
// import { setConsoleOptions, withConsole } from '@storybook/addon-console';
const { withPropsTable } = require('storybook-addon-react-docgen');
// import { action, configureActions } from '@storybook/addon-actions';
// import { muiTheme } from 'storybook-addon-material-ui';

const req = require.context('../src/app', true, /story.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

/*const newTheme = {
  themeName: 'Grey Theme',
  palette: {
    primary1Color: '#00bcd4',
    alternateTextColor: '#4a4a4a',
    canvasColor: '#616161',
    textColor: '#bdbdbd',
    secondaryTextColor: 'rgba(255, 255, 255, 0.54)',
    disabledColor: '#757575',
    accent1Color: '#607d8b'
  }
};*/

/*setConsoleOptions({
  panelExclude: []
});*/
// addDecorator((storyFn, context) => withConsole()(storyFn)(context));
// addDecorator(muiTheme([newTheme]));
// addDecorator(StoryRouter());
// addDecorator(withPropsTable);

configure(loadStories, module);
