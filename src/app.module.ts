import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { AdminController } from './admin/admin.controller';
import { CategoryController } from './category/category.controller';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ProductsService } from './products/products.service';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [databaseConfig],
      isGlobal: true,
      expandVariables: true,
    }),
    UsersModule,
  ],
  controllers: [
    AppController, 
    ProductsController, 
    AdminController, 
    CategoryController
  ],
  providers: [
    AppService,
    ProductsService
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('products');
  }
}
