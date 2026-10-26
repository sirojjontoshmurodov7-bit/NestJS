import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString({ message: "Title string bo'lishi kerak!" })
  @IsNotEmpty({ message: "Title bo'sh bo'lishi mumkin emas!" })
  @Length(3, 30, { message: "3-30 oralig'ida kiriting" })
  title?: string;

  @IsOptional()
  @IsNumber({}, { message: "price number bo'lishi shart!" })
  @Min(1, { message: 'Min narx 1' })
  @Max(10000000, { message: 'Max narx 10000000' })
  price?: number;
}
