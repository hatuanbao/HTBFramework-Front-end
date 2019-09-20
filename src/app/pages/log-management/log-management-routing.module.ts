import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogManagementComponent } from './log-management.component';

const routes: Routes = [
  {
    path: '',
    component: LogManagementComponent,
    children: [
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class LogManagementRoutingModule {
}

