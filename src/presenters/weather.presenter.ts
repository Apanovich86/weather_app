import { IWeather } from "../types/weather.type";

export class WeatherPresenter {
  public static weatherToResponse(weather: IWeather) {
    return {
      name: weather.city,
      description: weather.description,
      currentTemp: weather.currentTemp,
      pressure: weather.pressure,
      windSpeed: weather.windSpeed,
    };
  }
}
