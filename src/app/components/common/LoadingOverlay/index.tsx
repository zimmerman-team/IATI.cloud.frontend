import React from 'react';

/* styles */
import { OverlayBase } from 'app/components/common/LoadingOverlay/style';

/* components */
import CircularProgress from '@material-ui/core/CircularProgress';

export const LoadingOverlay = () => (
  <OverlayBase>
    <CircularProgress />
  </OverlayBase>
);
