import { type FC } from 'react';
import { Header } from '../Header';
import { Outlet } from 'react-router';
import { Container } from '../Container';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth={1200}>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
