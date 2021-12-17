import React, { Component, useState } from "react";

const sample_user = [
  { id: 1, email: "abcd@apd", name: "user1" },
  { id: 2, email: "badcd@apd", name: "user2" },
  { id: 3, email: "copybcd@apd", name: "user3" },
  { id: 4, email: "drup@apd", name: "user4" },
  { id: 5, email: "eeee@apd", name: "user5" },
  { id: 6, email: "final@apd", name: "user6" },
  { id: 7, email: "gapbcd@apd", name: "user7" },
];

const default_result = [{ email: "", name: "" }];

function SearchTable(props) {
  const updateField = (field, value) => {
    this.setState({ [field]: value });
  };
  return <SearchUser updateField={updateField} />;
}

function SearchUser(props) {
  const [searchText, setSearchText] = useState("");
  const [text, setText] = useState(null);
  const userlist = sample_user;
  const [results, setresults] = useState(default_result);

  const onSearchTextHandler = (e) => {
    setSearchText(e.target.value);
    searchResult();
  };

  const OnSendButton = () => {
    setresults(userlist);
  };

  const searchResult = () => {
    const filter = sample_user.filter((val) => {
      if (searchText == "") {
        return val;
      } else if (val.email.toLowerCase().includes(searchText.toLowerCase())) {
        return val;
      }
    });
    setresults(filter);
  };

  const SearchBar = () => {
    return (
      <div>
        <input
          placeholder="초대 할 이메일을 입력"
          class="block text-base w-full h-10 lg:h-12 mt-2 lg:mt-4 px-1 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500"
          value={searchText}
          onChange={onSearchTextHandler}
        />
      </div>
    );
  };

  const SearchPreview = (user) => {
    return (
      <div>
        <div>
          <p> user : {user.email}</p>
        </div>
        <div>
          <p> name : {user.name}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="UserSearch">
      <div>
        <SearchBar />
      </div>

      <div className="overflow-auto h-10 w-full ">
        {results.map((user) => {
          return (
            <div
              className="flex text-gray-600  dark:text-gray-400 w-full gap-10"
              onclick={() => {
                setSearchText(user.email);
              }}
            >
              <div className="w=3/7 ml-10">
                <a>{user.name}</a>
              </div>
              <div className="w=4/7">
                <a>{user.email}</a>
              </div>
            </div>
          );
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
