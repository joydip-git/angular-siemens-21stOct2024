import { Injectable } from '@angular/core';
import { ServiceContract } from './abstraction/servicecontract';
import { Product } from '../../models/product';
import { productRepository } from '../../data/productrepository';

@Injectable()
export class ProductService implements ServiceContract<Product> {
  constructor() {

  }
  getAll(): Product[] {
    return [...productRepository]
  }
  get(id: number): Product | undefined {
    return productRepository.find(p => p.productId === id)
  }
}
