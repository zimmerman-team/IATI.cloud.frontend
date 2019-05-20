/* base */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ComponentBase = styled.div``;

const propTypes = {
  data: PropTypes.object
};
const defaultProps = {
  data: undefined
};

const NotFoundModule = () => {
  return <ComponentBase>joe, not found</ComponentBase>;
};

NotFoundModule.propTypes = propTypes;
NotFoundModule.defaultProps = defaultProps;

export default NotFoundModule;
