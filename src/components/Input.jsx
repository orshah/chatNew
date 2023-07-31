import React from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Type..." />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Input;
