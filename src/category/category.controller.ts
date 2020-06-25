import { Controller, Post, Body, Get, Query, Param, Put, Delete } from '@nestjs/common';
import { CategoryDto } from './category.dto';

@Controller('categories')
export class CategoryController {

    constructor() {}

    @Post()
    create(@Body() createCategoryDto: CategoryDto) {
      return 'This action adds a new category';
    }
      
    @Get()
    findAll(@Query() query: any) {
      return `This action returns all categories (limit: ${query} items)`;
    }
   
    @Get()
    findAllForName(@Query('name') name) {
      return `This action returns all categories with name: ${name}`;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return `This action returns a #${id} cat`;
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updateCategoryDto: CategoryDto) {
      return `This action updates a #${id} cat`;
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return `This action removes a #${id} cat`;
    }

}
