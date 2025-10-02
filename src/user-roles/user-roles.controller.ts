import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/gaurd/roles/roles.decorators';
import { Role } from 'src/gaurd/roles/roles.enum';
import { RolesGuard } from 'src/gaurd/roles/roles.guard';

@Controller('user-roles')
export class UserRolesController {
    @Get('admin-data')
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)
    getAdminData() {
        return { message: 'This is admin data' };
    }
    @Get('user-data')
    getUserData() {
        return { message: 'This is user data,anyone can access data' };
    }
}
