/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState, type FC } from 'react';
import classes from './FeedbackForm.module.scss';
// import { MyTextarea } from '../UI/MyTextarea';
import { Button, Rating, TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router';

interface FeedbackFormProps {
  onSubmit: (score: number, comment: string) => void;
}

export const FeedbackForm: FC<FeedbackFormProps> = ({ onSubmit }) => {
  const [comment, setComment] = useState('');
  const [score, setScore] = useState<number>(1);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleScoreChange = (
    event: React.SyntheticEvent<Element, Event>,
    newScore: number | null
  ): void => {
    if (newScore !== null && newScore >= 1) {
      setScore(newScore);
    }
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (score !== null || score > 0) {
      onSubmit(score, comment);
      setComment('');
      setScore(1);
      navigate(`/employee/${id}`);
    }
  };
  return (
    <form className={classes.feedbackForm} onSubmit={handleSubmit}>
      <h3 className={classes.title}>Оставить отзыв о сотруднике</h3>
      <div>
        <p>Оценка обслуживания</p>
        <Rating name="score" value={score} size="large" onChange={handleScoreChange} />
      </div>
      <TextField
        id="outlined-multiline-static"
        label="Комментарий"
        multiline
        rows={4}
        color="error"
        variant="filled"
        onChange={handleCommentChange}
      />
      <Button type="submit" variant="contained" color="error">
        Отправить отзыв
      </Button>
    </form>
  );
};
