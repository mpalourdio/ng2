import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUppercase'
})
export class ToUppercasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }
}
