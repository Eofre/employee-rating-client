import { type FC } from 'react';
import classes from './Header.module.scss';
import { Logo } from '../Logo';
import { Container } from '../Container';
import { SearchBar } from '../SearchBar';
import { TbHelpSquareRounded } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <header className={classes.header}>
      <Container maxWidth={1200}>
        <div className={classes.wrapper}>
          <Logo />
          <SearchBar label="Сотрудник..." value="fdf" />
          <Link className={classes.nav} to="#">
            <TbHelpSquareRounded size={25} /> Помощь
          </Link>
        </div>
      </Container>
    </header>
  );
};
