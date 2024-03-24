import { Body, Controller, Param, Post, Query } from '@nestjs/common';

import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserInfo } from 'src/dto/user-info';
import { VerifyEmailDto } from 'src/dto/verify-email.dto';

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    console.log(dto);
  }

  @Post()
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    console.log(dto);
    return;
  }
  @Post('/login')
  async login(@Body() dto: VerifyEmailDto): Promise<string> {
    console.log(dto);
    return;
  }

  @Post('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
    console.log(userId);
    return;
  }
}
