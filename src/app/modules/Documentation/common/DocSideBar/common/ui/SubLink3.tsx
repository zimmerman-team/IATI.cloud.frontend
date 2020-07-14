import React from 'react';
import styled from 'styled-components/macro';
import { CustomLink2 } from 'app/modules/Documentation/common/DocSideBar/common/ui/CustomLink2';

type Props = {
  active: boolean;
  requestMethod: string;
  text: string;
  to: string;
};

export const SubLink3 = (props: Props) => {
  return (
    <div
      css={`
        display: flex;
        flex-direction: row;
        height: 42px;
        align-items: center;
      `}
    >
      <Trail />
      <Link to={props.to}>{props.requestMethod + ' ' + props.text}</Link>
    </div>
  );
};

const Link = styled((props) => <CustomLink2 {...props} />)`
  display: flex;
  font-size: 14px;
  color: rgb(85, 85, 85);
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  margin-bottom: 0 !important;
`;

const Trail = styled((props) => <div {...props} />)`
  width: 4px;
  height: 42px;
  margin-right: 18px;
  background-color: ${(props) => (props.active ? '#5B6673' : '#E2E6EB')};
`;
