//cc:landing module
/* core */
import React from 'react';
/* third-party */
import useTitle from 'react-use/lib/useTitle';
/* layout */
import { LandingLayout } from './layout';
import { useQuery } from 'react-fetching-library';
// import { BorgModel } from 'app/state/models/CyborgModel';
import { OrganisationModel } from 'app/state/models';
import { fetchOrganisations, fetchBorgList } from 'app/state/api/actions';

function LandingModule() {
  /* set the window title */
  useTitle('IATI Datastore');

  /* instantiate the layout*/
  return LandingLayout();
}

export default LandingModule;
