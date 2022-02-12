import { EntityRepository, Repository } from "typeorm";
import { WeatherDAtaDto } from "./weather-data.dto";
import { WeatherData } from "./weather-data.entity";

@EntityRepository(WeatherData)
export class WeatherDataRepository extends Repository<WeatherData>{
    async insertWeatherData(weatherDAtaDto: WeatherDAtaDto): Promise<WeatherData>{
        const { province, date, time, description, temp, feel_like, min_temp, max_temp, pressure, wind, air_quality, cloud, humidity } = weatherDAtaDto;
        const weatherData = this.create({
            province,
            date, 
            time, 
            description, 
            temp, 
            feel_like, 
            min_temp, 
            max_temp, 
            pressure, 
            wind, 
            air_quality, 
            cloud, 
            humidity
        });
        await this.save(weatherData);
    
        return weatherData;
    }
}