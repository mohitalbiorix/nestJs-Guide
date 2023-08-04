import { Module } from '@nestjs/common';
import { PowerService } from './services/power.service';

@Module({
  providers: [PowerService],
  exports: [PowerService],
})
export class PowerModule {}
