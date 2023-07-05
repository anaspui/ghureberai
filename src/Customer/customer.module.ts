import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerHistory } from '../Shared/entities/customerHistory.entity';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { CustomerHistoryController } from './history/customerHistory.controller';
import { CustomerHistoryService } from './history/customerHistory.service';
import { PackageModule } from './package/package.module';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerHistory]), PackageModule],
  controllers: [CustomerController, CustomerHistoryController],
  providers: [CustomerService, CustomerHistoryService],
})
export class CustomerModule {}
