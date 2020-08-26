// @ts-nocheck
//cc:api documentation module#; navigation - side bar
import React from 'react';
import { TreeItem } from '@material-ui/lab';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { SubLink3 } from 'app/modules/documentation-module/common/DocSideBar/common/ui/SubLink3';

type Props = {
  item: any;
  postmanId: string;
  activeHash: string;
};

const Link = styled((props) => <HashLink {...props} />)`
  && {
    text-decoration: none;
    color: rgba(1, 1, 10, 0.6);
  }
`;

const Item = styled((props) => <TreeItem {...props} />)`
  && {
    // todo: we should step away from modifying elements via class names
    [class*='MuiTypography-body1'] {
      font-family: Inter, sans-serif;
      font-size: 16px;
      font-weight: 500 !important;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: 0.15px;
      color: rgba(1, 1, 10, 0.6);
    }
    // todo: we should step away from modifying elements via class names
    [class*='MuiTreeItem-content'] {
      margin-bottom: 42px;
    }
    // todo: we should step away from modifying elements via class names
    [class*='MuiTreeItem-root'] {
      margin-bottom: 42px;
    }
    // todo: we should step away from modifying elements via class names
    [class*='MuiCollapse-wrapperInner'] {
      margin-bottom: 42px;
    }
    // todo: we should step away from modifying elements via class names
    [class*='MuiSvgIcon-root'] {
      fill: rgba(1, 1, 10, 0.6);
    }
    // todo: we should step away from modifying elements via class names
    [class*='MuiTreeItem-label']:hover {
      color: #25a898;
      background-color: #f0f3f7 !important;
    }
    // todo: we should step away from modifying elements via class names
    [class*='MuiTreeItem-label'] {
      background-color: unset !important;
    }
  }
`;

export function TreeItemLink(props: Props) {
  // console.log('TreeItemLink', props.postmanId, props.item.name);

  return (
    <React.Fragment>
      {(props.item.item && props.item.item.length > 0) ||
      props.item._postman_isSubFolder ? (
        <Item nodeId={props.item.name} label={props.item.name}>
          <Link to={`${props.postmanId}#${props.item.name}`} />
          {props.children}
        </Item>
      ) : (
        <SubLink3
          requestMethod={props.item.request ? props.item.request.method : ''}
          text={props.item.name}
          to={`/documentation/${props.postmanId}#${props.item.name}`}
          active={
            props.item.name ===
            decodeURIComponent(props.activeHash.replace('#', ''))
          }
        />
      )}
    </React.Fragment>
  );
}
