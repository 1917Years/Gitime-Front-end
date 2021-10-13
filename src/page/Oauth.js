import { react, useState, useEffect } from "react";
import queryString from "query-string";
import axios from "axios";
import { Redirect } from "react-router";
import { SERVER_URL } from "../utils/SRC";
import { getCookie } from "../utils/cookie";

function Oauth(props) {
  const queryObj = queryString.parse(props.location.search);
  const { code } = queryObj;

  useEffect(() => {
    axios
      .get(SERVER_URL + "/api/v1/sync/github?code=" + code, {
        headers: {
          "Content-Type": "application/json",
          Authorization: getCookie("token"),
        },
      })
      .then((res) => {
        console.log(res);
        props.history.push("/");
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="loading-container">
      <div className="loading"></div>
      <div id="loading-text">loading</div>
    </div>
  );
}

export default Oauth;
