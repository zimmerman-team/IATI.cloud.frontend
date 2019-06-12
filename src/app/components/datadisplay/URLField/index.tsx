import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import BaseButton from 'app/components/inputs/buttons/BaseButton';
import { Box } from '@material-ui/core';

type Props = {
  label?: string;
};

const Papier = styled.div`
  position: relative;
  height: 48px;
  border-radius: 2px;
  background-color: #f0f3f7;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
`;

const URLField: React.FC<Props> = props => {
  return (
    <Papier>
      <Typography>
        http://datastore.iatistandard.org/api/1/access/activity.csv
      </Typography>

      <Box width="100px">
        <BaseButton label="Copy" />
      </Box>
    </Papier>
  );
};

export default URLField;
