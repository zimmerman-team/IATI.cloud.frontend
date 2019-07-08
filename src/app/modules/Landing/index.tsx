/* core */
import React from 'react';
/* third-party */
import useTitle from 'react-use/lib/useTitle';
/* layout */
import { LandingLayout } from './layout';
import { useQuery } from 'react-fetching-library';
import { BorgModel } from 'app/state/models/CyborgModel';
import { fetchBorgList } from 'app/state/api/actions';
import { OrganisationModel } from 'app/state/models';
import { fetchOrganisations } from 'app/state/api/actions/fetchBorgList';

function LandingModule() {
  /* set the window title */
  useTitle('OIPA');

  // const { loading, payload, error } = useQuery<BorgModel[]>(fetchBorgList);
  /* const { loading, payload, error } = useQuery<OrganisationModel[]>(
    fetchOrganisations
  );*/

  // const test = useQuery<OrganisationModel[]>(fetchOrganisations);
  //
  // console.log('test 1000', test.payload);

  /*if (payload) {
    payload.map((item: OrganisationModel) => {
      console.log(item.organisation_identifier);

      if (item.name.narratives) {
        item.name.narratives.map(mod => {
          console.log('--------');
          console.log(mod.text);
          return mod;
        });
      }
      console.log('');
      console.log('');
      return item;
    });
  }*/

  /*if (payload) {
    payload.map((item: BorgModel) => {
      console.log(item.id);
      if (item.modules) {
        item.modules.map(mod => {
          console.log('--------');
          console.log(mod.id);
          return mod;
        });
      }
      console.log('');
      console.log('');
      return item;
    });
  }*/

  /* instantiate the layout*/
  return LandingLayout();
}

export default LandingModule;
