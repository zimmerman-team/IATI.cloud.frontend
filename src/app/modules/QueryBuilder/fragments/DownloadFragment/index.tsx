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
        <URLField text={queryURL.replace('json', 'csv')} />
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
      <Grid item xs={12} sm={9} md={9}>
        <URLField text={queryURL} />
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <IconButton
          icon={<Download />}
          label="Download JSON"
          onClick={() => downloadFile(queryURL, 'download.json')}
        />
      </Grid>
      <Grid item xs={12} sm={9} md={9}>
        <URLField text={queryURL.replace('json', 'xml')} />
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <IconButton
          icon={<Download />}
          label="Download XML"
          onClick={() =>
            downloadFile(queryURL.replace('json', 'xml'), 'download.xml')
          }
        />
      </Grid>
      {/* <Grid item xs={12} sm={9} md={9}>
        <URLField text={queryURL.replace('json', 'xlsx')} />
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <IconButton
          icon={<Download />}
          label="Download XLS"
          onClick={() =>
            downloadFile(queryURL.replace('json', 'xlsx'), 'download.xls')
          }
        />
      </Grid> */}
      {/* ---------------------------------------------------------------------------------------------------------- */}
      {/* DEBUG */}

      {process.env.NODE_ENV !== 'production' && (
        <Grid item>
          <div>
            <br />
            queryString
            <br />
            <br />
            {JSON.stringify(queryURL, null, 2)}
            <br />
            <br />
          </div>
          <pre>
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
            transactionProviderOrgs
            <br />
            {JSON.stringify(store.get('transactionProviderOrgs'), null, 2)}
            <br />
            <br />
            transactionReceiverOrgs
            <br />
            {JSON.stringify(store.get('transactionReceiverOrgs'), null, 2)}
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
            <br />
            aidType
            <br />
            {JSON.stringify(store.get('aidType'), null, 2)}
            <br />
            <br />
            aidTypeVocabulary
            <br />
            {JSON.stringify(store.get('aidTypeVocabulary'), null, 2)}
            <br />
            <br />
            defaultCurrency
            <br/>
            {JSON.stringify(store.get('defaultCurrency'), null, 2)}
            <br/>
            <br/>
            collaborationType
            <br />
            {JSON.stringify(store.get('collaborationType'), null, 2)}
            <br/>
            <br/>
            defaultFlowType
            <br/>
            {JSON.stringify(store.get('defaultFlowType'), null, 2)}
            <br/>
            <br/>
            hierarchy
            <br/>
            {JSON.stringify(store.get('hierarchy'), null, 2)}
            <br/>
            <br/>
          </pre>
        </Grid>
      )}
      {/* ---------------------------------------------------------------------------------------------------------- */}
    </Grid>
  );
};
