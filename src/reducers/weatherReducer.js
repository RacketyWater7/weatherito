const initState = {
  localWeather: [],
  sports: [],
  photo: [],
};

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_LOCAL_WEATHER":
      return {
        ...state,
        localWeather: action.payload.local,
        sports: action.payload.sports,
        photo: action.payload.photo,
      };
    default:
      return { ...state };
  }
};

export default weatherReducer;
