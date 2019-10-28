import React from 'react';
import Box from '@material-ui/core/Box';
import MuiDrawer from '@material-ui/core/Drawer';
import MuiList from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import MuiCloseIcon from '@material-ui/icons/Close';
import MuiLink from '@material-ui/core/Link';
import MuiListItemText from '@material-ui/core/ListItemText';
import { DrawerMenuModel } from 'app/components/navigation/Drawer/model';
import styled from 'styled-components';
import Colors from 'app/theme/fragments/Colors';
import HomeIcon from '@material-ui/core/SvgIcon/SvgIcon';

const Drawer = styled(props => <MuiDrawer {...props} />)`
  && {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const MenuButton = styled(props => <MenuIcon {...props} />)`
  &&& {
    fill: #155366;
    font-size: 40px;
    //margin-right: 55px;
    //margin-bottom: 55px;
    :hover {
      cursor: pointer;
    }
  }
`;

const Link = styled(props => <MuiLink {...props} />)`&& {
  color: ${props =>
    props.highlight ? Colors.branddark : Colors.greydark60OrFontbase}
    :hover{
    text-decoration: none !important;
    cursor: ${props => (props.highlight ? 'default' : 'pointer')}
}`;

const List = styled(props => <MuiList {...props} />)`
  && {
    padding-left: 32px;
    padding-right: 100px;
  }
`;

const ListItemText = styled(props => <MuiListItemText {...props} />)`
  && {
    margin-bottom: 24px;
  }
`;

const CloseIcon = styled(props => <MuiCloseIcon {...props} />)`
  && {
    align-self: flex-end;
    margin-top: 30px;
    margin-right: 30px;
    margin-bottom: 34px;
  }
`;

const LINK = '/';

export function DrawerMenu(props: DrawerMenuModel) {
  const [state, setState] = React.useState({
    right: false,
    link: LINK,
  });

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, right: open });
  };

  const isCurrentLink = (url: string): boolean => {
    return url === state.link;
  };

  const sideList = () => (
    <Box display="flex" flexDirection="column">
      <CloseIcon onClick={toggleDrawer(false)} />
      <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        {props.links.map(link => (
          <Link
            href={link.url}
            key={link.label}
            highlight={isCurrentLink(link.url)}
          >
            <ListItemText
              primaryTypographyProps={{
                variant: 'button',
              }}
              primary={link.label}
            />
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <HomeIcon color="primary" />
      <Box
      /* display="flex"
        justifyContent="flex-end"
        alignItems="center"
        height="72px"
        paddingBottom="56px"*/
      >
        <MenuButton onClick={toggleDrawer(true)} />
        <Drawer anchor="right" open={state.right} onClose={toggleDrawer(false)}>
          {sideList()}
        </Drawer>
      </Box>
    </React.Fragment>
  );
}
