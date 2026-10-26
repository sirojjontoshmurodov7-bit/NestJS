import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsString({ message: "Ism string bo'lishi kerak!" })
  @Length(3, 30, { message: "Ism 3-30 oralig'ida bo'lishi kerak!" })
  name: string;

  @IsEmail(
    {},
    {
      message: "To'g'ri email kiriting!",
    },
  )
  email: string;

  @IsNotEmpty({
    message: 'Password is required',
  })
  @MinLength(6, {
    message: 'Password must be at least 6 characters',
  })
  password: string;
}
