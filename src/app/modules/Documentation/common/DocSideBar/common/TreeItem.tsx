// @ts-nocheck
//cc:api documentation module#; navigation - side bar
import React from 'react';
import { TreeItem } from '@material-ui/lab';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { SubLink3 } from './ui/SubLink3';

type Props = {
  id: string
  postmanId: string,
  label: string,
  isSubFolder: boolean,
  requestMethod: string;
};

const To = styled(props => (<HashLink {...props} />))`
  && {
      text-decoration: none;
      color: rgba(1,1,10,0.6);
  }
`;

const Item = styled(props => (<TreeItem {...props} />))`
  && {
    [class*='MuiTypography-body1']{
      font-family: Inter, sans-serif;
      font-size: 16px;
      font-weight: 500 !important;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: 0.15px;
      color: rgba(1,1,10,0.6);
    }
    [class*='MuiTreeItem-content']{
      margin-bottom: 42px;
    }
    [class*='MuiCollapse-wrapperInner']{
      margin-bottom: 42px;
    }
  }
`;

export function TreeItemLink(props: Props) {
  return (
    <>
      {props.isSubFolder ?
        <To to={`/documentation/${props.postmanId}#${props.label}`}>
          <Item nodeId={props.id} label={props.label}>
            {props.children}
          </Item>
        </To>
        :
        <SubLink3 requestMethod={props.requestMethod} text={props.label} to={`/documentation/${props.postmanId}#${props.label}`}/>
      }
    </>
  );
}
