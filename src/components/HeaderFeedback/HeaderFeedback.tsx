import { type FC } from 'react';
import classes from './HeaderFeedback.module.scss';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { PiKeyReturn } from 'react-icons/pi';

import { Link } from 'react-router-dom';
import { TbHelpSquareRounded } from 'react-icons/tb';

export const HeaderFeedback: FC = () => {
  return (
    <header className={classes.header}>
      <Container maxWidth={1200}>
        <div className={classes.wrapper}>
          <Logo />
          <Link className={classes.nav} to="/employee/1">
            <PiKeyReturn size={25} />
            На страницу сотрудника
          </Link>
          <Link className={classes.nav} to="#">
            <TbHelpSquareRounded size={25} /> Помощь
          </Link>
        </div>
      </Container>
    </header>
  );
};
