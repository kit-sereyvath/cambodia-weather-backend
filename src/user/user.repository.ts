import { EntityRepository, Repository } from "typeorm";
import { UserDto } from "./user.dto";
import { UserEntity } from "./user.entity";
import { UserModel } from "./user.model";

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
    async getUser(userDto: UserDto): Promise<UserModel>{
        //console.log(userDto.username)
        return await this.findOne({where: {username: userDto.username}})     
    }

    async createUser(userDto: UserDto): Promise<UserEntity> {
        const{username, password} = userDto;
        const user = this.create({
            username, password
        })
        this.save(user)

        return user;
    }

    async updateUser(userDto: UserDto): Promise<string>{
        const{username, password} = userDto
        this.update({username}, {password})
        .catch(err => {return "fail"})
        return "success"
    }

    async deleteUser(username: string): Promise<string>{
        this.delete({username})
        .catch(err => {return "fail"})
        return "success"
    }
}