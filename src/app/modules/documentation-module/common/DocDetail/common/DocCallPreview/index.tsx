import React from 'react';
import { Box } from '@material-ui/core';
import { RequestExample } from 'app/modules/documentation-module/common/DocDetail/common/DocCallPreview/common/RequestExample';
import { RequestResponse } from 'app/modules/documentation-module/common/DocDetail/common/DocCallPreview/common/RequestResponse';

export const DocCallPreview = () => {
  return (
    // @ts-ignore
    <Box
      css={`
        background-color: #222224;
        position: sticky;
        top: 187px;
        height: calc(100vh - 187px);
        overflow-y: scroll;
      `}
    >
      {/* ------------------------------------------------------------------ */}
      {/* tab container: use router? */}
      {/*<RequestNavigator />*/}

      {/* ------------------------------------------------------------------ */}

      <Box width="100%" height={'20px'} />

      {/* ------------------------------------------------------------------ */}
      {/* Example Request  */}
      {/* todo: check with siem what to actually show here */}
      <RequestExample />

      {/* ------------------------------------------------------------------ */}

      <Box width="100%" height={'10px'} />
      <Box width="100%" height={'1px'} bgcolor="white" />

      {/* ------------------------------------------------------------------ */}
      {/* Example Response  */}
      <RequestResponse />

      {/* ------------------------------------------------------------------ */}
      {/* fragment 3  */}
    </Box>
  );
};
