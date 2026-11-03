import { Module } from '@nestjs/common';
import { TsksModule } from './tsks/tsks.module.js';



@Module({
  imports: [
  TsksModule],
})
export class AppModule {}
