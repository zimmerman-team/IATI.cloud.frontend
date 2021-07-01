//cc:application modules#;about module;

import React from 'react';
import { PageNotFoundLayout } from './layout';
import { useTitle } from 'react-use';

export function PageNotFound() {
  useTitle('IATI.cloud - 404 Page not found');
  return <PageNotFoundLayout />;
}
