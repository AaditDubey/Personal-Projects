import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Weather.css";

const WeatherInfo = ({ data, success,countryState}) => {
  const hours = new Date(data.sys.sunrise).getHours();
  const minutes = new Date(data.sys.sunrise).getMinutes();
  const hourSet = new Date(data.sys.sunset).getHours();
  const minSet = new Date(data.sys.sunset).getMinutes();
  return (
    <>
      <div className="card-weather">
        <Container>
          <Row>
            <Col xs={2}>
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              />
            </Col>
            <Col className="temprature" xs={3}>
              {data.main.temp}° C
            </Col>
            <Col className="temprature" xs={7}>
              {data.name}, {countryState.state}, {countryState.country}
            </Col>
          </Row>
          <Row className="info">
            <Col>
              <Row>
                {data.main.temp_min}° C/{data.main.temp_max}° C
              </Row>
              <Row>Low/High</Row>
            </Col>

            <Col>
              <Row>{data.main.feels_like}° C</Row>
              <Row>Feels Like</Row>
            </Col>

            <Col>
              <Row>{data.main.humidity}%</Row>
              <Row>Humidity</Row>
            </Col>

            <Col>
              <Row>{data.wind.speed} m/s</Row>
              <Row>Wind speed</Row>
            </Col>
          </Row>
          <Row className="info">
            <Col xs={3}></Col>
            <Col>
              <Row>
                {hours}:{minutes}
              </Row>
              <Row>Sunrise</Row>
            </Col>
            <Col>
              <Row>
                {hourSet}:{minSet}
              </Row>
              <Row>Sunset</Row>
            </Col>
            <Col xs={3}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default WeatherInfo;
