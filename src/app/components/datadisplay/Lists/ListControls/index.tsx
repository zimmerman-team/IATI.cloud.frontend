import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';
import { Palette } from 'app/theme';
import Typography from '@material-ui/core/Typography';

type Props = {
  data: object;
};

const BaseComponent = styled(props => <List {...props} />)`
  & [class*='MuiTypography-body2'] {
    color: black;
  }
  ,
  & [class*='MuiListItem-button'] {
    padding-top: 3px;
    padding-bottom: 3px;
  }
  ,
  & [class*='Mui-checked'] > [class*='MuiSvgIcon-root']{
    fill: ${Palette.primary.main};
  },
`;

const ListCategory = styled(props => <Typography {...props} />)`
  color: rgba(1, 1, 10, 0.6);
  padding: 16px;
  border-bottom: 1px solid ${Palette.action.disabledBackground};
  border-top: 1px solid ${Palette.action.disabledBackground};
`;

//todo: look into virtualized lists https://material-ui.com/components/lists/
const ListControls: React.FC<Props> = props => {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <BaseComponent>
      {/*todo: Make own component*/}

      {props.data.map(category => {
        const labelId = `checkbox-list-label-${category[0]}`;

        return (
          <React.Fragment key={category}>
            <ListCategory variant="subtitle2">{category[0]}</ListCategory>
            {category[1].map(item => {
              return (
                <React.Fragment key={item}>
                  <ListItem
                    role={undefined}
                    dense
                    button
                    onClick={handleToggle(item)}
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(item) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={item} />
                  </ListItem>
                </React.Fragment>
              );
            })}
          </React.Fragment>
        );
      })}
    </BaseComponent>
  );
};

export default ListControls;
