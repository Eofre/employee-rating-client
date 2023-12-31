import { type InputHTMLAttributes, type FC } from 'react';
import classes from './MyInput.module.scss';

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const MyInput: FC<MyInputProps> = ({ ...rest }) => {
  return <input className={classes.myInput} {...rest}></input>;
};
