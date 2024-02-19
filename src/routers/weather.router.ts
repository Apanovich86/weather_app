import { Router } from "express";

import { weatherController } from "../controllers/weather.controller";
import { commonMiddleware } from "../middlewares/weather.middleware";
import { WeatherValidator } from "../validators/weather.validator";

const router = Router();

router.post(
  "/city",
  commonMiddleware.isLocationValid(WeatherValidator.setByCityName),
  weatherController.getByName,
);

router.post(
  "/coordinates",
  commonMiddleware.isLocationValid(WeatherValidator.setByCoordinates),
  weatherController.getByCoordinates,
);

export const weatherRouter = router;
