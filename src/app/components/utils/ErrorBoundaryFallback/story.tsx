import React from 'react';
import { storiesOf } from '@storybook/react';
import ErrorBoundaryFallback from './index';

storiesOf('Component', module).add('Error boundary fallback', () => (
  <ErrorBoundaryFallback />
));
