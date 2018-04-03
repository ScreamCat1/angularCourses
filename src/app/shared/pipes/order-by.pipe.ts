import { Pipe, PipeTransform } from '@angular/core';

import { SelectedProduct } from './../../products/models/products';
import { OrdersService } from './../../orders/shared/orders.service';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(list: Array<SelectedProduct>, orderName: string, orderDirection: boolean = false): any {
    let a = list.sort((a, b) => {
      console.log(a, b)
      if (a[orderName] > b[orderName]) {
        return 1;
      } if (a[orderName] < b[orderName]) {
        return -1;
      }
      return 0;
    });

    console.log(a);
    return list;
  }

}
