export interface Habit {
  id?: string;
  name: string;
  completedToday: boolean;
  history?: { [date: string]: boolean };
}
