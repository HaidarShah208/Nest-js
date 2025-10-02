import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UserRolesController } from './user-roles/user-roles.controller';
import { UsersRolesModule } from './user-roles/user-roles.module';

@Module({
  imports: [UsersModule,UsersRolesModule],
  controllers: [AppController, UserRolesController,UserRolesController],
  providers: [AppService],
})
export class AppModule {}
