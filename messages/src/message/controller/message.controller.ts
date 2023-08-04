import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { CreateMessageDtO } from '../dtos/create-message.dto';
import { MessageService } from '../service/message.service';

@Controller('messages')
export class MessageController {

    constructor(public messagesService: MessageService) {}

    @Get()
    listMessages() {
        return  this.messagesService.findAll();
    }

    @Post()
    createMessages(@Body() body:CreateMessageDtO) {
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id);

        if (!message) {
            throw new NotFoundException('message not found');
          }
      
          return message
    }

}
