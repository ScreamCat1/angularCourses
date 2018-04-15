import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent {
  user = {
    name: '',
    surname: '',
    email: ''
  };

  constructor(private location: Location) { }

  sendOrder() {
    console.log(this.user);
    alert('Your order was send to our manager');
    this.location.back();
  }

}
