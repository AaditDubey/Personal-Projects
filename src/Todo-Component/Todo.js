import Button from 'react-bootstrap/Button';
import React, { useRef } from "react";
import "./app.css";
import {HiOutlineEmojiHappy, HiOutlineEmojiSad} from 'react-icons/hi';
import {AiOutlineEdit} from 'react-icons/ai';
import {IoIosRemoveCircleOutline} from 'react-icons/io';
function Todo({ completeData, data, setData }) {
  const handleRemove = (e) => {
    e.preventDefault();
    setData(completeData.filter((x) => x.id != data.id));
  };
  const handleComplete = (e) => {
    e.preventDefault();
    setData(
      completeData.map((x) => {
        if (x.id === data.id) {
          return { ...x, completed: !x.completed };
        }
        return x;
      })
    );
  };
  const editRef = useRef();

  const handleEdit = (e) => {
    e.preventDefault();
    setData(
      completeData.map((x) => {
        if (x.id == data.id) return { ...x, toBeEdited: !x.toBeEdited };
        return x;
      })
    );
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setData(
      completeData.map((x) => {
        if (x.id == data.id) return { ...x, value: editRef.current.value };

        return x;
      })
    );
  };

  return (
    <div className="individual-todo">
      <label className={data.completed ? "comp" : ""}>{data.value}</label>
      <Button
        variant={!data.completed?"success":"danger"}
        onClick={handleComplete}
      >
        {!data.completed ? <HiOutlineEmojiHappy/> : <HiOutlineEmojiSad/>}
      </Button>
      <Button variant="warning"onClick={handleEdit}><AiOutlineEdit/></Button>
      {data.toBeEdited && (
        <input type="text" ref={editRef} onChange={handleEditSubmit}></input>
      )}
      {data.completed && <Button variant ="danger"onClick={handleRemove}><IoIosRemoveCircleOutline/></Button>}
    </div>
  );
}

export default Todo;
