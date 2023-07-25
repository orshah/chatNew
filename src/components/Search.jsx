import React from "react";

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input placeholder="Find a user" type="text" />
      </div>
      <div className="userChat">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt="users avatars"
        />
        <div className="userChatInfo">
          <span>James</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
