/* base */
import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';

// import Typography from '@material-ui/core/Typography';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

const ComponentBase = styled.div``;

const Landing: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <ComponentBase>
      {/*<Section>*/}
      <Typography variant="h1">IATI Query builder</Typography>
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
