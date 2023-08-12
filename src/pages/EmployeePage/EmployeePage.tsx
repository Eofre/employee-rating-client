import { type FC } from 'react';
import classes from './EmployeePage.module.scss';

import { Container } from '../../components/Container';
import { EmployeeCard } from '../../components/EmployeeCard';
import employees from '../../data/employees';
import { FeedbackList } from '../../components/FeedbackList';
import reviews from '../../data/reviews';

export const EmployeePage: FC = () => {
  return (
    <section className={classes.employeePage}>
      <Container maxWidth={1200}>
        <div className={classes.wrapper}>
          <EmployeeCard employee={employees[0]} />
          <div className={classes.feedback}>
            <h3 className={classes.title}>Отзывы</h3>
            <FeedbackList reviews={reviews} />
          </div>
        </div>
      </Container>
    </section>
  );
};
