import { type FC } from 'react';
import classes from './EmployeeCard.module.scss';
import { type IEmployee } from '../../types/types';
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
  const fullName = `${employee.lastName} ${employee.firstName} ${employee.middleName}`;
  const scrImg = `http://localhost:5000/${employee.photo}`;
  return (
    <div className={classes.employeeCard} onClick={handlerClick}>
      <img className={classes.img} src={scrImg} alt="" />
      <div className={classes.content}>
        <span className={classes.text}>{fullName}</span>
        <Rating readOnly name="size-large" defaultValue={employee.totalRating} size="small" />
        <span className={classes.position}>{employee.position.name}</span>
      </div>
    </div>
  );
};
