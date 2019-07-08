/* base */
import React from 'react';
import styled from 'styled-components';

/**
 * todo: Please write a short component description of what this component does
 * @param {Object} customProperty - please describe component property
 */

const ComponentBase = styled.div``;

type CookieNoticeProps = {
  componentStack?: any;
  error?: any;
};

const ErrorBoundaryFallback = (props: CookieNoticeProps) => {
  return (
    <ComponentBase>
      <p>
        <strong>Oops! An error occured!</strong>
      </p>
      <p>Here’s what we know…</p>
      <p>
        <strong>Error:</strong> {props.error.toString()}
      </p>
      <p>
        <strong>Stacktrace:</strong> {props.componentStack}
      </p>
    </ComponentBase>
  );
};

export default ErrorBoundaryFallback;
