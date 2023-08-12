import { type FC } from 'react';
import { Outlet } from 'react-router';
import { HeaderFeedback } from '../HeaderFeedback';

export const LayoutFeedback: FC = () => {
  return (
    <>
      <HeaderFeedback />
      <main>
        <Outlet />
      </main>
    </>
  );
};
