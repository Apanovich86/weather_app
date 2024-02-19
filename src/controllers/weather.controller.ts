import { NextFunction, Request, Response } from "express";

import { WeatherPresenter } from "../presenters/weather.presenter";
import { weatherService } from "../services/weather.service";

class WeatherController {
  public async getByName(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;
      const weather = await weatherService.getByCityName(name);
      return res.json({
        data: WeatherPresenter.weatherToResponse(weather),
      });
    } catch (e) {
      next(e);
    }
  }

  public async getByCoordinates(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { lat, lon } = req.body;
      const weather = await weatherService.getByCoordinates(lat, lon);
      return res.json({
        data: WeatherPresenter.weatherToResponse(weather),
      });
    } catch (e) {
      next(e);
    }
  }
}

export const weatherController = new WeatherController();
