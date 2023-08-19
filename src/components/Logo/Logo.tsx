import { type FC } from 'react';
import classes from './Logo.module.scss';

export const Logo: FC = () => {
  return (
    <a className={classes.logo} href="#">
      ТТК<span> отзыв</span>
    </a>
  );
};
