export interface PopulationCount {
    year: string;
    value: number;
}

export interface PopulationData {
    error: boolean;
    msg: string;
    data: {
        country: string;
        code: string;
        iso3: string;
        populationCounts: PopulationCount[];
    };
}

export interface BorderCountry {
    commonName: string;
    countryCode: string;
}

export interface CountryData {
    name: string;
    countryCode: string;
    flagUrl: string;
    populationData: PopulationData;
    borderCountries: BorderCountry[];
}
