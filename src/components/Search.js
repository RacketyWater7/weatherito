import React, { useState } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import loadWeather from "../actions/searchedWeatherAction";
//Images
import locate from "../images/locate.svg";
import search from "../images/search.svg";
import weather from "../images/weather.svg";
import rain from "../images/rain.svg";

const Search = ({ condition, id, current, today }) => {
  //Getting the date
  const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
      return `0${month}`;
    } else {
      return month;
    }
  };
  const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
      return `0${day}`;
    } else {
      return day;
    }
  };
  //Current day/month/year
  const currentYear = new Date().getFullYear();
  const currentMonth = getCurrentMonth();
  const currentDay = getCurrentDay();
  const currentDate = `${currentMonth}/${currentDay}/${currentYear}`;
  const getDayName = (dateStr, locale) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  };
  const day = getDayName(currentDate, "en-US");
  //Load Weather
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(loadWeather(textInput));
    setTextInput("");
  };
  return (
    <StyledSearch>
      <SearchBarForm>
        <input
          type="text"
          placeholder="Search for places..."
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "Search for places...")}
          onChange={inputHandler}
          value={textInput}
        />
        <button type="submit" onClick={submitSearch}>
          <img src={locate} alt="iimage" />
        </button>
      </SearchBarForm>
      <Condition>
        <img src={condition.icon} alt="blabla" />
        <h1>{current.temp_c} </h1>
        <h3>&#8451;</h3>
      </Condition>
      <Day>
        <h2>{day}</h2>
        <hr />
      </Day>
      <Weather>
        <img src={weather} alt="weatherImg" />
        <h5> {condition.text}</h5>
      </Weather>
      <Weather>
        <img src={rain} alt="rainImg" />
        <h5> {today.daily_chance_of_rain}%</h5>
      </Weather>
    </StyledSearch>
  );
};
const StyledSearch = styled(motion.div)`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
`;
const Condition = styled(motion.div)`
  margin: 2rem 0rem;
  display: flex;
  font-weight: bolder;

  h1,
  img {
    align-items: center;
  }
  h1 {
    font-size: 3rem;
  }
  img {
    margin: 0rem 5rem 0rem 2rem;
    image-rendering: auto;
    image-rendering: crisp-edges;
    image-rendering: pixelated;
  }
`;
const Day = styled(motion.div)`
  margin: 1rem 0rem 0rem 2rem;
  h2 {
    color: #333;
  }
  hr {
    margin: 1rem 0rem;
  }
`;
const Weather = styled(motion.div)`
  margin: 0rem 0rem 1rem 2rem;
  display: flex;
  h5 {
    color: #333;
    margin: 0px 0px 0px 1em;
    align-self: flex-end;
  }
`;
const SearchBarForm = styled(motion.form)`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: space-evenly;
  input {
    border: none;
    padding: 0.3rem;
    font-weight: bold;
    &::-webkit-input-placeholder {
      color: black;
    }
    :hover {
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
      transition: ease-out;
      transition-duration: 0.5s;
    }
  }
  button {
    border-radius: 50%;
    border: none;
    cursor: pointer;
    outline: none;
  }
`;

export default Search;
