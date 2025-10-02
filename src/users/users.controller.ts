import { Controller, Get, Param, ParseIntPipe, UseFilters, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/gaurd/auth/auth.guard';
import { HttpExceptionFilter } from 'src/filters/http-exception/http-exception.filter';

@Controller('users')
@UseFilters(HttpExceptionFilter)
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
    GetUsersById(@Param('id',ParseIntPipe) id:number) {
        return this.usersService.getUsersById(Number(id));
    }

}
