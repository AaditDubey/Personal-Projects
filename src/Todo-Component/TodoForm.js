import React, { useRef, useState, useEffect } from "react";
import TodoList from "./TodoList";
import "./app.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import { Col, Container, Row } from "react-bootstrap";

function TodoForm() {
  const inputRef = useRef();

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  // useEffect(()=>{
  //     const storedData = JSON.parse(localStorage.getItem("data"))
  //     if(storedData)setData(storedData)
  // },[])

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleSubmit = (e) => {
    console.log("hs");
    e.preventDefault();
    const val = inputRef.current.value.replace(/\s{2,}/g, " ").trim();
    if (!val) return;
    const id = Math.floor(Math.random() * 10000);
    setData([
      ...data,
      { id: id, value: val, completed: false, toBeEdited: false },
    ]);

    inputRef.current.value = null;
  };

  const removeDoneTasks = (e) => {
    console.log("rdt");
    e.preventDefault();
    setData(data.filter((t) => t.completed != true));
  };

  const sortTasks = (e) => {
    console.log("st");
    e.preventDefault();
    const sortedData = [...data].sort(
      (x, y) => Number(y.completed) - Number(x.completed)
    );
    setData(sortedData);
  };

  const handleClear = (e) => {
    console.log("hc");
    e.preventDefault();
    setData([]);
  };
  return (
    <Container className="Main-Todo">
      <form onSubmit={handleSubmit}>
        <Row className="inputTodo">
          <h1 align="center">TO DO LIST</h1>
          <input
            type="text"
            ref={inputRef}
            autoFocus={true}
            placeholder="New todo"
          ></input>
          <Row>
            <Button variant="outline-primary" type="submit">
              Add new task
            </Button>
          </Row>
          <Row align="center">
            <Col>
              <Button variant="primary" onClick={removeDoneTasks}>
                Remove done tasks
              </Button>
            </Col>
            <Col>
              <Button variant="primary" onClick={sortTasks}>
                Sort
              </Button>
            </Col>
            <Col>
              <Button variant="primary" onClick={handleClear}>
                Clear
              </Button>
            </Col>
          </Row>
        </Row>
        <Row>
          <TodoList data={data} setData={setData} />
        </Row>
      </form>
    </Container>
  );
}

export default TodoForm;
