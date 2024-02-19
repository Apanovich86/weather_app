import { ApiError } from "../errors/api.error";
import { weatherRepository } from "../repositories/weather.repository";
import { IWeather } from "../types/weather.type";

class WeatherService {
  public async getByCityName(cityName: string): Promise<IWeather> {
    const weatherByCity = await weatherRepository.findByTitle(cityName);
    if (!weatherByCity) {
      throw new ApiError("City not found", 422);
    }
    return weatherByCity;
  }

  public async getByCoordinates(lat: number, lon: number): Promise<IWeather> {
    const weatherByCoordinates = await weatherRepository.findByCoordinates(
      lat,
      lon,
    );
    if (!weatherByCoordinates) {
      throw new ApiError("City not found", 422);
    }
    return weatherByCoordinates;
  }
}

export const weatherService = new WeatherService();
