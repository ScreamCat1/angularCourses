export enum ProductCategoryType {
  P = 'Polo',
  J = 'Jersey',
  L = 'Long Sleeve'
  }

export class Product {
  constructor(
    public category: ProductCategoryType,
    public colors: Array<string>,
    public description: string,
    public isAvailable: boolean,
    public name: string,
    public price: number,
    public sizes: Array<string>,
    public id?: string
  ) {
    this.isAvailable = isAvailable || false;
  }
}
