import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { cloneElement } from 'react';
import { useAddNewInspectionFormHandler } from '../hooks/useAddNewInspectionFormHandler';
import { Controller } from 'react-hook-form';
import { ImageUploader } from './ImageUploader';
import { yearObj } from '../utils/yearOption';
import { makeObj } from '../utils/makeOption';
import { ChakraSelect } from '../../../components/ChakraSelect';
import { colorObj } from '../utils/colorOption';

type TOption = {
  value: string;
  label: string;
};

const colorOptions: TOption[] = Object.values(colorObj).map(({ slug, name }) => ({ value: slug, label: name }));

const yearOptions: TOption[] = Object.values(yearObj).map(({ slug, name }) => ({ value: slug, label: name }));

const makeOptions: TOption[] = Object.values(makeObj).map(({ slug, name }) => ({ value: slug, label: name }));

interface AddModalProps {
  trigger: JSX.Element;
}

export const AddModalComponent = ({ trigger }: AddModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { errors, handleSubmit, register, onSubmit, control, setValue, reset } = useAddNewInspectionFormHandler();

  return (
    <>
      {cloneElement(trigger, { onClick: onOpen })}

      <Modal isOpen={isOpen} onClose={onClose} size={'2xl'} isCentered onCloseComplete={reset}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Inspection</ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <VStack
              as={'form'}
              id='inspectionId'
              p={'10px'}
              align={'stretch'}
              onSubmit={handleSubmit((data) => onSubmit(data, onClose))}
              spacing={'10px'}
              noValidate>
              <ImageUploader setValue={setValue} errMsg={errors.image?.message} />

              <Stack spacing={{ base: '10px', md: '30px' }} direction={{ base: 'column', md: 'row' }}>
                <FormControl isInvalid={!!errors.date} isRequired>
                  <FormLabel htmlFor='date'>Date</FormLabel>
                  <Input id='date' type='date' placeholder='Select a date' {...register('date')} />
                  <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
                </FormControl>

                <Controller
                  control={control}
                  name='make'
                  render={({ field: { value, onChange, onBlur, name } }) => (
                    <FormControl isInvalid={!!errors.make} isRequired>
                      <FormLabel htmlFor='make'>Make</FormLabel>

                      <ChakraSelect
                        id='make'
                        variant='outline'
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                        placeholder='Select option'
                        options={makeOptions}
                      />

                      <FormErrorMessage>{errors.make?.message}</FormErrorMessage>
                    </FormControl>
                  )}
                />
              </Stack>

              <Stack spacing={{ base: '10px', md: '30px' }} direction={{ base: 'column', md: 'row' }}>
                <Controller
                  control={control}
                  name='year'
                  render={({ field: { value, onChange, onBlur, name } }) => (
                    <FormControl isInvalid={!!errors.year} isRequired>
                      <FormLabel htmlFor='year'>Year</FormLabel>

                      <ChakraSelect
                        id='year'
                        variant='outline'
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                        placeholder='Select option'
                        options={yearOptions}
                      />

                      <FormErrorMessage>{errors.year?.message}</FormErrorMessage>
                    </FormControl>
                  )}
                />

                <Controller
                  control={control}
                  name='color'
                  render={({ field: { value, onChange, onBlur, name } }) => (
                    <FormControl isInvalid={!!errors.color} isRequired>
                      <FormLabel htmlFor='color'>Color</FormLabel>

                      <ChakraSelect
                        id='color'
                        variant='outline'
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                        placeholder='Select option'
                        options={colorOptions}
                      />

                      <FormErrorMessage>{errors.color?.message}</FormErrorMessage>
                    </FormControl>
                  )}
                />
              </Stack>

              <Stack spacing={{ base: '10px', md: '30px' }} direction={{ base: 'column', md: 'row' }}>
                <FormControl isInvalid={!!errors.numberPlate} isRequired>
                  <FormLabel htmlFor='numberPlate'>Number Plate</FormLabel>
                  <Input
                    placeholder='Number Plate'
                    _placeholder={{ color: 'black' }}
                    id='numberPlate'
                    type='text'
                    {...register('numberPlate')}
                  />
                  <FormErrorMessage>{errors.numberPlate?.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.model} isRequired>
                  <FormLabel htmlFor='model'>Model</FormLabel>

                  <Input
                    placeholder='Model'
                    _placeholder={{ color: 'black' }}
                    id='model'
                    type='text'
                    {...register('model')}
                  />
                  <FormErrorMessage>{errors.model?.message}</FormErrorMessage>
                </FormControl>
              </Stack>

              <FormControl isInvalid={!!errors.vinNumber} isRequired>
                <FormLabel htmlFor='vinNumber'>Vin number</FormLabel>
                <Input
                  placeholder='Vin number'
                  _placeholder={{ color: 'black' }}
                  id='vinNumber'
                  type='text'
                  {...register('vinNumber')}
                />
                <FormErrorMessage>{errors.vinNumber?.message}</FormErrorMessage>
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={'30px'} onClick={onClose}>
              Close
            </Button>

            <Button form='inspectionId' type='submit' colorScheme='red'>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
