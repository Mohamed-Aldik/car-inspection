import { Select, SelectProps } from '@chakra-ui/react';

type TOption = {
  value: string;
  label: string;
};

interface ChakraSelectProps extends SelectProps {
  options: TOption[];
}

export const ChakraSelect = ({ options, ...rest }: ChakraSelectProps) => {
  return (
    <Select {...rest}>
      {options?.map((i, index) => (
        <option key={index} value={i.value}>
          {i.label}
        </option>
      ))}
    </Select>
  );
};
