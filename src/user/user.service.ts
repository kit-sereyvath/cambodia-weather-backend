import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseMessage } from 'src/res-message.dto';
import { UserDto } from './user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){}

    async authenticateUser(userDto: UserDto): Promise<ResponseMessage>{
        const userfd = await this.userRepository.getUser(userDto)
        //console.log("service  " + !userfd) 
        const res = new ResponseMessage()
        if(userfd){
            if(userfd.username === userDto.username && userfd.password === userDto.password){
                res.message = "success"
                return res
            }
        }
        res.message = "fail"
        return res
    }

    async createUser(userDto: UserDto): Promise<ResponseMessage>{
        const userfd = await this.userRepository.getUser(userDto)
        const res = new ResponseMessage() 
        if(!userfd){
            this.userRepository.createUser(userDto)
            .catch(err => {
                res.message = "fail"
                return res
            })
            res.message = "success"
            return res
        }
        res.message = "user exist"
        return res
    }
}
