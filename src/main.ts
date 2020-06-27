import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createConnection } from "typeorm";
import 'dotenv/config';
import { User } from './entity/user.entity';

createConnection({
  type: "postgres",
  host: "postgres",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "nestjs_db",
  entities: [
    User
  ],
  synchronize: true,
  logging: false
}).then(connection => {
  // here you can start to work with your entities
  console.log('===>> CONNECTION IS SUCCESSFUL... <<===')
}).catch(error => console.log(error + " ===>> CONNECTIONS IS FAILED... <<==="));

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
