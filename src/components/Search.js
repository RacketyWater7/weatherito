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

const Search = ({ conditionImg }) => {
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
          onChange={inputHandler}
          value={textInput}
        />
        <button type="submit" onClick={submitSearch}>
          <img src={locate} alt="iimage" />
        </button>
      </SearchBarForm>
      <ConditionPic>
        <img src={conditionImg} alt="blabla" />
      </ConditionPic>
    </StyledSearch>
  );
};
const StyledSearch = styled(motion.div)`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
`;
const ConditionPic = styled(motion.div)`
  img {
    image-rendering: auto;
    image-rendering: crisp-edges;
    image-rendering: pixelated;
  }
`;
const SearchBarForm = styled(motion.form)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  input {
    border-radius: 2rem;
    border: none;
    padding: 0.3rem;
    font-weight: bold;
    &::-webkit-input-placeholder {
      color: black;
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
