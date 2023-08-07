import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserService } from '../service/user.service';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Serialize, SerializeInterceptor } from 'src/interceptor/serialize.interceptor';
import { UserDto } from '../dto/user.dto';

@Serialize(UserDto)
@Controller('auth')
export class UserController {
  constructor(private usersService: UserService) {}

  // create user
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.usersService.create(body.email, body.password);
  }

  // get user by id
  // @UseInterceptors(new SerializeInterceptor(UserDto))
  // @Serialize(UserDto) // function level decorator
  @Get('/:id')
  findById(@Param() userId: any) {
    console.log("Handler is running!")
    const uId = userId.id;
    const user = this.usersService.findOne(uId);
    user.then((user) => console.log(user)).catch((err) => console.log(err));
  }

  // get all users
  @Post('/findAllUser')
  findAll(@Body() body: any) {
    const userEmail = body.email;
    const user = this.usersService.find(userEmail);
    user.then((user) => console.log(user)).catch((err) => console.log(err));
  }

  // update user by id
  @Patch('/:id')
  updateUser(@Param() userId: any, @Body() body: UpdateUserDto) {
    const uId = userId.id;
    const user = this.usersService.update(uId, body);
    user.then((user) => console.log(user)).catch((err) => console.log(err));
  }

  // delete user by id
  @Delete('/:id')
  removeUser(@Param() userId: any) {
    const uId = userId.id;
    const user = this.usersService.remove(uId);
    user.then((user) => console.log(user)).catch((err) => console.log(err));
  }
}
