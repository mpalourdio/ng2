import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUppercase'
})
export class ToUppercasePipe implements PipeTransform {

  public transform(value: string): string {
    return value.toUpperCase();
  }
}
