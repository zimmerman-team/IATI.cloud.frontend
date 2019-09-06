/* core */
import React from 'react';
/* third-party */
import get from 'lodash/get';
import filter from 'lodash/filter';
import Grid from '@material-ui/core/Grid';
/* project component */
import { ConnectedSelect } from 'app/components/inputs/selects/ConnectedSelect';
import RadioButtonsGroup from 'app/components/inputs/radiobuttons/RadioButtonGroup';
/* config & mock */
import { fragmentConfig, getGroupOptions } from './model';
import { ModuleStore } from 'app/modules/QueryBuilder/state/store';
import { RadioGroupTitle } from 'app/components/inputs/radiobuttons/RadioButtonGroup/common/RadioGroupTitle';

export const OutputFragment = () => {
  const store = ModuleStore.useStore();
  const { getGroups, fieldsSelect } = fragmentConfig;

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
          options={getGroupOptions(store)}
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
    </Grid>
  );
};
