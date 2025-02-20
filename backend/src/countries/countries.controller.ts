import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { BorderCountriesService } from './border-countries/border-countries.service';
import { GetAllCountriesService } from './get-all-countries/get-all-countries.service';
import { PopulationService } from './population/population.service';
import { FlagService } from './flag/flag.service';
import { CountryDto } from './get-all-countries/dto/country.dto';
import { CountryInfoDto } from './dto/country-info.dto';

@Controller('countries')
export class CountriesController {
  constructor(
    private readonly countriesService: CountriesService,
    private readonly getAllCountriesService: GetAllCountriesService,
    private readonly borderCountriesService: BorderCountriesService,
    private readonly populationService: PopulationService,
    private readonly flagService: FlagService,
  ) {}

  @Get()
  async getAllCountries(): Promise<CountryDto[]> {
    return this.getAllCountriesService.getAllCountries();
  }

  @Get(':countryCode/:countryName')
  async getCountryInfo(
    @Param('countryCode') countryCode: string,
    @Param('countryName') countryName: string,
  ): Promise<CountryInfoDto> {
    return this.countriesService.countryInfo(countryCode, countryName);
  }
}
