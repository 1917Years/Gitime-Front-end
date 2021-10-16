import react from "react";
import axios from "axios";
import { getCookie } from "./cookie";
import { SERVER_URL } from "./SRC";

export const getMemberInfo = async ({ setMemberName, setMemberImg }) => {
  await axios
    .get(SERVER_URL + "/api/v1/members", {
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
    })
    .then((res) => {
      console.log("hi");
      console.log(res);
      setMemberImg(res.data.data[0].profileImg);

      setMemberName(res.data.data[0].nickName);
      console.log("end");
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data); // => the response payload 오 굿굿
      }
    });
};

export const getMemberInfoOauth = async ({ setReg, props }) => {
  await axios
    .get(SERVER_URL + "/api/v1/members", {
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
    })
    .then((res) => {
      console.log(res.data.data[0].phoneNumber);
      //res.data.data[0].nickName
      if (res.data.data[0].phoneNumber != null) {
        props.history.push("/");
      } else {
        props.history.push("/oauth/register");
      }
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data); // => the response payload 오 굿굿
      }
    });
};
