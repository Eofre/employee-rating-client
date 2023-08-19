/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type FC } from 'react';
import classes from './HeaderEmployee.module.scss';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { VscFeedback } from 'react-icons/vsc';
import { TbHelpSquareRounded } from 'react-icons/tb';
import { Link, useParams } from 'react-router-dom';

export const HeaderEmployee: FC = () => {
  const { id } = useParams();
  return (
    <header className={classes.header}>
      <Container maxWidth={1200}>
        <div className={classes.wrapper}>
          <Logo />
          <div className={classes.nav}>
            <VscFeedback size={25} />
            <Link to={`/employee/${id}/feedback`}>Оставить отзыв</Link>
          </div>
          <Link className={classes.nav} to="#">
            <TbHelpSquareRounded size={25} /> Помощь
          </Link>
        </div>
      </Container>
    </header>
  );
};
