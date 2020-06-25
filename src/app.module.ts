import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { AdminController } from './admin/admin.controller';
import { CategoryController } from './category/category.controller';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ConfigModule } from './config/config.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [
    UsersModule,
    ConfigModule.register({ folder: './config'})
  ],
  controllers: [
    AppController, 
    ProductsController, 
    AdminController, 
    CategoryController
  ],
  providers: [
    AppService
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('products');
  }
}
