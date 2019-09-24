import { MyPopUpConfirmDeleteComponent } from './pop-up-confirm-delete.component';
import { NgModule } from '@angular/core';
import { NbCardModule, NbButtonModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
@NgModule({
    imports: [
        NbCardModule,
        CommonModule,
        ThemeModule,
        NbButtonModule,
        NbIconModule,
        NbInputModule,
      ],
      declarations: [
        MyPopUpConfirmDeleteComponent,
      ],
})

export class MyPopUpConfirmDeleteModule {
}
