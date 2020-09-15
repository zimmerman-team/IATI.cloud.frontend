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
} from 'app/modules/querybuilder-module/fragments/output-format/model';
import { ModuleStore } from 'app/modules/querybuilder-module/state/store';
import { RadioGroupTitle } from 'app/components/inputs/radiobuttons/RadioButtonGroup/common/RadioGroupTitle';
import { QbStepNavigatorButton } from 'app/modules/querybuilder-module/common/QbStepNavigatorButton';
import { QbStepNavigator } from 'app/modules/querybuilder-module/common/QbStepNavigator';
import { FormResetButton } from 'app/modules/querybuilder-module/common/FormResetButton';

export const OutputFragment = () => {
  const store = ModuleStore.useStore();
  const { getGroups, fieldsSelect, fieldsSelectTransactions } = fragmentConfig;

  const setFields = (e) => {
    store.set('fields')(e || []);
  };

  const activityActive = store.get('rowFormat') === 'activity';
  const transactionActive = store.get('rowFormat') === 'transaction';
  const budgetActive = store.get('rowFormat') === 'budget';

  function getRadioBtnGroupItems(group) {
    if (
      group.groupID === 'repeatRows' &&
      store.get('rowFormat') !== 'activity'
    ) {
      const items = group.items.slice();
      items[1].disabled = true;
      items[2].disabled = true;
      return items;
    }
    return group.items;
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
      {getGroups(store).map((group) => (
        <Grid item xs={12} sm={12} md={12} key={group.title}>
          {group.title && (
            <RadioGroupTitle
              title={group.title}
              tip={<div style={{ whiteSpace: 'pre-line' }}>{group.tip}</div>}
            />
          )}
          {group && (
            <RadioButtonsGroup
              value={group.value}
              onChange={group.onChange}
              items={getRadioBtnGroupItems(group)}
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
          label="Back"
          path="/querybuilder/additional-filters"
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
          <QbStepNavigatorButton label="Next" path="/querybuilder/results" />
        </Grid>
      </QbStepNavigator>
    </Grid>
  );
};
