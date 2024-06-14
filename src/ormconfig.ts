import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '186202',
  database: 'gym-management-system',
  entities: [__dirname + '/infrastructure/orm/*.orm-entity.{js,ts}'],
  synchronize: true,
};

export default config;
