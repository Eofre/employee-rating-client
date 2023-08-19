import { useEffect, type FC } from 'react';
import classes from './StaffPage.module.scss';
import { EmployeeList } from '../../components/EmployeeList';
import { Container } from '../../components/Container';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchEmployees } from '../../features/employee/employeeSlice';

export const StaffPage: FC = () => {
  const { list } = useAppSelector((state) => state.employee);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(fetchEmployees());
  }, []);

  console.log(list);

  return (
    <section className={classes.staffPage}>
      <Container maxWidth={1200}>
        <EmployeeList list={list} />
      </Container>
    </section>
  );
};
