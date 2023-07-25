import React from "react";

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Type..." />
      <div>
        <img src="" alt="" />
        <input type="file" />
        <label htmlFor="file">
          <img src="" alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Input;
