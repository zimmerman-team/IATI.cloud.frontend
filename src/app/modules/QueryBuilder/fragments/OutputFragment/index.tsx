/* core */
import React, { useEffect } from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
/* project component */
import MultiSelectChip from 'app/components/inputs/selects/MultiSelectChip';
import RadioButtonsGroup from 'app/components/inputs/radiobuttons/RadioButtonGroup';
/* common */
import { ModuleFragment } from 'app/modules/QueryBuilder/fragments/common';
/* config & mock */
import { fragmentConfig } from './config';
import { optionsFilter } from 'app/modules/QueryBuilder/mock';
// import { QueryBuilderStore } from 'app/modules/QueryBuilder/state/store';
import { useEffectOnce } from 'react-use';

export const OutputFragment = () => {
  // const addTodo = QueryBuilderStore.useStoreActions(actions => actions.addTodo);

  useEffectOnce(() => {
    console.log('Running effect once on mount');

    return () => {
      console.log('Running clean-up of effect on unmount');
    };
  });

  return (
    <ModuleFragment
      name={fragmentConfig.name}
      description={fragmentConfig.description}
    >
      <Grid item xs={12} sm={12} md={7}>
        {/*<MultiSelectChip
          helperText="See "
          helperTextLink="OIPA documentation"
          helperTextAfter=" for full list of possible elements"
          helperTextUrl="https://www.zimmermanzimmerman.nl"
          options={optionsFilter}
        />*/}
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        {/* todo: refactor, move buttongroup title here */}
        <RadioButtonsGroup tip="Each row contains a unique activity. Financial information is aggregated. Budget information is excluded. Other potentially repeating fields (such as sectors) are reported in a single cell, delimited by semi-colons." />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        {/* todo: refactor, move buttongroup title here */}
        <RadioButtonsGroup tip="Each Activity, Transaction or Budget row is repeated for each separate Sector reported. The corresponding percentage for the sector split is reported in a separate column. This allows you to easily add arithmetic to your spreadsheet to calculate values proportionately" />
      </Grid>
    </ModuleFragment>
  );
};
