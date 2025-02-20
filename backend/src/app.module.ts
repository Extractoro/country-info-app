import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CountriesModule } from './countries/countries.module';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CountriesModule],
  controllers: [AppController],
})
export class AppModule {}
