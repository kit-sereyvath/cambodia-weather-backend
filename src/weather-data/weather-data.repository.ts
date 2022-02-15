import { ResponseMessage } from "src/res-message.dto";
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

    async insertWeatherData(weatherDataDto: WeatherDAtaDto): Promise<ResponseMessage>{
        const { province, date, time, description, temp, feel_like, min_temp, max_temp, pressure, wind, air_quality, cloud, humidity } = weatherDataDto;
        const res = new ResponseMessage()

        const dweather = await this.findOne({where: {province: province, date: date, time: time}})
        if (dweather){
            res.message = "data exist"
            return res
        }
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
        await this.save(weatherData).catch(err => {
            res.message = 'fail'
            return res
        });
    
        res.message = "success"
        return res;
    }

    async updateWeatherData(weatherDataDto: WeatherDAtaDto): Promise<ResponseMessage>{
        const {id, province, date, time, description, temp, feel_like, min_temp, max_temp, pressure, wind, air_quality, cloud, humidity } = weatherDataDto;
        console.log(weatherDataDto)
        const res = new ResponseMessage()
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
            res.message = "fail"
            return res;
        })
    
        res.message = "success"
        return res;
    }

    async deleteWeatherData(searchParams: SearchParams): Promise<ResponseMessage>{
        const {province, date, time} = searchParams
        const res = new ResponseMessage()
        if (province != "" && date != "" && time != ""){
            await this.delete({province, date, time })
            .catch((err) => {
                res.message = "fail"
                return res;
            })
        } else if (province != "" && date != "" && time == ""){
            await this.delete({province, date})
            .catch((err) => {
                res.message = "fail"
                return res;
            })
        } else if (province != "" && date == "" && time != ""){
            await this.delete({province, time })
            .catch((err) => {
                res.message = "fail"
                return res;
            })
        } else if (province != "" && date == "" && time == ""){
            await this.delete({province })
            .catch((err) => {
                res.message = "fail"
                return res;
            })
        } else if (province == "" && date != "" && time != ""){
            await this.delete({ date, time })
            .catch((err) => {
                res.message = "fail"
                return res;
            })
        } else if (province == "" && date != "" && time == ""){
            await this.delete({ date})
            .catch((err) => {
                res.message = "fail"
                return res;
            })
        } else if (province == "" && date == "" && time != ""){
            await this.delete({time })
            .catch((err) => {
                res.message = "fail"
                return res;
            })
        } else {
            await this.delete({})
            .catch((err) => {
                res.message = "fail"
                return res;
            })
        }
        
        res.message = "success"
        return res
    }
}