import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){}

    async authenticateUser(userDto: UserDto): Promise<string>{
        const userfd = await this.userRepository.getUser(userDto)
        //console.log("service  " + !userfd) 
        if(!userfd){
            return "no user"
        }

        if(userfd.username === userDto.username && userfd.password === userDto.password){
            return "success"
        }

        return "fail"
    }

    async createUser(userDto: UserDto): Promise<string>{
        const userfd = await this.userRepository.getUser(userDto) 
        if(!userfd){
            this.userRepository.createUser(userDto)
            .catch(err => {
                return "fail"
            })
            return "success"
        }
        return "user exist"
    }
}
