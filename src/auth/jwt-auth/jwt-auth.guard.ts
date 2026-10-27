import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Tokening bilan kel!');
    }

    const token = authHeader.split(' ')[1];

    try {
      this.jwtService.verify(token);

      const payload = this.jwtService.decode(token)
      request.user = payload

      return true;
    } catch (error) {
      throw new UnauthorizedException("Token noto'g'ri!");
    }
  }
}
