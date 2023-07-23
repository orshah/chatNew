import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Chatzod</span>
      <div className="user">
        <img
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt="my avatar"
        />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
}

export default Navbar;
