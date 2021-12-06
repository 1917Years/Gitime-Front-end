import React, { Component, useState } from "react";

const sample_user = [
  { email: "abcd@apd", name: "user1" },
  { email: "badcd@apd", name: "user2" },
  { email: "copybcd@apd", name: "user3" },
  { email: "drup@apd", name: "user4" },
  { email: "eeee@apd", name: "user5" },
  { email: "final@apd", name: "user6" },
  { email: "gapbcd@apd", name: "user7" },
];
/*
const SearchBar = ({ results, keyword, updateField }) => {
  
  return (
    <div className="w-5/6 h-full">
      <input
        class="block text-base w-full h-full px-1 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500"
        placeholder="초대 할 이메일을 입력"
        value={keyword}
        onChange={(e) => updateField("keyword", e.target.value)}
      />
    </div>
  );
};
*/

function SearchUser(props) {
  const [searchText, setSearchText] = useState(null);
  const [userlist, setuserlist] = useState(null);
  const [results, setresults] = useState(null);

  const onSearchTextHandler = (event) => {
    setSearchText(event.currentTarget.value);
  };

  const SearchBar = ({ searchText }) => {
    return (
      <div className="w-5/6 h-full">
        <input
          class="block text-base w-full h-full px-1 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500"
          placeholder="초대 할 이메일을 입력"
          value={searchText}
          onChange={onSearchTextHandler}
        />
      </div>
    );
  };

  const SearchPreview = (user) => {
    return (
      <div
        onClick={() => setSearchText(user.email)}
        className={`search-preview ${index == 0 ? "start" : ""}`}
      >
        <div className="first">
          <p className="name">{user.email}</p>
        </div>
        <div className="second">
          <p className="age">{user.name}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="UserSearch">
      <SearchBar />
      <div>
        {results.map((user) => {
          return <SearchPreview user={user}></SearchPreview>;
        })}
      </div>
    </div>
  );
}

export default SearchUser;
/* classN ,
                          id="email"
                          value={email}
                          onChange={onEmailHandler}
                          placeholder="초대 할 이메일을 입력"
                          class="block text-base w-full h-full px-1 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500"
                        ></input>
*/
