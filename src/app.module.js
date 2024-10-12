import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, ProductsController],
  providers: [AppService, ProductsService, UsersService],
})
export class AppModule {}
