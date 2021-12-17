import axios from "axios";
import { getCookie } from "../../cookie";
import { SERVER_URL } from "../../SRC";

export const PostCreateTodo = async ({ setTeamList, page }) => {
  await axios
    .get(SERVER_URL + "/api/v1/teams?page=" + page, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
    })
    .then((res) => {
      setTeamList(res.data);
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

export const PostCreateTeam = async ({ data, props }) => {
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
      props.setShowCreateTeamForm(false);
      window.location.href = "http://localhost:3000/team";
      // 성공
    })
    .catch((err) => {
      // 실패
      if (err.response) {
        console.log(err.response.data); // => the response payload 오 굿굿
      }
    });
};

export const GetTeamNotice = async ({ setNotice, teamName }) => {
  await axios
    .get(SERVER_URL + "/api/v1/teams/" + teamName + "/notice", {
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
    })
    .then((res) => {
      console.log(res);
      setNotice(res.data.data[0].notice);
      console.log(res.data.data[0].notice);
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data); // => the response payload 오 굿굿
      }
    });
};
