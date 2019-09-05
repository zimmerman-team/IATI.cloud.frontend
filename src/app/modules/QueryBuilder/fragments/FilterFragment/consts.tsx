/* core */
import React from 'react';
/* project component */
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
        disabled: true,
        component: props => (
          <AddFilterModule
            label="Aid type"
            dataKey="aidType"
            value={props.store.get('aidType')}
            onChange={e => props.store.set('aidType')(e)}
          />
        ),
      },
      {
        label: 'Aid type (category)',
        disabled: true,
        component: props => (
          <AddFilterModule
            label="Aid type (category)"
            dataKey="aidTypeCategory"
            value={props.store.get('aidTypeCategory')}
            onChange={e => props.store.set('aidTypeCategory')(e)}
          />
        ),
      },
      {
        label: 'Aid type vocabulary',
        disabled: true,
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
        disabled: true,
        component: () => (
          <AddFilterModule
            label="Budget identifier"
            dataKey="budgetIdentifier"
          />
        ),
      },
      {
        label: 'Budget identifier sector',
        disabled: true,
        component: () => (
          <AddFilterModule
            label="Budget identifier sector"
            dataKey="budgetIdentifierSector"
          />
        ),
      },
      {
        label: 'Budget identifier sector (category)',
        disabled: true,
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
