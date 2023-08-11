import { type FC } from 'react';
import { Route, Routes } from 'react-router';
import { StaffPage } from '../../pages/StaffPage';
import { EmployeePage } from '../../pages/EmployeePage';
import { Layout } from '../Layout';

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<StaffPage />} />
        <Route index path="/:id" element={<EmployeePage />} />
      </Route>
    </Routes>
  );
};
