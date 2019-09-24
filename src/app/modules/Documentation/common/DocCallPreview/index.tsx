import React from 'react';
import { Box } from '@material-ui/core';

import { RequestNavigator } from 'app/modules/Documentation/common/DocCallPreview/common/RequestNavigator';
import { RequestExample } from 'app/modules/Documentation/common/DocCallPreview/common/RequestExample';
import { RequestResponse } from 'app/modules/Documentation/common/DocCallPreview/common/RequestResponse';

export const DocCallPreview = () => {
  return (
    <div
      css={`
        background-color: #222224;
      `}
    >
      {/* ------------------------------------------------------------------ */}
      {/* tab container: use router? */}
      <RequestNavigator />

      {/* ------------------------------------------------------------------ */}

      <Box width="100%" height={'40px'} />
      <Box width="100%" height={'1px'} bgcolor="white" />

      {/* ------------------------------------------------------------------ */}
      {/* Example Request  */}
      {/* todo: check with siem what to actually show here */}
      <RequestExample />

      {/* ------------------------------------------------------------------ */}

      <Box width="100%" height={'40px'} />
      <Box width="100%" height={'1px'} bgcolor="white" />

      {/* ------------------------------------------------------------------ */}
      {/* Example Response  */}
      <RequestResponse />

      {/* ------------------------------------------------------------------ */}
      {/* fragment 3  */}
    </div>
  );
};
