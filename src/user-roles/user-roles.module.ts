import { Module } from '@nestjs/common';

import { UserRolesController } from './user-roles.controller';

@Module({
  controllers: [UserRolesController],
})
export class UsersRolesModule {}
