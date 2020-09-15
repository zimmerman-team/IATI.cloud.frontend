/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { IconButton } from 'app/components/inputs/buttons/IconButton';

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Download from '@material-ui/icons/GetApp';
import { useToggle } from 'react-use';
import { downloadFile } from 'app/modules/querybuilder-module/fragments/results/util';

type Props = {
  text?: string;
  type?: string;
  queryURL?: string;
  fileName?: string;
};

export const DownloadButton = (props) => {
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
