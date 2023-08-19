import { type FC } from 'react';
import classes from './FeedbackCard.module.scss';
import { Rating } from '@mui/material';
import { type IFeedback } from '../../types/types';

interface FeedbackCardProps {
  feedback: IFeedback;
}

export const FeedbackCard: FC<FeedbackCardProps> = ({ feedback }) => {
  const { comment, score } = feedback;
  return (
    <div className={classes.feedbackCard}>
      <div>
        <p>Оценка обслуживания</p>
        <Rating name="size-small" readOnly defaultValue={score} size="small" />
      </div>
      <div className={classes.com}>
        <p className={classes.title}>Комментарий:</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};
