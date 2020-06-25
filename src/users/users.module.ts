import { Module, Global } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

// @Global() // Altera o escopo do módulo para global Ex: Conexão de banco
@Module({
    controllers: [UsersController],
    providers: [UsersService],
    // exports: [UsersService]  // Módulo compartilhado
})
export class UsersModule {}
