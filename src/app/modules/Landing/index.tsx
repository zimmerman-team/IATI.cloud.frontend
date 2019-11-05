//cc:application modules#;landing module
/* core */
import React from 'react';
/* third-party */
import useTitle from 'react-use/lib/useTitle';
/* layout */
import { LandingLayout } from './layout';

function LandingModule() {
  /* set the window title */
  useTitle('IATI Datastore');

  /* instantiate the layout*/
  return LandingLayout();
}

export default LandingModule;
