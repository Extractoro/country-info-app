import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {ConfigService} from "@nestjs/config";
import {CountryInfoDto} from "./dto/country-info.dto";
import {BorderCountriesService} from "./border-countries/border-countries.service";
import {PopulationService} from "./population/population.service";
import {FlagService} from "./flag/flag.service";

@Injectable()
export class CountriesService {
    constructor(
        private readonly httpService: HttpService, private readonly configService: ConfigService,
        private readonly borderCountriesService: BorderCountriesService,
        private readonly populationService: PopulationService,
        private readonly flagService: FlagService
    ) {
    }

    async countryInfo(countryCode: string, countryName: string): Promise<CountryInfoDto> {
        const {borders} = await this.borderCountriesService.borderCountries(countryCode);
        const populationData = await this.populationService.getPopulationData(countryName);
        const flagUrl = await this.flagService.getCountryFlag(countryCode);

        return {
            code: countryCode,
            name: countryName,
            borderCountries: borders,
            populationData,
            flagUrl,
        };
    }

}
