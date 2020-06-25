import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {

    private readonly users: User[] = [];
    private readonly user: User;

    create(user: User) {
      this.users.push(user);
    }
  
    findAll(): User[] {
      return this.users;
    }

    async findOne(id: number): Promise<User> {
      return await this.user;
    }
  
    // Find One Utilizando User Repository
    // async findOne(id: number): Promise<User> {
    //   return await this.usersRepository.findOne({
    //     where: {id: id}
    //   });
    // }

}
