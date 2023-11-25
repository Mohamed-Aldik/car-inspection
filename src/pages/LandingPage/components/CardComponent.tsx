import { Box, Button, Flex, Heading, Stack, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

export const CardComponent = ({ heading, description, icon }: CardProps) => {
  return (
    <Box borderWidth='2px' borderRadius='base' overflow='hidden' p={'30px 20px'}>
      <VStack align={'start'} spacing={'20px'}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>

        <VStack align={'start'}>
          <Heading size='md'>{heading}</Heading>
          <Text fontSize={'sm'}>{description}</Text>
        </VStack>

        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </VStack>
    </Box>
  );
};
