import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">© Copyright by <b><a href="https://scb.com.vn" target="_blank">SCB</a></b> 2019</span>
  `,
})
export class FooterComponent {
}
