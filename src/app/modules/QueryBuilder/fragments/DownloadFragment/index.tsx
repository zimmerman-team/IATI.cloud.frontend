/* core */
import React from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
/* todo: juan: you were referencing to a faulty path to get the download icon  */
import Download from '@material-ui/icons/GetApp';
/* project component */
import URLField from 'app/components/inputs/textdisplay/URLField';
import IconButton from 'app/components/inputs/buttons/IconButton';
import { useStoreState } from 'app/state/store';
/* props & base */
/* config & mock */
import { fragmentConfig } from './model';

export const DownloadFragment = ({ store }) => {
  /* get query url from app store */
  const queryURL = useStoreState(appStore => appStore.query.url);

  return (
    <Grid container spacing={2} justify="space-between">
      <Grid item xs={12} sm={12}>
        <Typography variant="subtitle1">{fragmentConfig.name}</Typography>
      </Grid>
      {/* todo: make re-usable component */}
      <Grid item xs={12} sm={9} md={9}>
        <URLField text={queryURL} />
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <IconButton label="Download CSV" icon={<Download />} disabled />
      </Grid>
      <Grid item>
        <pre>
          queryString
          <br />
          {JSON.stringify(queryURL, null, 2)}
          <br />
          <br />
          <b>Context Store:</b>
          <br />
          <br />
          organisationTypes
          <br />
          {JSON.stringify(store.get('organisationTypes'), null, 2)}
          <br />
          <br />
          ectorCategories
          <br />
          {JSON.stringify(store.get('sectorCategories'), null, 2)}
          <br />
          <br />
          organisations
          <br />
          {JSON.stringify(store.get('organisations'), null, 2)}
        </pre>
      </Grid>
      *
    </Grid>
  );
};
