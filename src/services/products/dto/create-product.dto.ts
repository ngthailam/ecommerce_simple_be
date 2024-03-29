import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ default: 'My Product' })
  name: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({ default: 2_000 })
  price: number;
}
