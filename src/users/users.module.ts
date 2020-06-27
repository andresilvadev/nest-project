import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';

@Module({        
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService] 
})
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(LoggerMiddleware)
          .forRoutes(UsersController);
      }
}
