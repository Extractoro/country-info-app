import { api } from './api.ts';
import { useQuery } from '@tanstack/react-query';

const fetchAllCountries = async () => {
    const { data } = await api.get('/countries');
    return data;
};

const fetchCountryInfo = async (countryCode: string, countryName: string) => {
    const { data } = await api.get(`/countries/${countryCode}/${countryName}`);
    return data;
};

export const useCountries = () => {
    return useQuery({ queryKey: ['countries'], queryFn: fetchAllCountries });
};

export const useCountryInfo = (countryCode: string, countryName: string) => {
    return useQuery({
        queryKey: ['country', countryCode, countryName],
        queryFn: () => fetchCountryInfo(countryCode, countryName),
        enabled: !!countryCode && !!countryName,
    });
};
