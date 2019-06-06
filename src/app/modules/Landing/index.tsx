/* base */
import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../../components/surfaces/AppBar';
// import Typography from '@material-ui/core/Typography';
import Typography from 'app/theme/index';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

const Header = styled.h1`
`;

const ComponentBase = styled.div``;

const Landing: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <ComponentBase>
      <AppBar/>

      {/*<Section>*/}
      <Header>IATI Query builder</Header>
      {/*<Typography variant="h1">IATI </Typography>*/}
      {/*<Subheader>This tool allows you to build common queries to obtain data from the IATI Datastore in CSV, XML and JSON format. </Subheader>*/}
      {/*<IconButton>Query Builder</IconButton>*/}
      {/*</Section>*/}

      {/*<Section>*/}
      {/*<Header2>The IATI data API</Header2>*/}
      {/*<Subheader>The query builder uses the OIPA to query the IATI database. OPIA is a open-source libary by <a>Zimmerman & Zimmerman</a> which extracts and stores raw IATI XML files from the IATI Registry and makes it avalible as API endpoints to build data driven information solutions.</Subheader>*/}
      {/*<IconButton/>*/}
      {/*</Section>*/}

      {/*<CookieNotice />*/}

      {/*<Footer></Footer>*/}
    </ComponentBase>
  );
};

export default Landing;
