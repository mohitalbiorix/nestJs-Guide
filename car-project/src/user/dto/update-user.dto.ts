import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  @IsString()
  email: string;

  @IsString()
  @IsOptional()
  password: string;
}
