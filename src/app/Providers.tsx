import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from 'app/theme';
import NoSsr from '@material-ui/core/NoSsr';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import 'index.css';

import configureStore, { IAppState } from 'app/store';
import { getAllOrganisationTypes } from 'app/modules/QueryBuilder/state/OrganisationTypes';
import { getAllOrganisationSectors } from 'app/modules/QueryBuilder/state/OrganisationSectors';

interface IProps {
  store: Store<IAppState>;
}

/*
Create a root component that receives the store via props
and wraps the App component with Provider, giving props to containers
*/
const Root: React.FC<IProps> = props => {
  return <Provider store={props.store}>{props.children}</Provider>;
};

// Generate the store
const store = configureStore();

Promise.all([
  store.dispatch(getAllOrganisationTypes()),
  store.dispatch(getAllOrganisationSectors())
]).then(() => {
  console.log('I did everything!');
});

const Providers: React.FC = props => {
  return (
    <ThemeProvider theme={theme}>
      {/*<React.StrictMode>*/}
      <NoSsr>
        <Root store={store}>
          <Router>{props.children}</Router>
        </Root>
      </NoSsr>
      {/*</React.StrictMode>*/}
    </ThemeProvider>
  );
};

export default Providers;
