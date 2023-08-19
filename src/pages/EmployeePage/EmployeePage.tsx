/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useState, type FC, useEffect } from 'react';
import classes from './EmployeePage.module.scss';
import { Container } from '../../components/Container';
import { EmployeeCard } from '../../components/EmployeeCard';
import { FeedbackList } from '../../components/FeedbackList';
import { type IFeedback, type IEmployee } from '../../types/types';
import { useParams } from 'react-router';
import api from '../../api';
import { Pagination } from '@mui/material';

export const EmployeePage: FC = () => {
  const [employee, setEmployee] = useState<IEmployee>();
  const [feedbacks, setFeedbacks] = useState<IFeedback[]>();
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
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
  useEffect(() => {
    api
      .get(`/feedback/${String(id)}?page=${page}`)
      .then((res) => {
        setFeedbacks(res.data.feedbacks);
        setTotalCount(res.data.totalPages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, id]);
  console.log(feedbacks);

  return (
    <section className={classes.employeePage}>
      <Container maxWidth={1200}>
        {!employee ? (
          <>Ошибка</>
        ) : (
          <div className={classes.wrapper}>
            <EmployeeCard employee={employee} />
            <div className={classes.feedback}>
              <h3 className={classes.title}>Отзывы</h3>
              {!feedbacks ? (
                <>Нет отзывов</>
              ) : (
                <>
                  <FeedbackList feedbacks={feedbacks} />
                  <Pagination
                    count={totalCount}
                    page={page}
                    onChange={(_, num) => {
                      setPage(num);
                    }}
                  />
                </>
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
