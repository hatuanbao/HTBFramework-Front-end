import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogManagementComponent } from './log-management.component';
import { NbCardModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
@NgModule({
    imports: [
        NbCardModule,
        CommonModule,
        ThemeModule,
        NbButtonModule,
        NbIconModule,
      ],
      declarations: [
        LogManagementComponent,
      ],
})

export class LogManagementModule {
}
