import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity("storage")
export class StorageEntity extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Field()
	@Column("varchar", { length: 512 })
	location: string;

	@Field()
	@Column("varchar", { length: 512 })
	object: string;
}

@InputType()
export class CreateStorageInput {
	@Field() readonly location: string;
	@Field() readonly object: string;
}

@InputType()
export class DeleteStorageInput {
	@Field() readonly location: string;
	@Field() readonly object: string;
}

@InputType()
export class ChangeStorageInput {
	@Field() readonly location: string;
	@Field() readonly object: string;
}