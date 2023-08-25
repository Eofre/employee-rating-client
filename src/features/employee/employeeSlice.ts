import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IEmployee, type IEmployeeState } from '../../types/types';
import api from '../../api';

const initialState: IEmployeeState = {
  list: [],
  loading: false,
  error: null
};

export const fetchEmployees = createAsyncThunk('employee', async () => {
  const response = await api.get<IEmployee[]>('/employee');
  return response.data;
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const setError = (state: IEmployeeState, action: PayloadAction<any>) => {
  state.loading = 'rejected';
  state.error = action.payload;
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        setError(state, action);
      });
  }
});

export const employeeReducer = employeeSlice.reducer;
