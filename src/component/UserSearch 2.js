import React, { Component } from "react";

const sample_user = [
  { email: "abcd@apd", name: "user1" },
  { email: "badcd@apd", name: "user2" },
  { email: "copybcd@apd", name: "user3" },
  { email: "drup@apd", name: "user4" },
  { email: "eeee@apd", name: "user5" },
  { email: "final@apd", name: "user6" },
  { email: "gapbcd@apd", name: "user7" },
];

export const SearchBar = ({ results, keyword, updateField }) => {
  //renders our results using the SearchPreview component
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

/*<div className="w-5/6 h-full">
                        {" "}
                        <input
                          id="email"
                          value={email}
                          onChange={onEmailHandler}
                          placeholder="초대 할 이메일을 입력"
                          class="block text-base w-full h-full px-1 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500"
                        ></input>
*/
