import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CreateStorageInput, DeleteStorageInput, StorageEntity } from "./storage.entity";
import { StorageService } from "./storage.service";

@Resolver(() => StorageEntity)
export class StorageResolver {
	constructor(private readonly storageService: StorageService) {}

	@Query(() => [StorageEntity])
	async getStorageList() {
		return this.storageService.getStorageList();
	}

	@Mutation(() => StorageEntity)
	async createStorage(@Args("data") data: CreateStorageInput) {
		return this.storageService.createStorage(data);
	}

	@Mutation(() => StorageEntity)
	async deleteStorage(@Args("data") data: DeleteStorageInput) {
		return this.storageService.deleteStorage(data);
	}
}
