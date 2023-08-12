import { type FC } from 'react';
import classes from './EmployeeCard.module.scss';
import { type IEmployee } from '../../types/types';
import human from '../../assests/images/human.jpg';
import { useNavigate } from 'react-router';
import { Rating } from '@mui/material';

interface EmployeeCardProps {
  employee: IEmployee;
}

export const EmployeeCard: FC<EmployeeCardProps> = ({ employee }) => {
  const navigate = useNavigate();
  const handlerClick = (): void => {
    navigate(`/employee/${employee.id}`);
  };
  return (
    <div className={classes.employeeCard} onClick={handlerClick}>
      <img className={classes.img} src={human} alt="" />
      <div className={classes.content}>
        <span className={classes.text}>{employee.fullName}</span>
        <Rating readOnly name="size-large" defaultValue={4} size="small" />
        <span className={classes.position}>{employee.position}</span>
      </div>
    </div>
  );
};
