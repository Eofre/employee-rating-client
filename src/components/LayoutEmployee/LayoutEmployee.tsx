import { type FC } from 'react';
import { Outlet } from 'react-router';
import { HeaderEmployee } from '../HeaderEmployee';

export const LayoutEmployee: FC = () => {
  return (
    <>
      <HeaderEmployee />
      <main>
        <Outlet />
      </main>
    </>
  );
};
