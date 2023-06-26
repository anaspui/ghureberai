import { Controller, Get, Param } from '@nestjs/common';
import { customerSchema } from './customer.dto';

let Customer = [];
@Controller('customer')
export class CustomerController {
  @Get(':id')
  userDetails(@Param('id') id: string): customerSchema {
    return Customer.find((customer) => customer.id == id);
  }
}
