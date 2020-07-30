import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Folder, FolderOpen } from '@material-ui/icons';
import { CustomLink2 } from 'app/modules/documentation-module/common/DocSideBar/common/ui/CustomLink2';

const openStyle: any = css`
  && {
    margin-right: 8px;
  }
`;

const closedStyle: any = css`
  && {
    fill: #828894;
    margin-right: 8px;
  }
`;

type Props = {
  open: boolean;
  text: string;
  to: string;
};

export const SubLink1 = (props: Props) => {
  return (
    <div
      css={`
        display: flex;
        flex-direction: row;
      `}
    >
      {props.open ? (
        <FolderOpen css={openStyle} />
      ) : (
        <Folder css={closedStyle} />
      )}
      <Link {...props}>{props.text}</Link>
    </div>
  );
};

const Link = styled((props) => <CustomLink2 {...props} />)`
  font-size: 14px;
  color: ${(props) => (props.open ? '#000000' : 'rgba(1, 1, 10, 0.6)')};
`;
