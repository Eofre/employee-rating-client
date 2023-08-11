import { type FC } from 'react';
import classes from './EmployeeList.module.scss';

interface EmployeeListProps {}

export const EmployeeList: FC<EmployeeListProps> = () => {
  return <div className={classes.employeeList}></div>;
};
