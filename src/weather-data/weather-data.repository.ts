import { EntityRepository, Repository } from "typeorm";
import { SearchParams } from "./search-param.dto";
import { WeatherDAtaDto } from "./weather-data.dto";
import { WeatherData } from "./weather-data.entity";
import { WeatherDataModel } from "./weather-data.model";

@EntityRepository(WeatherData)
export class WeatherDataRepository extends Repository<WeatherData>{
    async getWeatherData(searchParams: SearchParams): Promise<WeatherDataModel[]>{
        let found;
        const {province, date, time} = searchParams
        if (province != "" && date != "" && time != ""){
            found = await this.find({
                where: { province: province, date: date, time: time },
            });
        } else if (province != "" && date != "" && time == ""){
            found = await this.find({
                where: { province: province, date: date },
            });
        } else if (province != "" && date == "" && time != ""){
            found = await this.find({
                where: { province: province, time: time },
            });
        } else if (province != "" && date == "" && time == ""){
            found = await this.find({
                where: { province: province},
            });
        } else if (province == "" && date != "" && time != ""){
            found = await this.find({
                where: { date: date, time: time },
            });
        } else if (province == "" && date != "" && time == ""){
            found = await this.find({
                where: { date: date },
            });
        } else if (province == "" && date == "" && time != ""){
            found = await this.find({
                where: { time: time },
            });
        } else {
            found = await this.find()
        }

        return found;
    }

    async insertWeatherData(weatherDataDto: WeatherDAtaDto): Promise<WeatherData>{
        const { province, date, time, description, temp, feel_like, min_temp, max_temp, pressure, wind, air_quality, cloud, humidity } = weatherDataDto;
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

    async updateWeatherData(weatherDataDto: WeatherDAtaDto): Promise<string>{
        const {id, province, date, time, description, temp, feel_like, min_temp, max_temp, pressure, wind, air_quality, cloud, humidity } = weatherDataDto;
        await this.update({id}, {
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
            humidity,
        }).catch((err) => {
            return "fail";
        })
    
        return "success";
    }

    async deleteWeatherData(searchParams: SearchParams): Promise<string>{
        const {province, date, time} = searchParams
        if (province != "" && date != "" && time != ""){
            await this.delete({province, date, time })
            .catch((err) => {
                return "fail";
            })
        } else if (province != "" && date != "" && time == ""){
            await this.delete({province, date})
            .catch((err) => {
                return "fail";
            })
        } else if (province != "" && date == "" && time != ""){
            await this.delete({province, time })
            .catch((err) => {
                return "fail";
            })
        } else if (province != "" && date == "" && time == ""){
            await this.delete({province })
            .catch((err) => {
                return "fail";
            })
        } else if (province == "" && date != "" && time != ""){
            await this.delete({ date, time })
            .catch((err) => {
                return "fail";
            })
        } else if (province == "" && date != "" && time == ""){
            await this.delete({ date})
            .catch((err) => {
                return "fail";
            })
        } else if (province == "" && date == "" && time != ""){
            await this.delete({time })
            .catch((err) => {
                return "fail";
            })
        } else {
            await this.delete({})
            .catch((err) => {
                return "fail";
            })
        }
        
        return "success";
    }
}