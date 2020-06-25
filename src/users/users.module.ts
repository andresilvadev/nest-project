import { Module, Global, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';

// @Global() // Altera o escopo do módulo para global Ex: Conexão de banco
@Module({
    controllers: [UsersController],
    providers: [UsersService],
    // exports: [UsersService]  // Módulo compartilhado
})
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(LoggerMiddleware)
          .forRoutes(UsersController);
      }
}
