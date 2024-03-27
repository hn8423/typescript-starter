import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserInfo } from 'src/dto/user-info';
import { VerifyEmailDto } from 'src/dto/verify-email.dto';
import { UsersService } from './users.service';
import { UserLoginDto } from 'src/dto/user-login.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    const { name, email, password } = dto;
    await this.userService.createUser(name, email, password);
    console.log(dto);
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    const {signupVerifyToken} = dto
    
    return this.userService.verifyEmail(signupVerifyToken)
  }

 

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    const {email, password} = dto
    return await this.userService.login(email,password)
  }
  
  @Post('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<string> {
    
    return await this.userService.getUserInfo(userId)
    
  }
}
