import axios from "axios";
import { localWeatherURL, sportsURL } from "../api";

//Action Creator

export const loadWeather = () => async (dispatch) => {
  //FETCH AXIOS
  const localData = await axios.get(localWeatherURL);
  const sportsData = await axios.get(sportsURL);
  dispatch({
    type: "FETCH_LOCAL_WEATHER",
    payload: {
      local: localData.data,
      sports: sportsData.data.football,
    },
  });
};
