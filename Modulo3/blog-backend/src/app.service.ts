import { Injectable } from '@nestjs/common';
import { ProductDto } from './product.dto';
import { paginate } from 'nestjs-typeorm-paginate/dist/paginate';
import { User } from './users/user.entity';
import { Pagination } from 'nestjs-typeorm-paginate/dist/pagination';
import { IPaginationOptions } from 'nestjs-typeorm-paginate/dist/interfaces';

@Injectable()
export class AppService {
  [x: string]: any;
  private products: ProductDto[] = [
    {
      id: 1,
      name: "Laptop",
      price: 850,
      stock: 10
    },

    {
      id: 2,
      name: "Mouse",
      price: 25,
      stock: 50
    },
  ];

  getHeath(): any {
    return {
      "status": "Online",
      "service": "blog service api",
      "version": "0.0.1",
      "date": new Date()
    };
  }

  createProduct(product: ProductDto): ProductDto {
    const newProduct: ProductDto = {
      id: Math.floor(Math.random() * 1000)+1,
      ...product
    }
    this.products.push(newProduct);
    return {
      "id": newProduct.id,
      "name": newProduct.name,
      "price": newProduct.price,
      "stock": newProduct.stock
    };
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<User>> {
    const queryBuilder = this.userRepository.createQueryBuilder('user');
    return paginate<User>(queryBuilder, options);
  }

  findById(id: string): ProductDto {
    return this.products!
      .find(product=> product.id === Number(id))!;
  }

  update(id: string, updateProductDto: ProductDto): any {
    const product: ProductDto = this.products!
      .find(product=> product.id === Number(id))!;
    if (!product) {
      return;
    }
    Object.assign(product, updateProductDto);
    return product
  }

  deleteById(id: string): any {
    const index = this.products!
      .findIndex(product=> product.id === Number(id))!;
    if (index === -1) {
      return;
    }
    const deletedProduct = this.products[index];
    this.products.splice(index, 1);
    return deletedProduct;
  }

  areaTriangulo(data: any): any {
    const area = (data.base * data.altura) / 2;
    return {
      "base": data.base,
      "altura": data.altura,
      "areaTriangulo": area
    }
  }
}
