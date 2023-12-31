import { type FC } from 'react';
import { Header } from '../Header';
import { Outlet } from 'react-router';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
