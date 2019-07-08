/* core */
import React from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Download from '@material-ui/core/SvgIcon/SvgIcon';
/* project component */
import URLField from 'app/components/inputs/textdisplay/URLField';
import IconButton from 'app/components/inputs/buttons/IconButton';
import { ModuleStore } from 'app/modules/QueryBuilder/state/store';
import { useStoreActions, useStoreState } from 'app/state/store';

/* props & base */
/* config & mock */

export const DownloadFragment = () => {
  const store = ModuleStore.useStore();
  const queryURL = useStoreState(state => state.query.url);

  return (
    <Grid container spacing={2} justify="space-between">
      <Grid item xs={12} sm={12}>
        <Typography variant="subtitle1">Files</Typography>
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
          sectorCategories
          <br />
          {JSON.stringify(store.get('sectorCategories'), null, 2)}
          <br />
          <br />
          organisations
          <br />
          {JSON.stringify(store.get('organisations'), null, 2)}
        </pre>
      </Grid>
    </Grid>
  );
};
