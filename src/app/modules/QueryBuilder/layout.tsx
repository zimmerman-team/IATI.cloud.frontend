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
  WhoFragment
} from 'app/modules/QueryBuilder/fragments';
/* config & mock */

export const QueryBuilderLayout = () => {
  return (
    <Container maxWidth="lg">
      {/* for using the box util component to set top padding because of the fixed positioning of appbar */}
      <Box paddingTop="100px">
        {/* INTRO FRAGMENT */}
        <IntroFragment />
        <FragmentDivider />

        {/* WHO FRAGMENT */}
        <WhoFragment />
        {/*<FragmentDivider />*/}

        {/* FILTERS FRAGMENT */}
        {/*<FilterFragment />*/}
        {/*<FragmentDivider />*/}

        {/* OUTPUT FORMAT FRAGMENT */}
        {/*<OutputFragment />*/}
        <FragmentDivider />

        {/* RESULT FRAGMENT */}
        {/* the ResultFragment contains FragmentDivider */}
        {/*<ResultFragment />*/}

        {/* DOWNLOAD FRAGMENT */}
        <DownloadFragment />
      </Box>
    </Container>
  );
};
