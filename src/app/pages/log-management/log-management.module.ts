import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogManagementComponent } from './log-management.component';
// tslint:disable-next-line: max-line-length
import { NbCardModule, NbButtonModule, NbIconModule, NbAccordionModule, NbInputModule, NbDatepickerModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [
        NbCardModule,
        CommonModule,
        ThemeModule,
        NbButtonModule,
        NbIconModule,
        NbAccordionModule,
        NbInputModule,
        NbDatepickerModule,
        FormsModule,
      ],
      declarations: [
        LogManagementComponent,
      ],
})

export class LogManagementModule {
}
