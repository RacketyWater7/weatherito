import axios from "axios";
import { searchedWeatherURL } from "../api";

const loadWeather = (searched) => async (dispatch) => {
  const searchedData = await axios.get(searchedWeatherURL(searched));
  dispatch({
    type: "GET_SEARCHED_WEATHER",
    payload: {
      weather: searchedData.data,
    },
  });
};
export default loadWeather;
