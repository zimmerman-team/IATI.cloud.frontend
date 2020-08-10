// cc:query builder module fragments#; query builder fragments - results;fragment layout and logic
/* core */
import React, { useState } from 'react';
import { css } from 'styled-components/macro';
/* third-party */
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
/* project component */
import { URLField } from 'app/components/inputs/textdisplay/URLField';
/* config & mock */
import { fragmentConfig } from 'app/modules/querybuilder-module/fragments/results/model';
import { useStoreState } from 'app/state/store';
import { ModuleStore } from 'app/modules/querybuilder-module/state/store';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
// import { changeSampleSize } from 'app/state/models/QueryModel.ts';
import { QbStepNavigatorButton } from 'app/modules/querybuilder-module/common/QbStepNavigatorButton';
import { QbStepNavigator } from 'app/modules/querybuilder-module/common/QbStepNavigator';
import { DataTable } from 'app/components/datadisplay/DataTable';
import { DownloadButton } from './common/DownloadButton';
import { FormResetButton } from 'app/modules/querybuilder-module/common/FormResetButton';
import { RadioGroupTitle } from 'app/components/inputs/radiobuttons/RadioButtonGroup/common/RadioGroupTitle';
// import { setRows } from 'app/state/models/QueryModel';

const filename = () => new Date().toISOString().slice(0, 19);

const disabledSection = css`
  && {
    opacity: 0.5;
    cursor: not-allowed;
    > div {
      pointer-events: none;
    }
  }
`;

export const DownloadFragment = () => {
  /* get query url from app store */
  const store = ModuleStore.useStore();

  const queryURL = useStoreState((state) => state.query.url);
  const [queryState, setQueryState] = useState(queryURL);
  // console.log(queryState);
  const rowFormat = store.get('rowFormat');
  const repeatRows = store.get('repeatRows');
  let stringToBeReplaced = 'csv';

  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));

  // this is how we do to remove (not remove but leave them blank) JSON strings in CSV output.
  // this operation is needed only when there is no field specification in the query.
  if (rowFormat === 'activity' && !queryURL.includes('fl')) {
    stringToBeReplaced =
      'csv&tr=activity-xml.xsl&fl=*,reporting_org:[value v=""],title:[value v=""],description:[value v=""],description_narrative:[value v=""],participating_org:[value v=""],other_identifier:[value v=""],' +
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

  let csvUrl = queryState.includes('fl=')
    ? queryState.replace('json', 'csv')
    : queryState.replace('json', `xslt&tr=${rowFormat}-csv.xsl`);

  if (repeatRows !== '0') {
    csvUrl = csvUrl.replace(`/${rowFormat}`, `/${rowFormat}-${repeatRows}`);
    csvUrl = csvUrl.replace(
      `tr=${rowFormat}-csv.xsl`,
      `tr=${rowFormat}-${repeatRows}-csv.xsl`
    );
  }

  return (
    <Grid
      container
      spacing={4}
      css={`
        min-height: 1000px;
      `}
      direction="column"
    >
      <Grid item lg={12}>
        <DataTable
          url={queryURL}
          rowFormat={store.get('rowFormat')}
          defaultCols={store.get('fields').length === 0}
        />
      </Grid>
      <Grid item lg={12} />
      <Grid item xs={12} sm={12} lg={12}>
        <Typography variant="subtitle1">{fragmentConfig.name}</Typography>
      </Grid>

      {/* ////////////////////////////////////////////////////////////// */}
      <Grid container spacing={2} item md={12} lg={12}>
        <Grid item xs={12} sm={12} md={12}>
          <RadioGroupTitle title="Choose sample size" />

          <RadioGroup
            defaultValue="50"
            onChange={(e) => {
              switch (e.target.value) {
                case '50':
                  document.cookie = 'rows=rows=50';
                  setQueryState(queryState.concat('', 'rows=50'));
                  console.log('50 rows:', queryState);
                  break;
                case 'All':
                  document.cookie = 'rows=';
                  setQueryState(queryState.replace('rows=50', ''));
                  console.log('all:', queryState);
                  console.log('all2:', queryState.replace('rows=50', ''));
                  break;
              }
            }}
            row
          >
            <FormControlLabel
              color="red"
              value="50"
              control={<Radio />}
              label="50 activities"
            />
            <FormControlLabel
              color="default"
              value="All"
              control={<Radio />}
              label="All activities"
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} md={10} lg={9}>
          <URLField text={csvUrl} />
        </Grid>
        <Grid item xs={4} md={2} lg={3}>
          <DownloadButton
            type="CSV"
            queryURL={
              queryState.includes('fl=')
                ? queryState.replace('json', 'csv')
                : queryState.replace('json', `xslt&tr=${rowFormat}-csv.xsl`)
            }
            fileName={`iatidatastore-iatistandard-${filename()}.csv`}
          />
        </Grid>
      </Grid>

      {/* ////////////////////////////////////////////////////////////// */}
      <Tooltip
        placement="right"
        title={
          repeatRows !== '0'
            ? 'Not available in multi-sector/country expansion'
            : ''
        }
      >
        <Grid
          container
          spacing={2}
          item
          md={12}
          lg={12}
          css={repeatRows !== '0' && disabledSection}
        >
          <Grid item xs={12} md={10} lg={9}>
            <URLField text={queryState} />
          </Grid>
          <Grid item xs={4} md={2} lg={3}>
            <DownloadButton
              type="JSON"
              queryURL={queryState}
              fileName={`iatidatastore-iatistandard-${filename()}.json`}
            />
          </Grid>
        </Grid>
      </Tooltip>

      {/* ////////////////////////////////////////////////////////////// */}
      <Tooltip
        placement="right"
        title={
          repeatRows !== '0'
            ? 'Not available in multi-sector/country expansion'
            : ''
        }
      >
        <Grid
          container
          spacing={2}
          item
          md={12}
          lg={12}
          css={repeatRows !== '0' && disabledSection}
        >
          <Grid item xs={12} md={10} lg={9}>
            <URLField
              text={
                rowFormat === 'activity'
                  ? queryState.replace('json', `xslt&tr=${rowFormat}-xml.xsl`)
                  : queryState.replace('json', 'xml')
              }
            />
          </Grid>
          <Grid item xs={4} md={2} lg={3}>
            <DownloadButton
              type="XML"
              queryURL={
                rowFormat === 'activity'
                  ? queryState.replace('json', `xslt&tr=${rowFormat}-xml.xsl`)
                  : queryState.replace('json', 'xml')
              }
              fileName={`iatidatastore-iatistandard-${filename()}.xml`}
            />
          </Grid>
        </Grid>
      </Tooltip>

      {/* ---------------------------------------------------------------------------------------------------------- */}
      {/* DEBUG */}

      {/* ---------------------------------------------------------------------------------------------------------- */}

      <QbStepNavigator>
        <QbStepNavigatorButton
          label="Back"
          path="/querybuilder/output-format"
        />
        <Grid
          item
          container
          sm={12}
          md={12}
          css={`
            justify-content: flex-end;
          `}
        >
          <FormResetButton />
          <QbStepNavigatorButton
            label="Done"
            path="/querybuilder/core-filters"
          />
        </Grid>
      </QbStepNavigator>
    </Grid>
  );
};
