import { type FC } from 'react';
import { type IFeedback } from '../../types/types';
import { FeedbackCard } from '../FeedbackCard';
import classes from './FeedbackList.module.scss';

interface FeedbackListProps {
  feedbacks: IFeedback[];
}

export const FeedbackList: FC<FeedbackListProps> = ({ feedbacks }) => {
  return (
    <ul className={classes.list}>
      {feedbacks.map((feedback) => (
        <li key={feedback.id}>
          <FeedbackCard feedback={feedback} />
        </li>
      ))}
    </ul>
  );
};
