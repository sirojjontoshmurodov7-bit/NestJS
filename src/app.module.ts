import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module.js';
import { UsersModule } from './users/users.module.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [ProductsModule, UsersModule, AuthModule],
})
export class AppModule {}

export const ObserveInstrument = undefined;
