export interface ITask{
  title: string;
  description: string;
  dueDate: Date;
  status?: 'Pending' | 'Completed';
}