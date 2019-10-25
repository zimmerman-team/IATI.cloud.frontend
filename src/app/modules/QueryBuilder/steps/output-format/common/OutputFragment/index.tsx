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
} from 'app/modules/QueryBuilder/steps/output-format/common/OutputFragment/model';
import { ModuleStore } from 'app/modules/QueryBuilder/state/store';
import { RadioGroupTitle } from 'app/components/inputs/radiobuttons/RadioButtonGroup/common/RadioGroupTitle';
import { Link } from 'react-router-dom';
import { TextButton } from 'app/components/inputs/buttons/TextButton';

export const OutputFragment = () => {
  const store = ModuleStore.useStore();
  const { getGroups, fieldsSelect, fieldsSelectTransactions } = fragmentConfig;

  const setFields = e => {
    store.set('fields')(e);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={12}>
        <ConnectedSelect
          {...fieldsSelect}
          onChange={setFields}
          value={store.get('fields')}
          options={getActivityOptions(store)}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <ConnectedSelect
          {...fieldsSelectTransactions}
          onChange={setFields}
          value={store.get('fields')}
          options={getTransactionOptions(store)}
        />
      </Grid>
      {getGroups(store).map(group => (
        <Grid item xs={12} sm={12} md={12} key={group.title}>
          {group.title && (
            <RadioGroupTitle title={group.title} tip={group.tip} />
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

      <div
        css={`
          display: flex;
          justify-content: flex-end;
          width: 100%;
          margin-top: 50px;
        `}
      >
        <Grid item md={2}>
          <Link to="/querybuilder/results">
            <TextButton label="Next" />
          </Link>
        </Grid>
      </div>
    </Grid>
  );
};
