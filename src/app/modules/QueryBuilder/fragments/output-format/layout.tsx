//cc:query builder module fragments#; query builder fragments - output format;fragment layout and logic
/* core */
import React from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
/* project component */
import { ConnectedSelect } from 'app/components/inputs/selects/ConnectedSelect';
import { RadioButtonsGroup } from 'app/components/inputs/radiobuttons/RadioButtonGroup';
/* config & mock */
import {
  fragmentConfig,
  getActivityOptions,
  getTransactionOptions,
} from 'app/modules/QueryBuilder/fragments/output-format/model';
import { ModuleStore } from 'app/modules/QueryBuilder/state/store';
import { RadioGroupTitle } from 'app/components/inputs/radiobuttons/RadioButtonGroup/common/RadioGroupTitle';
import { QbStepNavigatorButton } from 'app/modules/QueryBuilder/common/QbStepNavigatorButton';
import { QbStepNavigator } from 'app/modules/QueryBuilder/common/QbStepNavigator';

export const OutputFragment = () => {
  const store = ModuleStore.useStore();
  const { getGroups, fieldsSelect, fieldsSelectTransactions } = fragmentConfig;

  const setFields = e => {
    store.set('fields')(e);
  };

  const activityActive = store.get('rowFormat') === 'activity';
  const transactionActive = store.get('rowFormat') === 'transaction';
  const budgetActive = store.get('rowFormat') === 'budget';

  return (
    <Grid
      container
      spacing={4}
      css={`
        min-height: 1000px;
      `}
      direction="column"
    >
      {getGroups(store).map(group => (
        <Grid item xs={12} sm={12} md={12} key={group.title}>
          {group.title && (
            <RadioGroupTitle
              title={group.title}
              tip={<div style={{ whiteSpace: 'pre-line' }}>{group.tip}</div>}
            />
          )}
          {group && (
            <RadioButtonsGroup
              items={group.items}
              value={group.value}
              onChange={group.onChange}
            />
          )}
        </Grid>
      ))}

      <Grid item xs={12} sm={12} md={12}>
        <ConnectedSelect
          {...fieldsSelect}
          onChange={setFields}
          value={store.get('fields')}
          options={getActivityOptions(store)}
          disabled={transactionActive || budgetActive}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <ConnectedSelect
          {...fieldsSelectTransactions}
          onChange={setFields}
          value={store.get('fields')}
          options={getTransactionOptions(store)}
          disabled={activityActive || budgetActive}
        />
      </Grid>

      <QbStepNavigator>
        <QbStepNavigatorButton
          label="Previous"
          path="/querybuilder/additional-filters"
        />
        <QbStepNavigatorButton label="Next" path="/querybuilder/results" />
      </QbStepNavigator>
    </Grid>
  );
};
