import {PopulationInfoDto} from "../population/dto/population.dto";

export class CountryInfoDto {
    code: string;
    name: string;
    borderCountries: { countryCode: string; commonName: string; region: string }[];
    populationData: PopulationInfoDto;
    flagUrl: string;
}
