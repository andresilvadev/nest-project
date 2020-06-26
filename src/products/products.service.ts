import { Injectable } from '@nestjs/common';
import { Product } from './interface/product.interface';

@Injectable()
export class ProductsService {

    private readonly products: Product[] = [];

    create(product: Product) {
      this.products.push(product);
    }
  
    showAll(): Product[] {
      return this.products;
    }


}
