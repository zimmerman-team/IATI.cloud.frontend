/* core */
import React from 'react';
// import Grid from '@material-ui/core/Grid';
/* project component */
// import DateField from 'app/components/inputs/textinputs/DateInputField';
import { AddFilterModule } from 'app/modules/QueryBuilder/fragments/FilterFragment/common/AddFilterModule';

export const additionalFiltersPopData = [
  [
    'Activity',
    [
      {
        label: 'Activity status',
        component: props => (
          <AddFilterModule
            label="Activity status"
            dataKey="activityStatus"
            value={props.store.get('activityStatus')}
            onChange={e => props.store.set('activityStatus')(e)}
          />
        ),
      },
      // {
      //   label: 'Activity periode',
      //   component: () => (
      //     <>
      //       <Grid item xs={12} sm={6} md={4}>
      //         <DateField />
      //       </Grid>
      //       <Grid item xs={12} sm={6} md={4}>
      //         <DateField />
      //       </Grid>
      //     </>
      //   ),
      // },
      {
        label: 'Activity scope',
        component: props => (
          <AddFilterModule
            label="Activity scope"
            dataKey="activityScope"
            value={props.store.get('activityScope')}
            onChange={e => props.store.set('activityScope')(e)}
          />
        ),
      },
      {
        label: 'Aid type',
        component: () => <AddFilterModule label="Aid type" dataKey="aidType" />,
      },
      {
        label: 'Aid type (category)',
        component: () => (
          <AddFilterModule
            label="Aid type (category)"
            dataKey="aidTypeCategory"
          />
        ),
      },
      {
        label: 'Aid type vocabulary',
        component: () => (
          <AddFilterModule
            label="Aid type vocabulary"
            dataKey="aidTypeVocabulary"
          />
        ),
      },
    ],
  ],
  [
    'Transaction',
    [
      {
        label: 'Budget identifier',
        component: () => (
          <AddFilterModule
            label="Budget identifier"
            dataKey="budgetIdentifier"
          />
        ),
      },
      {
        label: 'Budget identifier sector',
        component: () => (
          <AddFilterModule
            label="Budget identifier sector"
            dataKey="budgetIdentifierSector"
          />
        ),
      },
      {
        label: 'Budget identifier sector (category)',
        component: () => (
          <AddFilterModule
            label="Budget identifier sector (category)"
            dataKey="budgetIdentifierSectorCategory"
          />
        ),
      },
    ],
  ],
];
