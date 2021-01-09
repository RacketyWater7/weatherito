//Base URL
const base_url = "http://api.weatherapi.com/v1/";

export const localWeatherURL = `${base_url}forecast.json?key=${process.env.REACT_APP_WEATHER_API}&q=Islamabad&days=7`;
export const sportsURL = `${base_url}sports.json?key=${process.env.REACT_APP_WEATHER_API}&q=Islamabad&days=7`;
export const searchedWeatherURL = (searched) => {
  return `${base_url}forecast.json?key=${process.env.REACT_APP_WEATHER_API}&q=${searched}&days=7`;
};
//Below I'm fetching the data from another api
export const photoReferenceURL = (cityName) => {
  return `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${cityName}&key=${process.env.REACT_APP_GOOGLE_API}&inputtype=textquery&fields=name,photos`;
};
export const photoURL = (reference) => {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${reference}&key=${process.env.REACT_APP_GOOGLE_API}`;
};
export const proxyURL = "http://localhost:8080/";
