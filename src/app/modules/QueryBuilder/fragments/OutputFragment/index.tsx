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
import { fragmentConfig } from './model';
import { optionsFilter } from 'app/modules/QueryBuilder/mock';
// import { QueryBuilderStore } from 'app/modules/QueryBuilder/state/appStore';
import { useEffectOnce } from 'react-use';
import { ConnectedSelect } from 'app/components/inputs/selects/ConnectedSelect';
import TooltipButton from 'app/components/inputs/buttons/TooltipButton';
import FormLabel from '@material-ui/core/FormLabel';
import styled from 'styled-components';
import { RadioGroupTitle } from 'app/components/inputs/radiobuttons/RadioButtonGroup/common/RadioGroupTitle';

export const OutputFragment = () => {
  // const addTodo = QueryBuilderStore.useStoreActions(actions => actions.addTodo);

  const { groups } = fragmentConfig;

  return (
    <ModuleFragment
      name={fragmentConfig.name}
      description={fragmentConfig.description}
    >
      {/* <Grid item xs={12} sm={12} md={7}>
        <ConnectedSelect
          helperText="See "
          helperTextLink="OIPA documentation"
          helperTextAfter=" for full list of possible elements"
          helperTextUrl="https://www.zimmermanzimmerman.nl"
          options={optionsFilter}
        />
      </Grid> */}

      {groups &&
        groups.map(group => (
          <Grid item xs={12} sm={4} md={4}>
            {group.title && <RadioGroupTitle title={group.title} />}
            {group && <RadioButtonsGroup items={group.items} />}
          </Grid>
        ))}
    </ModuleFragment>
  );
};
