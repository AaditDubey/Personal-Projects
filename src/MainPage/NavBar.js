import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blocks from "../PracticeCSS/Blocks";
import TodoForm from "../Todo-Component/TodoForm";
import WeatherForm from "../Weather-Component/WeatherForm";
import './NavBar.css'

const HomePage = () => {
  return (
    <Container className="Main-Bar">
      <Link className="Nav-Link" to="/todo">
        <Col className="Nav-But">
          <span align ="center">Todo list</span>
        </Col>
        </Link>
        <Link className="Nav-Link" to="/weather">
        <Col className="Nav-But">
        <span align ="center">Weather</span>
        </Col>
        </Link>
        <Link className="Nav-Link" to="/prac">
        <Col className="Nav-But">
        <span align ="center">CSS practice</span>
        </Col>
        </Link>
        <Link className="Nav-Link" to="/info-form">
        <Col className="Nav-But">
        <span align ="center">Form with status bar</span>
        </Col>
        </Link>
    </Container>
  );
};

export default HomePage;