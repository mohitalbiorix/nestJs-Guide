import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './service/user.service';
import { User } from './entity/user.entity';

@Module({
    controllers:[UserController],
    providers:[UserService],
    imports:[TypeOrmModule.forFeature([User])]
})
export class UserModule {}
