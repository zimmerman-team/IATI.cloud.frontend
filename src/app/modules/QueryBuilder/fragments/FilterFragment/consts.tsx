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
        component: props => (
          <AddFilterModule
            label="Aid type vocabulary"
            dataKey="aidTypeVocabulary"
            value={props.store.get('aidTypeVocabulary')}
            onChange={e => props.store.set('aidTypeVocabulary')(e)}
          />
        ),
      },

      {
        label: 'Default currency',
        component: props => (
          <AddFilterModule
            label="Currency"
            dataKey="defaultCurrency"
            value={props.store.get('defaultCurrency')}
            onChange={e => props.store.set('defaultCurrency')(e)}
          />
        )
      },
      {
        label: 'Collaboration type',
        component: props => (
          <AddFilterModule
            label="Collaboration type"
            dataKey="collaborationType"
            value={props.store.get('collaborationType')}
            onChange={e => props.store.set('collaborationType')(e)}
          />
        )
      },
      {
        label: 'Default flow type',
        component: props => (
          <AddFilterModule
            label="Default flow type"
            dataKey="defaultFlowType"
            value={props.store.get('defaultFlowType')}
            onChange={e => props.store.set('defaultFlowType')(e)}
          />
        )
      },
      {
        label: 'Hierarchy',
        component: props => (
          <AddFilterModule
            label="Hierarchy"
            dataKey="hierarchy"
            value={props.store.get('hierarchy')}
            onChange={e => props.store.set('hierarchy')(e)}
          />
        )
      },
      {
        label: 'Default finance type',
        component: props => (
          <AddFilterModule
            label="Default finance type"
            dataKey="financeType"
            value={props.store.get('financeType')}
            onChange={e => props.store.set('financeType')(e)}
          />
        )
      },
      {
        label: 'Default tied status',
        component: props => (
          <AddFilterModule
            label="Default tied status"
            dataKey="tiedStatus"
            value={props.store.get('tiedStatus')}
            onChange={e => props.store.set('tiedStatus')(e)}
          />
        )
      },
      {
        label: 'Transaction type',
        component: props => (
          <AddFilterModule
            label="Transaction type"
            dataKey="transactionType"
            value={props.store.get('transactionType')}
            onChange={e => props.store.set('transactionType')(e)}
          />
        )
      },
      {
        label: 'Document link category',
        component: props => (
          <AddFilterModule
            label="Document link category"
            dataKey="documentLinkCategory"
            value={props.store.get('documentLinkCategory')}
            onChange={e => props.store.set('documentLinkCategory')(e)}
          />
        )
      },
    ],
  ],
  // [
  //   'Transaction',
  //   [
  //     {
  //       label: 'Budget identifier',
  //       disabled: true,
  //       component: () => (
  //         <AddFilterModule
  //           label="Budget identifier"
  //           dataKey="budgetIdentifier"
  //         />
  //       ),
  //     },
  //     {
  //       label: 'Budget identifier sector',
  //       disabled: true,
  //       component: () => (
  //         <AddFilterModule
  //           label="Budget identifier sector"
  //           dataKey="budgetIdentifierSector"
  //         />
  //       ),
  //     },
  //     {
  //       label: 'Budget identifier sector (category)',
  //       disabled: true,
  //       component: () => (
  //         <AddFilterModule
  //           label="Budget identifier sector (category)"
  //           dataKey="budgetIdentifierSectorCategory"
  //         />
  //       ),
  //     },
  //   ],
  // ],
];
