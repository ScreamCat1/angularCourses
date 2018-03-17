enum ProductCategoryType {
  P = 'Polo',
  J = 'Jersey',
  L = 'Long Sleeve'
  }

export interface Product {
  category: ProductCategoryType;
  colors: Array<string>;
  description: string;
  isAvailable: boolean;
  name: string;
  price: number;
  sizes: Array<string>;
  id?: string;
}

export interface SelectedProduct extends Product {
  selectedColor: string;
  selectedSize: string;
}

export const products: Array<Product> = [
  {
    category : ProductCategoryType.P,
    colors : [ 'red', 'white', 'black' ],
    description : 'Men\'s Long Sleeve Standard Fit Golf Polo',
    isAvailable : true,
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
    isAvailable : true,
    name : 'NIKE PRO',
    price : 35,
    sizes : [ 's', 'm', 'l' ]
  }
];
