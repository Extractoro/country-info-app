import { Module } from '@nestjs/common';
import { FlagService } from './flag.service';
import {HttpModule} from "@nestjs/axios";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [FlagService],
  exports: [FlagService],
})
export class FlagModule {}
