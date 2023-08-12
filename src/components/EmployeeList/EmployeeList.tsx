import { type FC } from 'react';
import { type IEmployee } from '../../types/types';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { EmployeeCard } from '../EmployeeCard';

interface EmployeeListProps {
  list: IEmployee[];
}

export const EmployeeList: FC<EmployeeListProps> = ({ list }) => {
  return (
    <Grid container spacing={2}>
      {list.map((employee) => (
        <Grid key={employee.id}>
          <EmployeeCard employee={employee} />
        </Grid>
      ))}
    </Grid>
  );
};
