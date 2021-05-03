import { FC, ChangeEvent } from 'react';
import { Box, Heading, RadioButtonGroup, Text } from 'grommet';

const SelectSize: FC<{
  index: number;
  size: string;
  sizeList: string[];
  handleChange(e: ChangeEvent): void;
}> = ({ index, sizeList, size, handleChange }) => (
  <Box>
    <Heading size='16px'>Choose size</Heading>
    <RadioButtonGroup
      direction='row'
      gap='large'
      name={`items.${index}.size`}
      options={sizeList}
      value={size}
      onChange={handleChange}
    >
      {(
        option: string,
        { checked, hover }: { checked: boolean; hover: boolean },
      ) => {
        let background;
        if (checked) {
          background = '#4A90E2';
        } else if (hover) {
          background = 'light-4';
        } else {
          background = 'white';
        }

        return (
          <Box
            background={background}
            pad={{
              top: 'small',
              right: 'medium',
              bottom: 'small',
              left: 'medium',
            }}
            border={{ color: '#4A90E2' }}
          >
            <Text color={checked ? 'white' : 'dark-1'} weight='bold'>
              {option.toUpperCase()}
            </Text>
          </Box>
        );
      }}
    </RadioButtonGroup>
  </Box>
);

export { SelectSize };
