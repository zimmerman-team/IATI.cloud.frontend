import React, { ReactNode } from 'react';
import Component from '@material-ui/core/Chip';
import { IconChipDelete } from 'app/assets/icons/IconChipDelete';
import styled from 'styled-components';

type Props = {
  label?: string | ReactNode;
  tabIndex?: number;
  className?: string;
  onDelete?: any;
  deleteIcon?: ReactNode;
};

const BaseComponent = styled((props) => <Component {...props} />)`
  && {
    border-radius: 2px;
    margin: 4px;

    & [class*='MuiChip-deleteIcon'] {
      margin-top: 1px;
    }

    & [class*='MuiChip-label'] {
      font-size: 14px;
      text-transform: capitalize;
      margin-bottom: 2px;
    }
  }
`;

export const Chip = (props: Props) => {
  function handleDelete() {
    //console.log('You clicked the delete icon.');
  }

  function handleClick() {
    //console.log('You clicked the Chip.');
  }

  return (
    <BaseComponent
      deleteIcon={<IconChipDelete />}
      label={props.label}
      onClick={handleClick}
      onDelete={handleDelete}
      color="primary"
      {...props}
    />
  );
};
