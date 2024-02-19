import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
//import {ApiError} from "../errors/api.error";

class CommonMiddleware {
  public isLocationValid(validator: ObjectSchema) {
    return function (req: Request, res: Response, next: NextFunction) {
      try {
        const cityName = validator.validate(req.body);
        if (!cityName) {
          throw new Error("wrong ID param");
        }
        next();
      } catch (e) {
        next(e);
      }
    };
  }
}

export const commonMiddleware = new CommonMiddleware();
