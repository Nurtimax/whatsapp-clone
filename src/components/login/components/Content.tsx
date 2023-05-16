import { FC } from 'react';
import { Box, FormControl, FormLabel, styled, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import Input from '../../UI/input';
import { Button } from '../../UI';
import { auth } from '../../../firebase';
import { ActionAuthSlice } from '../../../redux/slices/auth-slice';

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

   const dispatch = useDispatch();

   const { values, handleChange, handleSubmit } = useFormik({
      initialValues: {
         email: '',
         password: ''
      },
      onSubmit: async (value, actions) => {
         const email = value.email;
         const password = value.password;

         try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            dispatch(ActionAuthSlice.getUser(response.user));
            navigate('/');
            actions.resetForm();
            toast.success('Successfully');
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
               <FormLabel>Email</FormLabel>
               <Input
                  fullWidth
                  placeholder="Enter your user email"
                  value={values.email}
                  onChange={handleChange}
                  name="email"
                  type="email"
               />
            </FormControl>
            <FormControl fullWidth>
               <FormLabel>Password</FormLabel>
               <Input
                  fullWidth
                  placeholder="Enter your user password"
                  value={values.password}
                  onChange={handleChange}
                  name="password"
                  type="password"
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
