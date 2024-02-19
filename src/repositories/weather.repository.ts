import { configs } from "../configs/config";
import { IWeather } from "../types/weather.type";

class WeatherRepository {
  public async findByTitle(cityName: string): Promise<IWeather> {
    const apiKey = configs.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    const res = await fetch(url);

    const data = await res.json();
    console.log("DATA", data);

    return {
      city: data.name,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
      description: data.weather[0].description,
      currentTemp: Math.trunc(data.main.temp),
      minTemp: Math.trunc(data.main.temp_min),
      maxTemp: Math.trunc(data.main.temp_max),
      pressure: data.main.pressure,
      windSpeed: Math.trunc(data.wind.speed),
    };
  }

  public async findByCoordinates(lat: number, lon: number): Promise<IWeather> {
    const apiKey = configs.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    const res = await fetch(url);

    const data = await res.json();

    return {
      city: data.name,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
      description: data.weather[0].description,
      currentTemp: Math.trunc(data.main.temp),
      minTemp: Math.trunc(data.main.temp_min),
      maxTemp: Math.trunc(data.main.temp_max),
      pressure: data.main.pressure,
      windSpeed: Math.trunc(data.wind.speed),
    };
  }
}

export const weatherRepository = new WeatherRepository();
