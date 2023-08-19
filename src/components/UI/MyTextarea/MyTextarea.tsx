import { type TextareaHTMLAttributes, type FC } from 'react';
import classes from './MyTextarea.module.scss';

interface MyTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const MyTextarea: FC<MyTextareaProps> = ({ ...rest }) => {
  return <textarea className={classes.myTextarea} {...rest}></textarea>;
};
