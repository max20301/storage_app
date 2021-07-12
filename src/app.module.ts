import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { StorageEntity } from './modules/storage/storage.entity';
import { StorageModule } from './modules/storage/storage.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456789',
      database: 'storage',
      entities: [StorageEntity],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gpl'
    }),
    StorageModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
