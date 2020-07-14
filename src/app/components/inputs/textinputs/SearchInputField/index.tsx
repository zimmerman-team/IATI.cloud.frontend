/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import filter from 'lodash/filter';
import Clear from '@material-ui/icons/Clear';
import ChipInput from 'material-ui-chip-input';
import { styles } from 'app/components/inputs/textinputs/SearchInputField/styles';

type Props = {
  valueStr: string;
  onChange: Function;
  placeholder: string;
};

export const SearchInputField = (props: Props) => {
  const [chips, setChips] = React.useState<string[]>([]);

  const handleAddChip = (chip: string) => {
    const newChips = [...chips];
    newChips.push(chip);
    setChips(newChips);
    props.onChange(newChips.join(' '));
  };

  const handleDeleteChip = (chip: string) => {
    const newChips = filter(chips, (c: string) => c !== chip);
    setChips(newChips);
    props.onChange(newChips.join(' '));
  };

  React.useEffect(() => {
    if (props.valueStr.length > 0) {
      const newChips = props.valueStr.split(' ');
      setChips(newChips);
    }
  }, [props.valueStr]);

  const renderChipRenderer = (chipProps: any, key: string) => {
    return (
      <div key={key} css={styles.chipContainer}>
        {chipProps.value}
        <div
          css={styles.chipCloseBtn}
          onClick={() => handleDeleteChip(chipProps.value)}
        >
          <Clear htmlColor="white" fontSize="small" />
        </div>
      </div>
    );
  };

  return (
    <ChipInput
      fullWidth
      value={chips}
      disableUnderline
      onAdd={handleAddChip}
      onDelete={handleDeleteChip}
      placeholder={props.placeholder}
      chipRenderer={renderChipRenderer}
      css={`
        > div {
          min-height: auto;
        }
      `}
    />
  );
};
