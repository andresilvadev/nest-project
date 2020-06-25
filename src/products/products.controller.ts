import { Controller, Get, Req, Post, Redirect, Query, Param, Body } from '@nestjs/common';
import { Request } from 'express';
import { ProductDto } from './product.dto';

@Controller('products')
export class ProductsController {

    constructor(){}

    
    @Get()
    findAll(): string {
        return 'This action returns all products';
    }

    @Get('promotion')
    profile(@Req() request: Request): string {
        return 'Profile Andre Silva Dev'
    }

    @Post()
    async create(@Body() productDto: ProductDto) {
        return 'This action adds a new cat';
    }

    @Post()
    @Redirect('https://nestjs.com', 301)
    createEx2(): string {
        return 'This action adds a new products';
    }


    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        console.log("Query name: version = " + version);
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        } else {
            return { url: 'https://www.google.com.br/' };
        }
    }

    @Get(':id')
    findOne(@Param() params): string {
        console.log("Params received: " + params.id);
        return `This action returns a #${params.id} product`;
    }

}
