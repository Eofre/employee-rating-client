import { type FC } from 'react';
import { Route, Routes } from 'react-router';
import { StaffPage } from '../../pages/StaffPage';
import { EmployeePage } from '../../pages/EmployeePage';
import { Layout } from '../Layout';
import { LayoutEmployee } from '../LayoutEmployee';
import { EmployeeFeedbackPage } from '../../pages/EmployeeFeedbackPage';
import { LayoutFeedback } from '../LayoutFeedback';

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<StaffPage />} />
      </Route>
      <Route path="/employee" element={<LayoutEmployee />}>
        <Route index path="/employee/:id" element={<EmployeePage />} />
      </Route>
      <Route path="/employee/:id/feedback" element={<LayoutFeedback />}>
        <Route index path="/employee/:id/feedback" element={<EmployeeFeedbackPage />} />
      </Route>
    </Routes>
  );
};
