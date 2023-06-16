import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

  transform(value: number): string {
    if (isNaN(value)) {
      return '';
    }
    return (value / 10).toFixed(1);
  }

}
