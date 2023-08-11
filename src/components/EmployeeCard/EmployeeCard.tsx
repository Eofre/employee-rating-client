import { type FC } from 'react';
import classes from './EmployeeCard.module.scss';

interface EmployeeCardProps {}

export const EmployeeCard: FC<EmployeeCardProps> = () => {
  return <div className={classes.employeeCard}></div>;
};
