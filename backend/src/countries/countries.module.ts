import {Module} from '@nestjs/common';
import {CountriesService} from './countries.service';
import {CountriesController} from './countries.controller';
import {HttpModule} from "@nestjs/axios";
import {ConfigModule} from "@nestjs/config";
import {GetAllCountriesModule} from './get-all-countries/get-all-countries.module';
import {GetAllCountriesService} from "./get-all-countries/get-all-countries.service";
import { BorderCountriesModule } from './border-countries/border-countries.module';
import {BorderCountriesService} from "./border-countries/border-countries.service";
import {PopulationService} from "./population/population.service";
import { FlagModule } from './flag/flag.module';
import {FlagService} from "./flag/flag.service";

@Module({
    imports: [HttpModule, ConfigModule, GetAllCountriesModule, BorderCountriesModule, FlagModule],
    controllers: [CountriesController],
    providers: [CountriesService, GetAllCountriesService, BorderCountriesService, PopulationService, FlagService],
})
export class CountriesModule {
}
