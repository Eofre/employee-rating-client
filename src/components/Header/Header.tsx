import { type FC } from 'react';
import classes from './Header.module.scss';
import { Logo } from '../Logo';
import { Container } from '../Container';
import { SearchBar } from '../SearchBar';

export const Header: FC = () => {
  return (
    <header className={classes.header}>
      <Container maxWidth={1200}>
        <div className={classes.wrapper}>
          <Logo />
          <SearchBar label="Сотрудник..." value="fdf" />
          <a href="#">Помощь</a>
        </div>
      </Container>
    </header>
  );
};
