import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {

  transform(value:string,prefix:string): any {
    return `$value $prefix`;
  }

}
