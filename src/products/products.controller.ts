import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: number) {
    return this.productService.getProduct(id);
  }

  @Post()
  createProduct(@Body() body: CreateProductDto) {
    return this.productService.createProduct(body);
  }

  @Patch(':id')
  updateProduct(@Param('id') id: number, @Body() body: UpdateProductDto) {
    return this.productService.updateProduct(id, body);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return this.productService.deleteProduct(id);
  }
}
