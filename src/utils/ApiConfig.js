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
      setMemberImg(res.data.data[0].profileImg);
      setMemberName(res.data.data[0].nickName);
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data); // => the response payload 오 굿굿
      }
    });
};

export const getMemberInfoOauth = async ({ props }) => {
  await axios
    .get(SERVER_URL + "/api/v1/members", {
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
    })
    .then((res) => {
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
