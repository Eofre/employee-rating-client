/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useState, type FC, useEffect } from 'react';
import classes from './EmployeeFeedbackPage.module.scss';
import { Container } from '../../components/Container';
import { FeedbackForm } from '../../components/FeedbackForm';
import { EmployeeCard } from '../../components/EmployeeCard';
import { type IEmployee } from '../../types/types';
import api from '../../api';
import { useParams } from 'react-router-dom';

export const EmployeeFeedbackPage: FC = () => {
  const [employee, setEmployee] = useState<IEmployee>();
  const { id } = useParams();
  useEffect(() => {
    api
      .get(`/employee/${String(id)}`)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  const handleFeedbackSubmit = (score: number, comment: string): void => {
    const feedbackData = {
      score,
      comment,
      employeeId: Number(id)
    };

    api
      .post('/feedback', feedbackData)
      .then((res) => {
        console.log('Feedback created:', res.data);
      })
      .catch((error) => {
        console.error('Error creating feedback:', error);
      });
  };
  return (
    <section className={classes.employeeFeedbackPage}>
      <Container maxWidth={1200}>
        {employee ? (
          <div className={classes.wrapper}>
            <EmployeeCard employee={employee} />
            <div className={classes.form}>
              <FeedbackForm onSubmit={handleFeedbackSubmit} />
            </div>
          </div>
        ) : (
          <>Ошибка</>
        )}
      </Container>
    </section>
  );
};
