import { Injectable } from '@nestjs/common';
import { MessageRepository } from '../repository/message.repository';

@Injectable()
export class MessageService {
  constructor(private messageRepo: MessageRepository) {}

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  create(content: string) {
    return this.messageRepo.create(content)
  }


}
