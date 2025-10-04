// export interface Habit {
//   id?: string;
//   name: string;
//   completedToday: boolean;
//   history?: { [date: string]: boolean };
// }

export interface Habit {
  id?: string;
  nombre: string;
  estado: boolean;
  fecha:Date;
}
