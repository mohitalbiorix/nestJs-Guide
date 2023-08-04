import { Module } from '@nestjs/common';
import { CpuService } from './services/cpu.service';
import { PowerModule } from '../power/power.module';

@Module({
  providers: [CpuService],
  imports: [PowerModule],
  exports: [CpuService],
})
export class CpuModule {}