import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yosrkhadija'
})
export class YosrkhadijaPipe implements PipeTransform {

  transform(ch:string): string {
    return '*'+ch+'*';
  }
  }


