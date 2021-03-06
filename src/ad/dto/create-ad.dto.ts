import { IsNotEmpty, IsPositive, MaxLength, MinLength } from 'class-validator';

export class CreateAdDto {
  @MinLength(5)
  @MaxLength(255)
  @IsNotEmpty()
  name: string;
  @IsPositive()
  price: number;
  @MaxLength(500)
  description: string;
  @IsNotEmpty()
  lat: number;
  @IsNotEmpty()
  lon: number;
  @MinLength(10)
  @MaxLength(255)
  olxUrl: string;
  @MinLength(10)
  @MaxLength(255)
  allegroUrl: string;
}
