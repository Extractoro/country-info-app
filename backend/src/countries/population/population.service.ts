import { Injectable } from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {ConfigService} from "@nestjs/config";
import {catchError, firstValueFrom} from "rxjs";
import {PopulationInfoDto} from "./dto/population.dto";

@Injectable()
export class PopulationService {
    constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {
    }

    async getPopulationData(countryName: string): Promise<PopulationInfoDto> {
        const url: string = `${this.configService.get<string>("COUNTRIESNOW_URL")}/countries/population`;

        try {
            const response = await firstValueFrom(
                this.httpService.post(url, {country: countryName.toLowerCase()}).pipe(
                    catchError((error: Error) => {
                        throw new Error(error.message);
                    }),
                )
            )
            return response.data
        } catch (error) {
            console.error('Error fetching data:', error.message);
            throw new Error('Error fetching data');
        }
    }
}
