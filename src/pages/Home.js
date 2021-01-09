import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
//Components
import Search from "../components/Search";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadWeather } from "../actions/weatherAction";
//Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Home = () => {
  //Fetch Weather
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadWeather());
  }, [dispatch]);
  //Getting the data from store
  const { localWeather, sports, photo } = useSelector((state) => state.weather);
  console.log(photo);
  const { location, current, forecast } = useSelector(
    (state) => state.weather.localWeather
  );

  const { day } = useSelector(
    (state) => state.weather.localWeather?.forecast?.forecastday[0] || {}
  );
  const { condition } = useSelector(
    (state) => state.weather.localWeather?.forecast?.forecastday[0]?.day || {}
  );

  return (
    <Container>
      <SearchContainer>
        {condition && day && (
          <Search
            current={current}
            today={day}
            condition={condition}
            id={uuidv4()}
            key={uuidv4()}
          />
        )}
      </SearchContainer>
      <InfoContainer>
        <div className="nav"></div>
        <div className="forecast"></div>
        <div className="highlights"></div>
      </InfoContainer>
    </Container>
  );
};
const Container = styled(motion.div)`
  min-width: 100vh;
  min-height: 100vh;
  padding: 3rem 2rem;
  display: flex;
  background-color: rgb(204, 204, 204);
`;
const SearchContainer = styled(motion.div)`
  background-color: #fefefe;
  flex: 30%;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
`;
const InfoContainer = styled(motion.div)`
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  flex: 70%;
  background-color: #f1f1f3;
`;

export default Home;
