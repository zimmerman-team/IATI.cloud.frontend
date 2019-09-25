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
} from 'app/modules/Documentation/common/DocSideBar/model';

import { DocData } from 'app/modules/Documentation/data';

const CustomLink = styled(props => <NavLink {...props} />)`
  width: 100%;
  margin-bottom: 20px;
  height: 24px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: rgba(1, 1, 10, 0.6);

  &:hover {
    color: #25a898;
  }
`;

export const DocsideBar = (props: SideBarModel) => {
  return (
    // @ts-ignore
    <div
      css={`
        padding: 20px;
        padding-bottom: 0;
        background-color: #f0f3f7;
        position: sticky;
        top: 187px;
        height: calc(100vh - 187px);
        overflow-y: scroll;
      `}
    >
      {/* api search field */}
      {/*<Grid item md={12}>
        <Skeletor />
      </Grid>*/}

      {/* api sub  items*/}

      <CustomLink key="Introduction" to="/documentation/introduction">
        Introduction
      </CustomLink>

      <Box width="100%" height="20px" />
      <div
        css={`
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        `}
      >
        {DocData.collection.item.map(item => (
          <CustomLink key={item.name} to={item.name}>
            {item.name}
          </CustomLink>
        ))}
      </div>
    </div>
  );
};
