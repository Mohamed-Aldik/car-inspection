import {
  Card,
  CardBody,
  Heading,
  Text,
  VStack,
  Badge,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  HStack,
  Tag,
  Box,
  Stack,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { ThreeDotsVerticalIcon } from '../icons/threeDotsVerticalIcon';
import { LazyLoadedImage } from '../../../components/LazyLoadedImage';
interface CardComponentProps {
  image: string;
  date: string;
  make: string;
  model: string;
  plate: string;
  color: string;
  vinNumber: string;
  year: string;
  status?: 'passed' | 'failed' | 'pending';
}

export const CardComponent = (props: CardComponentProps) => {
  const { image, date, make, model, plate, color, vinNumber, year, status } = props;

  // Format the date
  const formattedDate = new Date(date).toISOString().split('T')[0];

  return (
    <Card direction={{ base: 'column', md: 'row' }} overflow='hidden' variant='outline'>
      <CardBody p={0}>
        <Stack direction={{ base: 'column', md: 'row' }} overflow='hidden'>
          <Box position={'relative'} w={{ base: '100%', md: '30%' }} h={{ base: '100%', md: '250px' }}>
            <LazyLoadedImage objectFit='cover' w={'100%'} h={'100%'} src={image} alt='car inspection' />

            <Tag
              position={'absolute'}
              bottom={'10px'}
              left={'50%'}
              transform={'translateX(-50%)'}
              justifyContent={'center'}
              alignItems={'center'}
              w={'150px'}
              h={'40px'}
              border={'2px'}
              zIndex={'999'}>
              {plate}
            </Tag>
          </Box>

          <Box position={'relative'} flex={1}>
            <VStack align={'stretch'} h={'full'} spacing={'15px'} m='20px 10px'>
              <Heading fontWeight={'semibold'} size='md'>
                <Text textTransform={'uppercase'}>{make}</Text>
                <Text fontSize={'lg'}>({model})</Text>
              </Heading>

              <HStack>
                <Text fontWeight={'semibold'}>Color:</Text>
                <Text>{color}</Text>
              </HStack>

              <HStack>
                <Text fontWeight={'semibold'}>Year:</Text>
                <Text>{year}</Text>
              </HStack>

              <HStack>
                <Text fontWeight={'semibold'}>Date:</Text>
                <Text>{formattedDate}</Text>
              </HStack>

              <HStack>
                <Text fontWeight={'semibold'}>VIN number:</Text>
                <Text>{vinNumber}</Text>
              </HStack>
            </VStack>

            <HStack position={'absolute'} top={'10px'} right={'10px'} spacing={'10px'}>
              {status === 'passed' && (
                <Badge variant='solid' p={'5px 20px'} colorScheme='green'>
                  PASSED
                </Badge>
              )}

              {status === 'failed' && (
                <Badge variant='solid' p={'5px 20px'} colorScheme='red'>
                  FAILED
                </Badge>
              )}

              <Menu>
                <MenuButton as={IconButton} aria-label='Options' icon={<ThreeDotsVerticalIcon />} variant='ghost' />
                <MenuList zIndex={'999'}>
                  <MenuItem icon={<EditIcon />} command='soon'>
                    Edit
                  </MenuItem>
                  <MenuItem icon={<DeleteIcon />} command='soon'>
                    Delete
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
