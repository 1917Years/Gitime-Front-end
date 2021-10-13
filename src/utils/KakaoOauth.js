import { react, useState, useEffect } from "react";
import queryString from "query-string";
import axios from "axios";
import { SERVER_URL } from "../utils/SRC";
import { setCookie } from "../utils/cookie";
import { getMemberInfoOauth } from "../utils/ApiConfig";

function KakaoOauth(props) {
  const queryObj = queryString.parse(props.location.search);
  const { code } = queryObj;
  const [reg, setReg] = useState(true);

  useEffect(() => {
    axios
      .get(SERVER_URL + "/api/v1/oauth2/kakao?code=" + code)
      .then((res) => {
        console.log(res);
        setCookie("token", "Bearer " + res.data.accessToken, {
          path: "/",
          secure: true,
          sameSite: "none",
        });

        getMemberInfoOauth({ setReg,props });
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

export default KakaoOauth;
