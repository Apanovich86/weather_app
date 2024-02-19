import joi from "joi";

export class WeatherValidator {
  private static cityName = joi
    .string()
    .min(2)
    .max(50)
    .trim()
    .alphanum()
    .required();
  private static lat = joi.number().min(-90).max(90).required();
  private static lon = joi.number().min(-180).max(180).required();
  public static setByCityName = joi.object({
    city: this.cityName.required(),
  });
  public static setByCoordinates = joi.object({
    lat: this.lat.required(),
    lon: this.lon.required(),
  });
}
