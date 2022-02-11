import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WeatherDataModel } from './weather-data.model';
import { WeatherDataRepository } from './weather-data.repository';

@Injectable()
export class WeatherDataService {

    constructor(
        @InjectRepository(WeatherDataRepository)
        private weatherDataRepository: WeatherDataRepository
        ){}

    async getWeatherDataById(id: string): Promise<WeatherDataModel>{
        const found = await this.weatherDataRepository.findOne(id)
        if(!found){
            throw new NotFoundException
        }
        return found
    }
}
