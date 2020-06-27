import { registerAs } from "@nestjs/config";
// Retorna um objeto de configução para acesso a base de dados
export default registerAs('database', () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        type: process.env.DATABASE_CONNECTION,
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME_DB,
        entities: [
            process.env.DATABASE_ENTITIES
        ],
        synchronize: process.env.DATABASE_SYNCHRONIZE,
        logging: process.env.DATABASE_LOGGING
    }
}));
