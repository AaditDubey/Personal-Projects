import React, { useState } from 'react'

const TextInputDiv = ({ name, updateVal,val,count,setCount }) => {
  const [empty, setEmpty] = useState(true)
    const handleChange = (e) =>{

      
        updateVal(e.target.value)
        
        if(e.target.value.length !=0 && empty){ 
          setEmpty(false)
          setCount(count+1)
        }
        else if(e.target.value.length==0){
          setEmpty(true)
          setCount(count-1)
        }
    }
    return (
      <div>
        <span>{name}</span>
        <br />
        <input type="text" 
        className="input"
        placeholder={name}
        onChange={handleChange }></input>
      </div>
    );
  };

export default TextInputDiv