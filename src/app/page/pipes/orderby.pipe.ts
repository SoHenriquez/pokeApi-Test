import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(array: any[], field: string, order: 'asc' | 'desc' = 'asc'): any[] {
    if ( !array || !field) {
      return array;
    }
    const sortOrder = order === 'asc' ? 1 : -1;

    return array.sort((a, b) => {
      const valueA = a[field];
      const valueB = b[field];
      //
      return sortOrder * valueA.localeCompare(valueB, undefined, { sensitivity: 'base' });
    });
  }

}
