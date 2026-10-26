import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async getProducts() {
    return this.prisma.product.findMany();
  }

  async getProduct(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  async createProduct(body: CreateProductDto) {
    return this.prisma.product.create({ data: body });
  }

  async updateProduct(id: number, body: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: body,
    });
  }

  async deleteProduct(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
