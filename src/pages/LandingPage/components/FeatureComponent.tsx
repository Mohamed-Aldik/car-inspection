import { HStack, Flex, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

export const FeatureComponent = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <HStack>
      <Flex w={'35px'} h={'35px'} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </HStack>
  );
};
