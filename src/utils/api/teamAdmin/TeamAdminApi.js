import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCookie } from "../../cookie";
import { SERVER_URL } from "../../SRC";

export const AddTeamNotice = async ({ noticeText, teamName }) => {
  const data = {
    notice: noticeText,
  };
  await axios
    .post(SERVER_URL + "/api/v1/teams/admin/" + teamName + "/notice", data, {
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

export const getTeamNoticeList = async ({ teamName, setNoticeLists }) => {
  await axios
    .get(SERVER_URL + "/api/v1/teams/admin/" + teamName + "/notice", {
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
    })
    .then((res) => {
      console.log(res);
      setNoticeLists(res.data.data);
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data); // => the response payload 오 굿굿
      }
    });
};
