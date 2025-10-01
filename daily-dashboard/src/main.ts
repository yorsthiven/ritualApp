import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import 'zone.js';
import { HabitTrackerComponent } from './app/components/habit-tracker/habit-tracker';

bootstrapApplication(HabitTrackerComponent, appConfig)
  .catch((err) => console.error(err));
