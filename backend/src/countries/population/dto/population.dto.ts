export class PopulationDataDto {
    year: number;
    value: number;
}

export class PopulationInfoDto {
    country: string;
    countryCode: string;
    iso3: string;
    populationCounts: PopulationDataDto[];
}
