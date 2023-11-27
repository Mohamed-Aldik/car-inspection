import { Spinner, VStack } from '@chakra-ui/react';

const FullPageSpinner = () => {
  return (
    <VStack bg={'gray.50'} align={'center'} justify={'center'} h='100vh'>
      <Spinner size='xl' color='red.500' />
    </VStack>
  );
};

export default FullPageSpinner;
