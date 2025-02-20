import { Module } from '@nestjs/common';
import { PopulationService } from './population.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [PopulationService],
  exports: [PopulationService],
})
export class PopulationModule {}
