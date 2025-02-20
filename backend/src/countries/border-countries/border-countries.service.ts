import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { catchError, firstValueFrom } from 'rxjs';
import { BorderCountryDto } from './dto/border-country.dto';

@Injectable()
export class BorderCountriesService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async borderCountries(
    countryCode: string,
  ): Promise<{ borders: BorderCountryDto['borders'] }> {
    const url: string = `${this.configService.get<string>('DATE_NAGER_URL')}/CountryInfo/${countryCode}`;

    try {
      const response = await firstValueFrom(
        this.httpService.get<BorderCountryDto>(url).pipe(
          catchError((error: Error) => {
            throw new Error(error.message);
          }),
        ),
      );
      return { borders: response.data.borders };
    } catch (error) {
      console.error('Error fetching countries:', error.message);
      throw new Error('Error fetching countries');
    }
  }
}
