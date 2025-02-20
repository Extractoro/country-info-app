import { Injectable } from '@nestjs/common';
import {catchError, firstValueFrom} from "rxjs";
import {HttpService} from "@nestjs/axios";
import {ConfigService} from "@nestjs/config";
import {CountryDto} from "./dto/country.dto";

@Injectable()
export class GetAllCountriesService {
    constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {
    }

    async getAllCountries(): Promise<CountryDto[]> {
        const url: string = `${this.configService.get<string>("DATE_NAGER_URL")}/AvailableCountries`;

        try {
            const response = await firstValueFrom(
                this.httpService.get<CountryDto[]>(url).pipe(
                    catchError((error: Error) => {
                        throw new Error(error.message);
                    }),
                )
            )
            return response.data
        } catch (error) {
            console.error('Error fetching countries:', error.message);
            throw new Error('Error fetching countries');
        }
    }
}
