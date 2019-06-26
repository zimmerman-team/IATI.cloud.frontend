import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { PlaceholderProps } from 'react-select/lib/components/Placeholder';
import { Palette } from 'app/theme';
import styled from 'styled-components';

interface OptionType {
  label: string;
  value: string;
}

const PlaceholderText = styled(props => <Typography {...props} />)`
  color: ${Palette.text.disabled};
`;

function Placeholder(props: PlaceholderProps<OptionType>) {
  return (
    <React.Fragment>
      <PlaceholderText variant="subtitle1">{props.children}</PlaceholderText>
    </React.Fragment>
  );
}

Placeholder.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired
} as any;

export default Placeholder;
