import {
	IsEnum,
	IsNotEmpty,
	IsNumber,
	IsString
} from "class-validator";
import { PackageType } from "../../../Shared/entities/package.entity";

export class CustomerHistoryDto {


	@IsString()
	TransactionCode: string;

    @IsNotEmpty()
    Date: Date;

	@IsEnum(PackageType)
	PackageType: PackageType;

	@IsNumber()
	UserId: number;
}
