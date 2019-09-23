import React from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Skeletor } from 'app/components/utils/Skeletor';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import {
  SideBarItemModel,
  SideBarModel,
} from 'app/modules/Documentation/common/DocSideBar/mock';

const SideBarItem = (props: SideBarItemModel) => {
  return (
    <Box width="100%" marginBottom="20px">
      <NavLink exact to="/documentation">
        <SiderbarTreeItem nodeId={props.label} label={props.label}>
          <TreeItem nodeId="6" label="Material-UI">
            <TreeItem nodeId="7" label="src">
              <TreeItem nodeId="8" label="index.js" />
              <TreeItem nodeId="9" label="tree-view.js" />
            </TreeItem>
          </TreeItem>
        </SiderbarTreeItem>
      </NavLink>
    </Box>
  );
};

const SiderbarTreeItem = styled(TreeItem)`
  &&& {
    font-family: Inter;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: 0.15px;
    color: rgba(1, 1, 10, 0.6);
  }
`;

export const DocsideBar = (props: SideBarModel) => {
  return (
    <Box
      width="100%"
      maxWidth="285px"
      style={{ backgroundColor: '#f0f3f7', outline: '1px solid black' }}
      padding="40px"
    >
      {/* api search field */}
      {/*<Grid item md={12}>
        <Skeletor />
      </Grid>*/}

      {/* api sub  items*/}

      {props.sideBarItems.map(item => (
        <SideBarItem label={item.label} />
      ))}

      <Box width="100%" height="20px" />

      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {props.categories.map(item => (
          <SideBarItem label={item.label} />
        ))}
      </TreeView>
      <Box width="100%" height="200px" />
    </Box>
  );
};
