import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDto } from './product.dto';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { User } from './users/user.entity';
import { Pagination } from 'nestjs-typeorm-paginate/dist/pagination';

@Controller()
export class AppController {
  usersService: any;
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  getHeath(): any {
    return this.appService.getHeath();
  }

  @Post("/products")
  @UseGuards(JwtAuthGuard)
  createProduct(@Body() product: ProductDto): ProductDto {
    return this.appService.createProduct(product);
  }

  @Get()
  findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<Pagination<User>> {
    limit = limit > 100 ? 100 : limit;
    return this.usersService.findAll({ page, limit });
  }

  @Get("/products/:id")
  findById(@Param('id') id: string): ProductDto {
    return this.appService.findById(id);
  }

  @Put("/products/:id")
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, 
  @Body() updateProductDto: ProductDto): any {
    return this.appService.update(
      id, 
      updateProductDto
    );
  }

  @Delete("/products/:id")
  @UseGuards(JwtAuthGuard)
  deleteById(@Param('id') id: string): ProductDto {
    return this.appService.deleteById(id);
  }

  @Post("/area-triangulo")
  @UseGuards(JwtAuthGuard)
  areaTriangulo(@Body() data: any): any {
    return this.appService.areaTriangulo(data);
  }
}

