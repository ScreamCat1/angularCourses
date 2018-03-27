import { Product, ProductCategoryType } from './product.model';

export interface SelectedProduct extends Product {
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}

export const products: Array<Product> = [
  {
    category : ProductCategoryType.P,
    colors : [ 'red', 'white', 'black' ],
    description : 'Men\'s Long Sleeve Standard Fit Golf Polo',
    isAvailable : undefined,
    name : 'NIKE DRI-FIT VICTORY',
    price : 65,
    sizes : [ 's', 'm', 'l', 'xl', '2xl' ]
  },
  {
    category : ProductCategoryType.J,
    colors : [ 'red' ],
    description : 'Men\'s Nike NBA Connected Jersey',
    isAvailable : true,
    name : 'CLEVELAND CAVALIERS ICON EDITION AUTHENTIC ',
    price : 200,
    sizes : [ 's', 'm', 'l', 'xl', '2xl', '3xl' ]
  },
  {
    category : ProductCategoryType.P,
    colors : [ 'red', 'white', 'black', 'grey', 'blue' ],
    description : 'Men\'s Long Sleeve Top',
    isAvailable : false,
    name : 'NIKE PRO',
    price : 35,
    sizes : [ 's', 'm', 'l' ]
  },
  {
    category : ProductCategoryType.L,
    colors : [ 'red', 'white', 'black', 'grey', 'blue' ],
    description : 'Men\'s Short Sleeve Running Top',
    isAvailable : true,
    name : 'NIKE DRI-FIT MEDALIST',
    price : 65,
    sizes : [ 's', 'm', 'l', 'xl', '2xl' ]
  },
  {
    category : ProductCategoryType.L,
    colors : [ 'red', 'white', 'black', 'grey', 'blue' ],
    description : 'Men\'s Standard Fit Golf Polo',
    isAvailable : false,
    name : 'NIKE ZONAL COOLING',
    price : 75,
    sizes : [ 'l', 'xl', '2xl' ]
  },
  {
    category : ProductCategoryType.L,
    colors : [ 'grey', 'white', 'black' ],
    description : 'Men\'s Training Shirt',
    isAvailable : true,
    name : 'NIKE LEGEND 2.0',
    price : 30,
    sizes : [ 'l', 'xl', '2xl', '3xl', '4xl' ]
  },
  {
    category : ProductCategoryType.L,
    colors : [ 'grey', 'black', 'darck grey' ],
    description : 'Men\'s Long Sleeve Top',
    isAvailable : true,
    name : 'NIKE TRAINING UTILITY',
    price : 45,
    sizes : [ 's', 'm', 'xl', '2xl' ]
  }
];
