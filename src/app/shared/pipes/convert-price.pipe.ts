import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertPrice'
})
export class ConvertPricePipe implements PipeTransform {

  transform(value: number): string {
    return `$${value}`;
  }
}
