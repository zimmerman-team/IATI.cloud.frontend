import React from 'react';
import sortBy from 'lodash/sortBy';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { ModuleStore } from 'app/modules/querybuilder-module/state/store';
import styled from 'styled-components/macro';
import { Palette } from 'app/theme';
import Typography from '@material-ui/core/Typography';
import { Checkbox } from 'app/components/inputs/checkboxes/Checkbox';
import { Tooltip } from '@material-ui/core';
import { createID } from '../../../../utils/removeSpaces';

type Props = {
  data: any;
  onCheckChange?: Function;
  addedFilterOptions?: string[];
};

const BaseComponent = styled((props) => <List {...props} />)`
  &&& {
    padding: 0;

    min-width: 320px;
    & [class*='MuiTypography-body2'] {
      color: black;
    }

    & [class*='MuiListItem-button'] {
      padding-top: 3px;
      padding-bottom: 3px;
    }

    & [class*='Mui-checked'] > [class*='MuiSvgIcon-root'] {
      fill: ${Palette.primary.main};
    }
  }
`;

const ListItemModded = styled((props) => <ListItem {...props} />)`
  &&& {
    //background-color: black;
    padding: 0;
    padding-left: 7px;
  }
`;

const ListItemIconModded = styled((props) => <ListItemIcon {...props} />)`
  &&& {
    min-width: 48px;
  }
`;

const ListCategory = styled((props) => <Typography {...props} />)`
  &&& {
    color: black;
    //padding: 16px 0 8px 30px;
    padding-left: 18px;
    padding-top: 26px;
    padding-bottom: 8px;
    font-size: 20px;
    background: ${Palette.grey[40]};
    border-top: 1px solid ${Palette.action.disabledBackground};
    border-bottom: 1px solid ${Palette.action.disabledBackground};
  }
`;

//todo: look into virtualized lists https://material-ui.com/components/lists/
export const ListControls = (props: Props) => {
  const store = ModuleStore.useStore();
  const [checked, setChecked] = React.useState(props.addedFilterOptions || []);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value as never);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value as never);
    } else {
      newChecked.splice(currentIndex, 1);
      const filterKey =
        value === 'Default language'
          ? 'language'
          : value
              .split(' ')
              .map(
                (key: string, index: number) =>
                  `${
                    index === 0 ? key[0].toLowerCase() : key[0].toUpperCase()
                  }${key.substr(1)}`
              )
              .join('');
      store.set(filterKey)([]);
    }

    if (props.onCheckChange) {
      props.onCheckChange(newChecked);
    }

    setChecked(newChecked);
  };

  return (
    <BaseComponent>
      {props.data.map((category) => {
        return (
          <React.Fragment key={category}>
            <ListCategory variant="h6">{category[0]}</ListCategory>
            {sortBy(category[1], 'label').map((item) => {
              return (
                <React.Fragment key={item.label}>
                  {item.disabled ? (
                    <Tooltip title="Filter not available yet">
                      <ListItemModded
                        dense
                        button
                        style={{
                          opacity: item.disabled ? 0.4 : 1,
                        }}
                        onClick={() =>
                          !item.disabled && handleToggle(item.label)
                        }
                      >
                        <ListItemIcon>
                          <Checkbox
                            id={createID(item.label)}
                            checked={
                              checked.indexOf(item.label as never) !== -1
                            }
                          />
                        </ListItemIcon>
                        <ListItemText primary={item.label} />
                      </ListItemModded>
                    </Tooltip>
                  ) : (
                    <ListItemModded
                      dense
                      button
                      onClick={handleToggle(item.label)}
                    >
                      <ListItemIconModded>
                        <Checkbox
                          id={createID(item.label)}
                          checked={checked.indexOf(item.label as never) !== -1}
                        />
                      </ListItemIconModded>
                      <ListItemText primary={item.label} />
                    </ListItemModded>
                  )}
                </React.Fragment>
              );
            })}
          </React.Fragment>
        );
      })}
    </BaseComponent>
  );
};
