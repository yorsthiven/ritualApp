import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Habit } from '../../models/habit';
import { HabitService } from '../../services/habits/habit';

@Component({
  selector: 'app-habit-tracker',
  imports: [CommonModule, FormsModule],
  templateUrl: './habit-tracker.html',
  styleUrl: './habit-tracker.css',
})

export class HabitTrackerComponent implements OnInit {
  habits: Habit[] = [];
  newHabit = '';

  constructor(private habitService: HabitService) {}

  ngOnInit() {
    this.habitService.getHabits().subscribe(data => {
      this.habits = data;
    });
  }

  addHabit() {
    if (this.newHabit.trim()) {
      const habit: Habit = {
        name: this.newHabit,
        completedToday: false
      };
      this.habitService.addHabit(habit).then(() => this.newHabit = '');
    }
  }

  toggleHabit(habit: Habit) {
    habit.completedToday = !habit.completedToday;
    this.habitService.updateHabitStatus(habit.id!, habit.completedToday);
  }
}
