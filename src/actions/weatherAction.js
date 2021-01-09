import axios from "axios";
import {
  localWeatherURL,
  sportsURL,
  photoReferenceURL,
  photoURL,
  proxyURL,
} from "../api";

//Action Creator

export const loadWeather = () => async (dispatch) => {
  //FETCH AXIOS
  //brushing up
  const initialPlacesRequest = await axios.get(
    proxyURL + photoReferenceURL("California")
  );
  const photoRef =
    initialPlacesRequest?.data?.candidates?.[0]?.photos?.[0]?.photo_reference;
  //Now getting the actual data
  const localData = await axios.get(localWeatherURL);
  const sportsData = await axios.get(sportsURL);
  const photoData = await axios.get(proxyURL + photoURL(photoRef));

  dispatch({
    type: "FETCH_LOCAL_WEATHER",
    payload: {
      local: localData.data,
      sports: sportsData.data.football,
      photo: photoData.data,
    },
  });
};
