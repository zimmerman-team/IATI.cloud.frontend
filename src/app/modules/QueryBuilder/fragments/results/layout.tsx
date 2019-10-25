/* core */
import React from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Download from '@material-ui/icons/GetApp';
/* project component */
import { URLField } from 'app/components/inputs/textdisplay/URLField';
import { IconButton } from 'app/components/inputs/buttons/IconButton';
/* config & mock */
import { downloadFile } from 'app/modules/QueryBuilder/fragments/results/util';
import { fragmentConfig } from 'app/modules/QueryBuilder/fragments/results/model';
import { useStoreState } from 'app/state/store';
import { ModuleStore } from 'app/modules/QueryBuilder/state/store';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export const DownloadFragment = () => {
  /* get query url from app store */
  const store = ModuleStore.useStore();

  const queryURL = useStoreState(state => state.query.url);
  const rowFormat = store.get('rowFormat');
  let stringToBeReplaced = 'csv';

  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));
  // const md = useMediaQuery('(min-width:768px)');

  //this is how we do to remove (not remove but leave them blank) JSON strings in CSV output.
  //this operation is needed only when there is no field specification in the query.
  if (rowFormat === 'activity' && !queryURL.includes('fl')) {
    stringToBeReplaced =
      'csv&fl=*,reporting_org:[value v=""],title:[value v=""],description:[value v=""],description_narrative:[value v=""],participating_org:[value v=""],other_identifier:[value v=""],' +
      'activity_date:[value v=""],contact_info:[value v=""],recipient_country:[value v=""],recipient_region:[value v=""],location:[value v=""],sector:[value v=""],' +
      'tag:[value v=""],country_budget_items:[value v=""],humanitarian_scope:[value v=""],policy_marker:[value v=""],default_aid_type:[value v=""],budget:[value v=""],' +
      'planned_disbursement:[value v=""],transaction:[value v=""],document_link:[value v=""],related_activity:[value v=""],legacy_data:[value v=""],conditions:[value v=""],' +
      'result_document_link:[value v=""],result_reference:[value v=""],result_indicator:[value v=""],result_indicator_reference:[value v=""],result_indicator_baseline_document_link_title:[value v=""],' +
      'result_indicator_baseline_document_link_description:[value v=""],fss:[value v=""],crs_add:[value v=""]';
  }

  if (rowFormat === 'transaction' && !queryURL.includes('fl')) {
    stringToBeReplaced =
      'csv&fl=*,reporting_org_narrative:[value v=""],sector:[value v=""]';
  }

  return (
    <Grid container spacing={2} justify="space-between">
      <Grid item xs={12} sm={12}>
        <Typography variant="subtitle1">{fragmentConfig.name}</Typography>
      </Grid>
      {/* todo: make re-usable component */}
      <Grid item xs={12} md={10} lg={9}>
        <URLField text={queryURL.replace('json', stringToBeReplaced)} />
      </Grid>
      <Grid item xs={4} md={2} lg={3} justify="flex-end">
        <IconButton
          icon={<Download />}
          label={md ? 'CSV' : 'Download CSV'}
          onClick={() =>
            downloadFile(
              queryURL.replace('json', stringToBeReplaced),
              'download.csv'
            )
          }
        />
      </Grid>
      <Grid item xs={12} md={10} lg={9}>
        <URLField text={queryURL} />
      </Grid>
      <Grid item xs={4} md={2} lg={3}>
        <IconButton
          icon={<Download />}
          label={md ? 'JSON' : 'Download JSON'}
          onClick={() => downloadFile(queryURL, 'download.json')}
        />
      </Grid>
      <Grid item xs={12} md={10} lg={9}>
        <URLField text={queryURL.replace('json', 'xml')} />
      </Grid>
      <Grid item xs={4} md={2} lg={3}>
        <IconButton
          icon={<Download />}
          label={md ? 'XML' : 'Download XML'}
          onClick={() =>
            downloadFile(queryURL.replace('json', 'xml'), 'download.xml')
          }
        />
      </Grid>

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
            secondaryReporter
            <br />
            {JSON.stringify(store.get('secondaryReporter'), null, 2)}
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
                [<br />
                &nbsp;&nbsp;&nbsp;&nbsp; startDate After:{' '}
                {JSON.stringify(store.get('startDateAfter'), null, 2)}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; startDateBefore:{' '}
                {JSON.stringify(store.get('startDateBefore'), null, 2)}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; endDateAfter:{' '}
                {JSON.stringify(store.get('endDateAfter'), null, 2)}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; endDateBefore:{' '}
                {JSON.stringify(store.get('endDateBefore'), null, 2)}
                <br />]
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
            <br />
            {JSON.stringify(store.get('defaultCurrency'), null, 2)}
            <br />
            <br />
            collaborationType
            <br />
            {JSON.stringify(store.get('collaborationType'), null, 2)}
            <br />
            <br />
            defaultFlowType
            <br />
            {JSON.stringify(store.get('defaultFlowType'), null, 2)}
            <br />
            <br />
            hierarchy
            <br />
            {JSON.stringify(store.get('hierarchy'), null, 2)}
            <br />
            <br />
            financeType
            <br />
            {JSON.stringify(store.get('financeType'), null, 2)}
            <br />
            <br />
            tiedStatus
            <br />
            {JSON.stringify(store.get('tiedStatus'), null, 2)}
            <br />
            <br />
            transactionType
            <br />
            {JSON.stringify(store.get('transactionType'), null, 2)}
            <br />
            <br />
            documentLinkCategory
            <br />
            {JSON.stringify(store.get('documentLinkCategory'), null, 2)}
            <br />
            <br />
            iatiVersion
            <br />
            {JSON.stringify(store.get('iatiVersion'), null, 2)}
            <br />
            <br />
            defaultLanguage
            <br />
            {JSON.stringify(store.get('language'), null, 2)}
            <br />
            <br />
            transactionFlowType
            <br />
            {JSON.stringify(store.get('transactionFlowType'), null, 2)}
            <br />
            <br />
            transactionTiedStatus
            <br />
            {JSON.stringify(store.get('transactionTiedStatus'), null, 2)}
            <br />
            <br />
            transactionValueCurrency
            <br />
            {JSON.stringify(store.get('transactionValueCurrency'), null, 2)}
            <br />
            <br />
            humanitarian
            <br />
            {JSON.stringify(store.get('humanitarian'), null, 2)}
            <br />
            <br />
            transactionHumanitarian
            <br />
            {JSON.stringify(store.get('transactionHumanitarian'), null, 2)}
            <br />
            <br />
            otherIdentifierType
            <br />
            {JSON.stringify(store.get('otherIdentifierType'), null, 2)}
          </pre>
        </Grid>
      )}
      {/* ---------------------------------------------------------------------------------------------------------- */}
    </Grid>
  );
};
