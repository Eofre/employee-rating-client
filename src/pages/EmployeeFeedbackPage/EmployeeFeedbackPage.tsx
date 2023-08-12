import { type FC } from 'react';
import classes from './EmployeeFeedbackPage.module.scss';
import { Container } from '../../components/Container';
import { FeedbackForm } from '../../components/FeedbackForm';
import { EmployeeCard } from '../../components/EmployeeCard';
import employees from '../../data/employees';
// import { Link } from 'react-router-dom';
// import { PiKeyReturn } from 'react-icons/pi';

export const EmployeeFeedbackPage: FC = () => {
  return (
    <section className={classes.employeeFeedbackPage}>
      <Container maxWidth={1200}>
        <div className={classes.wrapper}>
          {/* <div className={classes.nav}>
            <PiKeyReturn size={25} />
            <Link to="/employee/1">На страницу сотрудника</Link>
          </div> */}
          <EmployeeCard employee={employees[0]} />
          <div className={classes.form}>
            <FeedbackForm />
          </div>
        </div>
      </Container>
    </section>
  );
};
