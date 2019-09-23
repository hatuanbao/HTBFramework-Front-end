import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ngxNumberWithDot' })
export class NumberWithDotPipe implements PipeTransform {

  transform(input: number): string {
    return new Intl.NumberFormat().format(input).replace(',', '.');
  }
}
