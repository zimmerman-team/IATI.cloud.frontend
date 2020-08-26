import React from 'react';
import styled from 'styled-components/macro';
import { CustomLink2 } from 'app/modules/documentation-module/common/DocSideBar/common/ui/CustomLink2';

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
        min-height: 42px;
        flex-direction: row;
        align-items: center;
      `}
    >
      <Link to={props.to} active={props.active}>
        {`${props.requestMethod} ${props.text}`}
      </Link>
    </div>
  );
};

const Link = styled((props) => <CustomLink2 {...props} />)`
  display: flex;
  font-size: 14px;
  min-height: 42px;
  flex-direction: row;
  align-items: center;
  color: rgb(85, 85, 85);
  padding: 5px 0 5px 18px;
  margin-bottom: 0 !important;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  border-left: 4px solid ${(props) => (props.active ? '#5B6673' : '#E2E6EB')};
`;

const Trail = styled((props) => <div {...props} />)`
  width: 4px;
  min-height: 42px;
  margin-right: 18px;
  background-color: ${(props) => (props.active ? '#5B6673' : '#E2E6EB')};
`;
