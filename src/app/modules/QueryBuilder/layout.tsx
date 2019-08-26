/* core */
import React from 'react';
/* third-party */
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
/* common */
import { FragmentDivider } from 'app/modules/QueryBuilder/fragments/common';
/* fragments */
import {
  DownloadFragment,
  FilterFragment,
  IntroFragment,
  OutputFragment,
  ResultFragment,
  WhoFragment,
} from 'app/modules/QueryBuilder/fragments';
import { ModuleStore } from 'app/modules/QueryBuilder/state/store';
import { PageContainer } from 'app/modules/common/PageContainer';
import { Header } from 'app/components/surfaces/Header';
/* config & mock */

export const QueryBuilderLayout = () => {
  /* reference to the module store which is passed onto the fragments */
  const store = ModuleStore.useStore();
  return (
    <PageContainer>
      <Header>
        <IntroFragment/>
          {/*<FragmentDivider />*/}
      </Header>

      <Container maxWidth="lg">
        {/* WHO FRAGMENT */}
        <WhoFragment store={store} />
        <FragmentDivider />

        {/* FILTERS FRAGMENT */}
        <FilterFragment />
        <FragmentDivider />

        {/* OUTPUT FORMAT FRAGMENT */}
        <OutputFragment />
        <FragmentDivider />

        {/* RESULT FRAGMENT */}
        {/* the ResultFragment contains FragmentDivider */}
        <ResultFragment />

        {/* DOWNLOAD FRAGMENT */}
        <DownloadFragment store={store} />
      </Container>
    </PageContainer>
  );
};
