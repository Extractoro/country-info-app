import {Module} from '@nestjs/common';
import {BorderCountriesService} from './border-countries.service';
import {HttpModule} from "@nestjs/axios";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [HttpModule, ConfigModule],
    providers: [BorderCountriesService],
    exports: [BorderCountriesService],
})
export class BorderCountriesModule {
}
