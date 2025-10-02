import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUsers() {
        return [
            { id: 1, name: 'John Doepp', email: 'hg@gmail,com' },
            { id: 2, name: 'Jane Smith', email: 'js@gmail,com' },
        ];
    }
    getUsersById(id: number) {
        const user = this.getUsers().find(user => user.id === id);
        if(user === undefined){
            return {message: 'User not found'};
        }
        return user;
    }
}
