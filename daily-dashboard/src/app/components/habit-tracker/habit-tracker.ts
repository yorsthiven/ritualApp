import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Habit } from '../../models/habit';
import { HabitService } from '../../services/habits/habit';
import { TimestampDatePipe } from '../../pipes/timestamp-date';

@Component({
  selector: 'app-habit-tracker',
  imports: [CommonModule, FormsModule,TimestampDatePipe],
  templateUrl: './habit-tracker.html',
  styleUrl: './habit-tracker.css',
})

export class HabitTrackerComponent implements OnInit {
  habits: Habit[] = [];
  newHabit = '';

  private cdRef = inject(ChangeDetectorRef);

  constructor(private habitService: HabitService) {}

  ngOnInit() {
    this.habitService.getHabits().subscribe(data => {
      this.habits = data;
      this.cdRef.detectChanges();

    });
  }

  addHabit() {
    if (this.newHabit.trim()) {
      const habit: Habit = {
        nombre: this.newHabit,
        estado: false,
        fecha: new Date()
      };
      this.habitService.addHabit(habit).then(() => this.newHabit = '');
    }
  }

  toggleHabit(habit: Habit) {
    habit.estado = !habit.estado;
    this.habitService.updateHabitStatus(habit.id!, habit.estado);
  }
}
