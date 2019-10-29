import React from 'react';
import MuiDrawer from '@material-ui/core/Drawer';
import MuiList from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import MuiCloseIcon from '@material-ui/icons/Close';
import MuiLink from '@material-ui/core/Link';
import MuiListItemText from '@material-ui/core/ListItemText';
// import Colors from 'app/theme/color';
import styled from 'styled-components';
//TODO: code splitting
export const Drawer = styled(props => <MuiDrawer {...props} />)`
  && {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
export const MenuButton = styled(props => <MenuIcon {...props} />)`
  && {
    font-size: 40px;
    margin-right: 55px;
    //margin-bottom: 55px;
    :hover {
      cursor: pointer;
    }
  }
`;
export const Link = styled(props => <MuiLink {...props} />)`&& {
  color: ${props => (props.highlight ? '#155366' : '#121212')}
    :hover{
    text-decoration: none !important;
    cursor: ${props => (props.highlight ? 'default' : 'pointer')}
}`;
export const List = styled(props => <MuiList {...props} />)`
  && {
    padding-left: 32px;
    padding-right: 100px;
  }
`;
export const ListItemText = styled(props => <MuiListItemText {...props} />)`
  && {
    margin-bottom: 24px;
  }
`;
export const CloseIcon = styled(props => <MuiCloseIcon {...props} />)`
  && {
    align-self: flex-end;
    margin-top: 30px;
    margin-right: 30px;
    margin-bottom: 34px;
  }
`;
