// app.routes.ts
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'child', component: ChildComponent },
];
