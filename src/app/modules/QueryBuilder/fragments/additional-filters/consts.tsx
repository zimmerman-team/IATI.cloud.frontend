//cc:query builder module fragments#; query builder fragments - additional filters;fragment constants
/* core */
import React from 'react';
/* project component */
import { AddFilterModule } from 'app/modules/QueryBuilder/fragments/additional-filters/common/AddFilterModule';

export const additionalFiltersPopData = [
  [
    'Activity',
    [
      {
        label: 'IATI version',
        component: (props) => (
          <AddFilterModule
            label="IATI version"
            dataKey="iatiVersion"
            placeholder="All IATI versions"
            value={props.store.get('iatiVersion')}
            onChange={(e) => props.store.set('iatiVersion')(e)}
          />
        ),
      },
      {
        label: 'Default language',
        component: (props) => (
          <AddFilterModule
            label="Default language"
            dataKey="language"
            placeholder="All languages"
            value={props.store.get('language')}
            onChange={(e) => props.store.set('language')(e)}
          />
        ),
      },
      {
        label: 'Default currency',
        component: (props) => (
          <AddFilterModule
            label="Currency"
            dataKey="defaultCurrency"
            placeholder="All currencies"
            value={props.store.get('defaultCurrency')}
            onChange={(e) => props.store.set('defaultCurrency')(e)}
          />
        ),
      },
      {
        label: 'Hierarchy',
        component: (props) => (
          <AddFilterModule
            label="Hierarchy"
            dataKey="hierarchy"
            placeholder="All hierarchies"
            value={props.store.get('hierarchy')}
            onChange={(e) => props.store.set('hierarchy')(e)}
          />
        ),
      },
      {
        label: 'Humanitarian',
        component: (props) => (
          <AddFilterModule
            label="Humanitarian"
            dataKey="humanitarian"
            placeholder="All options"
            value={props.store.get('humanitarian')}
            onChange={(e) => props.store.set('humanitarian')(e)}
          />
        ),
      },
      {
        label: 'Humanitarian Scope',
        component: (props) => (
          <AddFilterModule
            label="Humanitarian Scope"
            dataKey="humanitarianScope"
            placeholder="All options"
            value={props.store.get('humanitarianScope')}
            onChange={(e) => props.store.set('humanitarianScope')(e)}
          />
        ),
      },
      {
        label: 'Humanitarian Scope Vocabulary',
        component: (props) => (
          <AddFilterModule
            label="Humanitarian Scope Vocabulary"
            dataKey="humanitarianScopeVocab"
            placeholder="All options"
            value={props.store.get('humanitarianScopeVocab')}
            onChange={(e) => props.store.set('humanitarianScopeVocab')(e)}
          />
        ),
      },
      {
        label: 'Other identifier type',
        component: (props) => (
          <AddFilterModule
            label="Other identifier type"
            dataKey="otherIdentifierType"
            placeholder="All other identifier types"
            value={props.store.get('otherIdentifierType')}
            onChange={(e) => props.store.set('otherIdentifierType')(e)}
          />
        ),
      },

      {
        label: 'Activity status',
        component: (props) => (
          <AddFilterModule
            label="Activity status"
            dataKey="activityStatus"
            placeholder="All activity statuses"
            value={props.store.get('activityStatus')}
            onChange={(e) => props.store.set('activityStatus')(e)}
          />
        ),
      },
      {
        label: 'Activity scope',
        component: (props) => (
          <AddFilterModule
            label="Activity scope"
            dataKey="activityScope"
            placeholder="All activity scopes"
            value={props.store.get('activityScope')}
            onChange={(e) => props.store.set('activityScope')(e)}
          />
        ),
      },
      {
        label: 'Tag',
        component: (props) => (
          <AddFilterModule
            label="Tag"
            dataKey="tag"
            placeholder="All other identifier types"
            value={props.store.get('tag')}
            onChange={(e) => props.store.set('tag')(e)}
          />
        ),
      },
      {
        label: 'Policy marker',
        component: (props) => (
          <AddFilterModule
            label="Policy marker"
            dataKey="policyMarker"
            placeholder="All other identifier types"
            value={props.store.get('policyMarker')}
            onChange={(e) => props.store.set('policyMarker')(e)}
          />
        ),
      },
      {
        label: 'Collaboration type',
        component: (props) => (
          <AddFilterModule
            label="Collaboration type"
            dataKey="collaborationType"
            placeholder="All collaboration types"
            value={props.store.get('collaborationType')}
            onChange={(e) => props.store.set('collaborationType')(e)}
          />
        ),
      },
      {
        label: 'Default flow type',
        component: (props) => (
          <AddFilterModule
            label="Default flow type"
            dataKey="defaultFlowType"
            placeholder="All default flow types"
            value={props.store.get('defaultFlowType')}
            onChange={(e) => props.store.set('defaultFlowType')(e)}
          />
        ),
      },
      {
        label: 'Default finance type',
        component: (props) => (
          <AddFilterModule
            label="Default finance type"
            dataKey="financeType"
            placeholder="All default finance types"
            value={props.store.get('financeType')}
            onChange={(e) => props.store.set('financeType')(e)}
          />
        ),
      },
      {
        label: 'Default Aid type',
        component: (props) => (
          <AddFilterModule
            label="Default Aid type"
            dataKey="aidType"
            placeholder="All aid types"
            value={props.store.get('aidType')}
            onChange={(e) => props.store.set('aidType')(e)}
          />
        ),
      },
      {
        label: 'Default Aid type (category)',
        component: (props) => (
          <AddFilterModule
            label="Default Aid type (category)"
            dataKey="aidTypeCategory"
            placeholder="All aid type categories"
            value={props.store.get('aidTypeCategory')}
            onChange={(e) => props.store.set('aidTypeCategory')(e)}
          />
        ),
      },
      {
        label: 'Default Aid type vocabulary',
        component: (props) => (
          <AddFilterModule
            label="Default Aid type vocabulary"
            dataKey="aidTypeVocabulary"
            placeholder="All aid type vocabularies"
            value={props.store.get('aidTypeVocabulary')}
            onChange={(e) => props.store.set('aidTypeVocabulary')(e)}
          />
        ),
      },
      {
        label: 'Default tied status',
        component: (props) => (
          <AddFilterModule
            label="Default tied status"
            dataKey="tiedStatus"
            placeholder="All default tied statuses"
            value={props.store.get('tiedStatus')}
            onChange={(e) => props.store.set('tiedStatus')(e)}
          />
        ),
      },
      {
        label: 'Transaction type',
        component: (props) => (
          <AddFilterModule
            label="Transaction type"
            dataKey="transactionType"
            placeholder="All transaction types"
            value={props.store.get('transactionType')}
            onChange={(e) => props.store.set('transactionType')(e)}
          />
        ),
      },
      {
        label: 'Transaction flow type',
        component: (props) => (
          <AddFilterModule
            label="Transaction flow type"
            dataKey="transactionFlowType"
            placeholder="All transaction flow types"
            value={props.store.get('transactionFlowType')}
            onChange={(e) => props.store.set('transactionFlowType')(e)}
          />
        ),
      },
      {
        label: 'Transaction tied status',
        component: (props) => (
          <AddFilterModule
            label="Transaction tied status"
            dataKey="transactionTiedStatus"
            placeholder="All transaction tied status"
            value={props.store.get('transactionTiedStatus')}
            onChange={(e) => props.store.set('transactionTiedStatus')(e)}
          />
        ),
      },
      {
        label: 'Transaction value currency',
        component: (props) => (
          <AddFilterModule
            label="Transaction value currency"
            dataKey="defaultCurrency"
            placeholder="All transactions value currencies"
            value={props.store.get('transactionValueCurrency')}
            onChange={(e) => props.store.set('transactionValueCurrency')(e)}
          />
        ),
      },
      {
        label: 'Transaction humanitarian',
        component: (props) => (
          <AddFilterModule
            label="Transaction humanitarian"
            dataKey="transactionHumanitarian"
            placeholder="All options"
            value={props.store.get('transactionHumanitarian')}
            onChange={(e) => props.store.set('transactionHumanitarian')(e)}
          />
        ),
      },
      {
        label: 'Document link category',
        component: (props) => (
          <AddFilterModule
            label="Document link category"
            dataKey="documentLinkCategory"
            placeholder="All document link categories"
            value={props.store.get('documentLinkCategory')}
            onChange={(e) => props.store.set('documentLinkCategory')(e)}
          />
        ),
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
