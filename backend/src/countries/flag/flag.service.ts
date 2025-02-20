import { Injectable } from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {ConfigService} from "@nestjs/config";
import {catchError, firstValueFrom} from "rxjs";

@Injectable()
export class FlagService {
    constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {
    }

    async getCountryFlag(countryCode: string): Promise<string> {
        const url: string = `${this.configService.get<string>("COUNTRIESNOW_URL")}/countries/flag/images`;

        try {
            const response = await firstValueFrom(
                this.httpService.post(url, {iso2: countryCode.toUpperCase()}).pipe(
                    catchError((error: Error) => {
                        throw new Error(error.message);
                    }),
                )
            )
            return response.data.data.flag
        } catch (error) {
            console.error('Error fetching data:', error.message);
            throw new Error('Error fetching data');
        }
    }

}
