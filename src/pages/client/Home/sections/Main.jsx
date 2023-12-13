import React from 'react'
import "../../.././../pages/client/Home/sections/Main.css";
import Myimg from "../../../../../src/assets/working_with_computer.svg";

const Main = () => {
  return (
    <div className='main'>
      <div className="container">
        <div className="main-wrapper">
          <div className="main-content">
            <p>More than just shorter links</p>
            <p className='p-content'>
              Build your brand’s recognition and get detailed insights on how your links are performing.
            </p>
            <button className='main-button'>
              Get Started
            </button>
          </div>
          <div className="main-image">
<img src={Myimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main