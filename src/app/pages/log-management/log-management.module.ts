import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogManagementComponent } from './log-management.component';
import { NbCardModule } from '@nebular/theme';
@NgModule({
    imports: [
        NbCardModule,
      ],
      declarations: [
        LogManagementComponent,
      ],
})

export class LogManagementModule {
}
