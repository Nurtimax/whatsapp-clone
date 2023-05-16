import { FC } from 'react';
import { styled } from '@mui/material';
import { useFormik } from 'formik';
import { IoSendSharp } from 'react-icons/io5';
import { useParams } from 'react-router-dom';

import Input from '../../UI/input';
import { Button } from '../../UI';
import { sendMessageThunk } from '../../../redux/slices/send-message-slice';
import { useAppDispatch } from '../../../redux/hook';

interface IFormContentProps {
   [key: string]: unknown;
}

const StyledFormContent = styled('form')(({ theme }) => ({
   background: theme.palette.secondary.dark + 80,
   height: '8vh',
   padding: '0 1rem',
   display: 'grid',
   alignItems: 'center',
   gridTemplateColumns: '12fr .6fr'
}));

const FormContent: FC<IFormContentProps> = () => {
   const dispatch = useAppDispatch();

   const { chatId } = useParams();

   const { values, handleChange, handleSubmit } = useFormik({
      initialValues: {
         message: '',
         chatId: ''
      },
      onSubmit: (values, actions) => {
         if (chatId) {
            dispatch(sendMessageThunk({ ...values, chatId }));
            actions.resetForm();
         }
      }
   });

   return (
      <StyledFormContent onSubmit={handleSubmit}>
         <Input placeholder="Enter message" fullWidth value={values.message} onChange={handleChange} name="message" />
         <Button sx={{ fontSize: '2rem' }} type="submit">
            <IoSendSharp />
         </Button>
      </StyledFormContent>
   );
};

export default FormContent;
