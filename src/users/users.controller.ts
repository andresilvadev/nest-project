import { Controller, Post, Res, HttpStatus, Get, Body, Query, ParseIntPipe, Param } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { User } from './interface/user.interface';

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
    
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
      return await this.usersService.findOne(id);
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
