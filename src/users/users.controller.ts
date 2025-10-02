import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/gaurd/auth/auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    @UseGuards(AuthGuard)
     getUSers(){
         return this.usersService.getUsers();
     } 
    @Get('profile')
    getProfile() {
        return { id: 1, name: 'John Doess', email: 'as@gmai.com' };
    }
    
    @Get(':id')
    GetUsersById(@Param('id') id:string) {
        return this.usersService.getUsersById(Number(id));
    }

}
