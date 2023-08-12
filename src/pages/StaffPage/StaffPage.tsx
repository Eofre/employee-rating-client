import { type FC } from 'react';
import classes from './StaffPage.module.scss';
import { EmployeeList } from '../../components/EmployeeList';
import employees from '../../data/employees';
import { Container } from '../../components/Container';

export const StaffPage: FC = () => {
  return (
    <section className={classes.staffPage}>
      <Container maxWidth={1200}>
        <EmployeeList list={employees} />
      </Container>
    </section>
  );
};
