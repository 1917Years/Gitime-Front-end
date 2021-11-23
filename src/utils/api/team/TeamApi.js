import React, { useState } from "react";
import axios from "axios";
import { getCookie } from "../../cookie";
import { SERVER_URL } from "../../SRC";

export const GetTeamList = async ({ setTeamList }) => {
  await axios
    .get(SERVER_URL + "/api/v1/teams?page=0", {
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
    })
    .then((res) => {
      setTeamList(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data); // => the response payload 오 굿굿
      }
    });
};

export const GetGitRepoList = async ({ setGitRepos }) => {
  await axios
    .get(SERVER_URL + "/api/v1/teams/add", {
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
    })
    .then((res) => {
      setGitRepos(res.data.data);
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data); // => the response payload 오 굿굿
      }
    });
};

export const PostCreateTeam = async ({ data }) => {
  console.log(data);

  await axios
    .post(SERVER_URL + "/api/v1/teams/add", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data); // => the response payload 오 굿굿
      }
    });
};
