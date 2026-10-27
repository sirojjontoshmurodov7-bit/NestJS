import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto.js';
import { UsersService } from './users.service.js';
import { LoginDto } from './dto/login.dto.js';
import { JwtAuthGuard } from '../auth/jwt-auth/jwt-auth.guard.js';

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

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() request: any) {
    return {
      message: 'Foydalanuvchi malumotlari:',
      user: request.user,
    };
  }
}
