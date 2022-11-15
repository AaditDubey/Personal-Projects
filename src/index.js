import React from "react";
import ReactDOM from "react-dom/client";
import TodoForm from "./Todo-Component/TodoForm";
import WeatherForm from "./Weather-Component/WeatherForm";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./MainPage/NavBar";
import Blocks from "./PracticeCSS/Blocks";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import InfoForm from "./InfoForm/Front-end/InfoForm";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HomePage />

      <div>
        <Routes>
          <Route
            path="/"
            element={
              <h1 align="center" style={{ marginTop: "20%" }}>
                Please select one of the options from the navigation bar above.
              </h1>
            }
          />
          <Route path="/todo" element={<TodoForm />} />
          <Route path="/weather" element={<WeatherForm />} />
          <Route path="/prac" element={<Blocks />} />
          <Route path="/info-form" element={<InfoForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
