import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CountriesModule } from './countries/countries.module';

@Module({
  imports: [CountriesModule],
  controllers: [AppController],
})
export class AppModule {}
