/* core */
import React from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Download from '@material-ui/icons/GetApp';
/* project component */
import URLField from 'app/components/inputs/textdisplay/URLField';
import IconButton from 'app/components/inputs/buttons/IconButton';
/* config & mock */
import { downloadFile } from './util';
import { fragmentConfig } from './model';
import { useStoreState } from 'app/state/store';
import { ModuleStore } from 'app/modules/QueryBuilder/state/store';

export const DownloadFragment = () => {
  /* get query url from app store */
  const store = ModuleStore.useStore();

  const queryURL = useStoreState(state => state.query.url);

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
        <IconButton
          icon={<Download />}
          label="Download CSV"
          onClick={() =>
            downloadFile(queryURL.replace('json', 'csv'), 'download.csv')
          }
        />
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
          reportingOrganisations
          <br />
          {JSON.stringify(store.get('organisations'), null, 2)}
          <br />
          <br />
          organisationTypes
          <br />
          {JSON.stringify(store.get('organisationTypes'), null, 2)}
          <br />
          <br />
          sectors
          <br />
          {JSON.stringify(store.get('sectors'), null, 2)}
          <br />
          <br />
          sectorCategories
          <br />
          {JSON.stringify(store.get('sectorCategories'), null, 2)}
          <br />
          <br />
          recipientCountries
          <br />
          {JSON.stringify(store.get('countries'), null, 2)}
          <br />
          <br />
          recipientRegions
          <br />
          {JSON.stringify(store.get('regions'), null, 2)}
          <br />
          <br />
          {store.get('mustHaveDates') === 'Yes' && (
            <>
              activityPeriode
              <br />
              {JSON.stringify(store.get('startDate'), null, 2)} -{' '}
              {JSON.stringify(store.get('endDate'), null, 2)}
              <br />
              <br />
            </>
          )}
          recipientRegions
          <br />
          {JSON.stringify(store.get('regions'), null, 2)}
          <br />
          <br />
          textSearch
          <br />
          {JSON.stringify(store.get('textSearch'), null, 2)}
          <br />
          <br />
          participatingOrganisations
          <br />
          {JSON.stringify(store.get('participatingOrgs'), null, 2)}
          <br />
          <br />
          activityStatus
          <br />
          {JSON.stringify(store.get('activityStatus'), null, 2)}
          <br />
          <br />
          activityScope
          <br />
          {JSON.stringify(store.get('activityScope'), null, 2)}
          <br />
        </pre>
      </Grid>
    </Grid>
  );
};
