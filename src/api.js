//Base URL
const base_url = "http://api.weatherapi.com/v1/";

export const localWeatherURL = `${base_url}forecast.json?key=${process.env.REACT_APP_WEATHER_API}&q=Islamabad&days=7`;
export const sportsURL = `${base_url}sports.json?key=${process.env.REACT_APP_WEATHER_API}&q=Islamabad&days=7`;
export const searchedWeatherURL = (searched) => {
  return `${base_url}forecast.json?key=${process.env.REACT_APP_WEATHER_API}&q=${searched}&days=7`;
};
