import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortList',
  pure: false
})
export class SortListPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    return value.sort((a, b) => a[propName] > b[propName] ? 1 : -1);
  }

}
