const initialState = { weather: {} };

const searchedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SEARCHED_WEATHER":
      return {
        ...state,
        weather: action.payload.weather,
      };
    default:
      return { ...state };
  }
};

export default searchedReducer;
