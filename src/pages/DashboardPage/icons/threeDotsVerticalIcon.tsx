import { IconProps, Icon } from '@chakra-ui/react';

export const ThreeDotsVerticalIcon = (props: IconProps) => {
  return (
    <Icon width='20px' height='20px' viewBox='0 0 16 16' fill='black' {...props}>
      <path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z'></path>
    </Icon>
  );
};
