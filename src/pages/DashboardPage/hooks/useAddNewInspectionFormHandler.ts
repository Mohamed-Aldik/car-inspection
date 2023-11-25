import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useToast } from '@chakra-ui/react';
import { useSetInspectionData } from './useSetInspectionData';
// Validation Schema

const today = new Date();
const maxDate = new Date();
maxDate.setMonth(today.getMonth() + 3);

const schema = yup.object().shape({
  image: yup.string().required('Image is required'),
  date: yup
    .date()
    .nullable()
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .required('Date is required')
    .min(today, `Date must be after ${today.toISOString().split('T')[0]}`)
    .max(maxDate, `Date must be before ${maxDate.toISOString().split('T')[0]}`),
  make: yup.string().required('Make is required'),
  model: yup.string().required('Model is required').max(10, 'Model must be at most 10 characters'),
  numberPlate: yup.string().required('Plate is required').max(10, 'Plate must be at most 10 characters'),
  color: yup.string().required('Color is required'),
  vinNumber: yup.string().required('Vin number is required').max(50, 'Vin number must be at most 50 characters'),
  year: yup.string().required('Year is required'),
});

export const useAddNewInspectionFormHandler = () => {
  const toast = useToast();
  const { setNewInspection } = useSetInspectionData();

  const {
    control,
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: any, onClose: () => void) => {
    setNewInspection({ ...data, status: 'pending' });

    toast({
      title: 'Success',
      description: 'Your appointment has been scheduled successfully.',
      status: 'success',
      duration: 4000,
      isClosable: true,
      position: 'top-right',
    });

    onClose();
  };

  return {
    control,
    errors,
    handleSubmit,
    register,
    reset,
    onSubmit,
    setValue,
  };
};
