import joi from "joi";

export class WeatherValidator {
  private static cityName = joi.string().min(2).max(50);
  private static lat = joi.number().min(-90).max(90).required().messages({
    "number.empty": "{{#label}} not be empty",
    "number.max":
      "{{#label}} length must be less than or equal to {{#limit}} characters long2",
    "number.min":
      "{{#label}} length must be at least {{#limit}} characters long2",
  });
  private static lon = joi.number().min(-180).max(180).required().messages({
    "number.empty": "{{#label}} not be empty",
    "number.max":
      "{{#label}} length must be less than or equal to {{#limit}} characters long2",
    "number.min":
      "{{#label}} length must be at least {{#limit}} characters long2",
  });
  public static setByCityName = joi.object({
    city: this.cityName,
  });
  public static setByCoordinates = joi.object({
    lat: this.lat.required(),
    lon: this.lon.required(),
  });
}
