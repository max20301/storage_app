import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateStorageInput, DeleteStorageInput, StorageEntity } from "./storage.entity";
import { Repository } from "typeorm";

@Injectable()
export class StorageService {
	constructor(
		@InjectRepository(StorageEntity)
        private readonly StorageRepository: Repository<StorageEntity>
	) {}

	async getStorageList() {
		return await this.StorageRepository.find();
	}

	async createStorage(data: CreateStorageInput): Promise<StorageEntity> {
		let storage = new StorageEntity();
		storage.location = data.location;
		storage.object = data.object;
		await this.StorageRepository.save(storage);
		return storage;
	}

	async deleteStorage(data: DeleteStorageInput): Promise<StorageEntity> {
		let storage = new StorageEntity();
		storage.location = data.location;
		storage.object = data.object;
		await this.StorageRepository.delete(storage);
		return storage;
	}
}
