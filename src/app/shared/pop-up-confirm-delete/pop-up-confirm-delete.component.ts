import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'my-pop-up-confirm-delete',
  templateUrl: 'pop-up-confirm-delete.component.html',
  styleUrls: ['pop-up-confirm-delete.component.scss'],
})
export class MyPopUpConfirmDeleteComponent {

  constructor(protected ref: NbDialogRef<MyPopUpConfirmDeleteComponent>) {}

  cancel() {
    this.ref.close(false);
  }

  submit(confirm: boolean) {
    this.ref.close(confirm);
  }
}
