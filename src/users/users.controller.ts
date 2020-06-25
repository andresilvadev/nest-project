import { Controller, Post, Res, HttpStatus, Get, Body } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  
    constructor(private usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: UserDto) {
      this.usersService.create(createUserDto);
    }
  
    @Get()
    async findAll(): Promise<User[]> {
      return this.usersService.findAll();
    }

    /**
    @Post()
    create(@Res() res: Response) {
      res.status(HttpStatus.CREATED).send();
    }
  
    @Get()
    findAll(@Res() res: Response) {
       res.status(HttpStatus.OK).json([]);
    }
     */
}
