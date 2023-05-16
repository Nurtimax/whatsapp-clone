import { IRegisterType } from '../../types/register';

export const REGISTER_FIELDS: IRegisterType[] = [
   { id: 1, label: 'Name', placeholder: 'Enter your user name', key: 'userName', type: 'text' },
   { id: 2, label: 'LastName', placeholder: 'Enter your user last name', key: 'userLastName', type: 'text' },
   { id: 3, label: 'Email', placeholder: 'Enter your user email', key: 'email', type: 'email' },
   { id: 4, label: 'Password', placeholder: 'Enter your user password', key: 'password', type: 'password' },
   {
      id: 5,
      label: 'Confirm Password',
      placeholder: 'Enter your user confirm password',
      key: 'confirmPassword',
      type: 'password'
   },
   {
      id: 6,
      label: 'Profile Picture',
      placeholder: 'Enter your user profile picture',
      key: 'file',
      type: 'file'
   }
];
