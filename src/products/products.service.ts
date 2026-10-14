import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto.js';
import { UpdateProductDto } from '../dto/update-product.dto.js';

@Injectable()
export class ProductsService {
  private products = [
    {
      id: 1,
      title: 'iPhone 16',
      price: 1200,
    },
    {
      id: 2,
      title: 'MacBook Pro',
      price: 2200,
    },
  ];

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw new NotFoundException('Mahsulot topilmadi');
    }

    return product;
  }

  createProduct(dto: CreateProductDto) {
    const exists = this.products.find((product) => product.id === dto.id);

    if (exists) {
      throw new ConflictException('Bu ID allaqachon mavjud');
    }

    const product = { ...dto };

    this.products.push(product);

    return {
      message: 'Yangi mahsulot yaratildi',
      product,
    };
  }

  updateProduct(id: number, dto: UpdateProductDto) {
    const product = this.products.find((p) => p.id === id);

    if (!product) {
      throw new NotFoundException('Mahsulot topilmadi');
    }

    product.title = dto.title;
    product.price = dto.price;

    return {
      message: 'Mahsulot yangilandi',
      product,
    };
  }

  deleteProduct(id: number) {
    this.getProduct(id);

    this.products = this.products.filter((product) => product.id !== id);

    return {
      message: 'Mahsulot o‘chirildi',
    };
  }
}
