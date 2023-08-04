import { Module } from '@nestjs/common';
import { MessageController } from './controller/message.controller';
import { MessageService } from './service/message.service';
import { MessageRepository } from './repository/message.repository';

@Module({
  controllers: [MessageController],
  providers: [MessageService, MessageRepository], 
})
export class MessageModule {}
