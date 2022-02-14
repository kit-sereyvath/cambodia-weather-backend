import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post()
    authenticateUser(@Body() userDto: UserDto): Promise<string>{
        return this.userService.authenticateUser(userDto)
    }

    @Post('new')
    createUser(@Body() userDto: UserDto): Promise<string>{
        return this.userService.createUser(userDto)
    }
}
