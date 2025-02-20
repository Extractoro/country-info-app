import {Module} from '@nestjs/common';
import {GetAllCountriesService} from './get-all-countries.service';
import {HttpModule} from "@nestjs/axios";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [HttpModule, ConfigModule],
    providers: [GetAllCountriesService],
    exports: [GetAllCountriesService]
})
export class GetAllCountriesModule {
}
