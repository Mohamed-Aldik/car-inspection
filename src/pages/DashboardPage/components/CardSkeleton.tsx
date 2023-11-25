import { Card, CardBody, Heading, Text, VStack, Image, HStack, Stack } from '@chakra-ui/react';

export const CardSkeleton = () => {
  return (
    <Card direction={{ base: 'column', md: 'row' }} overflow='hidden' variant='outline'>
      <Image objectFit='cover' w={'100%'} h={'100%'} src={''} alt='car inspection' />

      <CardBody>
        <Stack direction={{ base: 'column-reverse', md: 'row' }} align={'start'} justify={'space-between'}>
          <VStack align={'start'}>
            <Heading fontWeight={'semibold'} size='md'>
              <Text textTransform={'uppercase'} display={'inline'}>
                ss
              </Text>
              sss
            </Heading>

            <HStack>
              <Text fontWeight={'semibold'}>Color:</Text>
              <Text>ssss</Text>
            </HStack>

            <HStack>
              <Text fontWeight={'semibold'}>Year:</Text>
              <Text>ssss</Text>
            </HStack>

            <HStack>
              <Text fontWeight={'semibold'}>Date:</Text>
              <Text>sssss</Text>
            </HStack>

            <HStack>
              <Text fontWeight={'semibold'}>VIN number:</Text>
              <Text>sssss</Text>
            </HStack>
          </VStack>
        </Stack>
      </CardBody>
    </Card>
  );
};
