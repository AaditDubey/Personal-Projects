import React, { useState } from 'react'
import Form from "react-bootstrap/Form";

const SelectInputDiv = ({ name, opt, updateVal, val, count,setCount }) => {
    const [active,setActive] = useState(false);
    const handleChange = (e) => {
      updateVal(e.target.value)
      if(e.target.value!="Select" && !active)
        { 
          setCount(count+1)
          setActive(true)
        }
       else if(e.target.value=="Select")
        {
          setCount(count-1)
          setActive(false)
        }
    };

    return (
      <div>
        <label htmlFor ="input">
          {name}
          </label>
          <Form.Select value = {val} className="input" 
          onChange={handleChange}>
            <option>Select</option>
            {opt.map((o, i) => (
              <option value={o} key={i}>
                {o}
              </option>
            ))}
          </Form.Select>

      </div>
    );
  };

export default SelectInputDiv