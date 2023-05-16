import { ChangeEvent, FC } from 'react';
import { Box, FormControl, FormLabel, styled, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import Input from '../../UI/input';
import { Button } from '../../UI';
import { REGISTER_FIELDS } from '../../../utils/constants/register';
import { auth, db, storage } from '../../../firebase';

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

   const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
      initialValues: {
         userName: '',
         userLastName: '',
         email: '',
         password: '',
         confirmPassword: '',
         file: ''
      },
      onSubmit: async (value, action) => {
         const email = value.email;
         const password = value.password;
         const displayName = value.userName;
         const lastName = value.userLastName;
         const file = new Blob([value.file], { type: 'text/plain' });

         try {
            // create user
            const response = await createUserWithEmailAndPassword(auth, email, password);

            //Create a unique image name
            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);

            await uploadBytesResumable(storageRef, file).then(() => {
               getDownloadURL(storageRef).then(async (downloadURL) => {
                  try {
                     //Update profile
                     await updateProfile(response.user, {
                        displayName,
                        photoURL: downloadURL
                     });
                     //create user on firestore
                     await setDoc(doc(db, 'users', response.user.uid), {
                        uid: response.user.uid,
                        displayName,
                        email,
                        photoURL: downloadURL,
                        lastName
                     });

                     //create empty user chats on firestore
                     await setDoc(doc(db, 'userChats', response.user.uid), {});
                     navigate('/');
                     toast.success('Successfully');
                     action.resetForm();
                  } catch (err) {
                     toast.error('upload image something is wrong');
                  }
               });
            });
         } catch (error) {
            toast.error('Something is wrong');
         }
      }
   });

   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         setFieldValue('file', file);
      }
   };

   const fileType = {
      accept: '.png, .jpg, .jpeg',
      onChange: handleFileChange
   };

   return (
      <StyledContent onSubmit={handleSubmit}>
         <Typography variant="h4" sx={{ justifySelf: 'center' }}>
            Register
         </Typography>
         <Box sx={{ display: 'grid', gap: '.5rem' }}>
            {REGISTER_FIELDS.map((field) => (
               <FormControl fullWidth key={field.id}>
                  <FormLabel htmlFor={field.key}>{field.label}</FormLabel>
                  <Input
                     id={field.key}
                     name={field.key}
                     fullWidth
                     placeholder={field.placeholder}
                     value={values[field.key]}
                     onChange={handleChange}
                     type={field.type}
                     inputProps={field.type === 'file' ? fileType : {}}
                  />
               </FormControl>
            ))}
         </Box>

         <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Button fullWidth variant="outlined" type="button">
               Cancel
            </Button>
            <Button fullWidth variant="contained" type="submit">
               Sign up
            </Button>
         </Box>
         <Typography sx={{ justifySelf: 'center' }}>
            Do you already have an account? <Link to="/login">Log in</Link>
         </Typography>
      </StyledContent>
   );
};

export default Content;
