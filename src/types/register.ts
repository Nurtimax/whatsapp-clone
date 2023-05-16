import { HTMLInputTypeAttribute } from 'react';

export interface IRegisterType {
   id: number;
   placeholder: string;
   label: string;
   key: 'userName' | 'userLastName' | 'email' | 'password' | 'confirmPassword' | 'file';
   type: HTMLInputTypeAttribute;
}
