// eslint-disable-next-line @typescript-eslint/no-var-requires
const { config } = require("dotenv");
config();

export const configs = {
    PORT: process.env.PORT,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY
};