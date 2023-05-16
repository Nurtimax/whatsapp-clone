import { FC } from 'react';
import { Box, FormControl, FormLabel, styled, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';

import Input from '../../UI/input';
import { Button } from '../../UI';
import { useAppDispatch } from '../../../redux/hook';
import { authSliceThunk } from '../../../redux/slices/auth-slice';

interface IContentProps {
   [key: string]: unknown;
}

const StyledContent = styled('form')(({ theme }) => ({
   width: '35%',
   background: '#ffffff3d',
   padding: '2rem 1rem',
   display: 'grid',
   gap: '2rem',
   borderRadius: '5px',
   '& a': {
      textDecoration: 'none',
      color: theme.palette.mode === 'dark' ? '#f5f5f5' : '#000'
   }
}));

const Content: FC<IContentProps> = () => {
   const navigate = useNavigate();

   const dispatch = useAppDispatch();

   const { values, handleChange, handleSubmit } = useFormik({
      initialValues: {
         idInstance: '',
         apiTokenInstance: ''
      },
      onSubmit: async (value, actions) => {
         try {
            const response = await dispatch(authSliceThunk(value)).unwrap();
            if (response?.stateInstance) {
               if (response?.stateInstance === 'authorized') {
                  navigate('/');
                  actions.resetForm();
               }
            }
         } catch (err) {
            toast.error('Something is wrong in login');
         }
      }
   });

   return (
      <StyledContent onSubmit={handleSubmit}>
         <Typography sx={{ justifySelf: 'center' }} variant="h4">
            Login
         </Typography>
         <Box sx={{ display: 'grid', gap: '.5rem' }}>
            <FormControl fullWidth>
               <FormLabel>idInstance</FormLabel>
               <Input
                  fullWidth
                  placeholder="Enter your  idInstance"
                  value={values.idInstance}
                  onChange={handleChange}
                  name="idInstance"
               />
            </FormControl>
            <FormControl fullWidth>
               <FormLabel>apiTokenInstance</FormLabel>
               <Input
                  fullWidth
                  placeholder="Enter your  apiTokenInstance"
                  value={values.apiTokenInstance}
                  onChange={handleChange}
                  name="apiTokenInstance"
               />
            </FormControl>
         </Box>

         <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Button fullWidth variant="outlined" type="button">
               Cancel
            </Button>
            <Button fullWidth variant="contained" type="submit">
               sign in
            </Button>
         </Box>
         <Typography sx={{ justifySelf: 'center' }}>
            Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
         </Typography>
      </StyledContent>
   );
};

export default Content;
