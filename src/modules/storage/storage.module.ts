import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageEntity } from './storage.entity';
import { StorageResolver } from './storage.resolver';
import { StorageService } from './storage.service';

@Module({
    imports: [TypeOrmModule.forFeature([ StorageEntity ])],
    providers: [StorageResolver, StorageService]
})
export class StorageModule {}