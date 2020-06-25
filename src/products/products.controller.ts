import { Controller, Get, Req, Post, Redirect, Query, Param, Body, HttpException, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { Request } from 'express';
import { ProductDto } from './product.dto';

@Controller('products')
export class ProductsController {

    constructor(){}
    
    // Modo normal
    // @Get()
    // async findAll() {
    //     throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // }

    // Modo customizado
    @Get()
    async findAll() {
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'Forbidden',
            message: 'This is a custom message'
        }, HttpStatus.FORBIDDEN);
    }
    
    @Get('all')
    findAllProducts(): string {
        return 'This action returns all products';
    }

    @Get('best-seller')
    profile(@Req() request: Request): string {
        return 'The best product from Brazil'
    }

    @Post()
    async create(@Body() productDto: ProductDto) {
        return 'This action adds a new product';
    }

    @Post('new')
    @Redirect('https://nestjs.com', 301)
    createWithRedirect(): string {
        return 'This action adds a new product';
    }


    @Get('filter-product')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        console.log("Query name: version = " + version);
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        } else {
            return { url: 'https://www.google.com.br/' };
        }
    }

    // Busca por id mas aceita qualquer caractera alfa-numerico
    // @Get(':id')
    // findOne(@Param() params): string {
    //     console.log("Params received: " + params.id);
    //     return `This action returns a #${params.id} product`;
    // }

    // Busca por id mas usa Pipe para filtrar apenas números lançando uma exception
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): string {
        console.log("Params received: " + id);
        return `This action returns a #${id} product`;
    }

}
