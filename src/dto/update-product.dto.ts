import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsInt()
  @Min(100)
  price: number;
}
