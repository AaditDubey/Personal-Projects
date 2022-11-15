import React from 'react'
import './Blocks.css'
function Blocks() {
  return (
    <div className = "cont">
        <div className="squareRed">
            <span>RED</span>
        </div>
        <div className="squareBlue">
            <span>BLUE</span>
        </div>
        <div className="squareYellow">
            <span>YELLOW</span>    
        </div>
        <div className="squareGreen">
            <span>GREEN</span>
        </div>
    </div>
  )
}

export default Blocks