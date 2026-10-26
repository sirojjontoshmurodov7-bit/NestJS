import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from '../products/products.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { UsersService } from './users.service.js';
import { LoginDto } from './dto/login.dto.js';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  register(
    @Body()
    body: RegisterDto,
  ) {
    return this.userService.register(body);
  }

  @Post('login')
  login(
    @Body()
    body: LoginDto,
  ) {
    return this.userService.login(body);
  }
}
