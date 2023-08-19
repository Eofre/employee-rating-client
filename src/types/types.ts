export interface IEmployee {
  id: number | string;
  firstName: string;
  middleName: string;
  lastName: string;
  photo: string;
  position: IPosition;
  feedbacks: IFeedback[];
  totalRating: number;
}

export interface IPosition {
  id: number;
  name: string;
}

export interface IEmployeeState {
  list: IEmployee[];
  loading: any;
  error: string | null;
}

export interface IFeedback {
  id: number | string;
  score: number;
  comment: string;
}
