import React from 'react';
import { BaseButton } from 'app/components/inputs/buttons/BaseButton';
import Box from '@material-ui/core/Box';
import { useCopyToClipboard } from 'react-use';
import { FieldBackdrop } from 'app/components/common/FieldBackdrop';
import { BaseTextField } from 'app/components/inputs/common/BaseTextField';
import 'styled-components/macro';
import { IconButton } from 'app/components/inputs/buttons/IconButton';

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Download from '@material-ui/icons/GetApp';
import { useToggle } from 'react-use';
import { downloadFile } from 'app/modules/QueryBuilder/fragments/results/util';

type Props = {
  text?: string;
  type?: string;
  queryURL?: string;
  fileName?: string;
};

export const DownloadButton = props => {
  const [downloading, toggle] = useToggle(false);

  return (
    <div
      onClick={() => {
        downloadFile(props.queryURL, props.fileName);
        toggle();
      }}
    >
      {downloading ? (
        <IconButton
          icon={<CloudDownloadIcon />}
          label="Preparing download..."
          bgcolor="green"
        />
      ) : (
        <IconButton icon={<Download />} label={`Download ${props.type}`} />
      )}
    </div>
  );
};
