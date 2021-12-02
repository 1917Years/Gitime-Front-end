import axios from "axios";
import { getCookie } from "../../cookie";
import { SERVER_URL } from "../../SRC";
import Swal from "sweetalert2";

export const DeleteDevelope = async ({ input, teamName, props, setUpdate }) => {
  const data = {
    developField: input,
  };

  console.log(props);
  await axios
    .post(
      SERVER_URL + "/api/v1/teams/admin/" + teamName + "/developfield/delete",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: getCookie("token"),
        },
      }
    )
    .then((res) => {
      Swal.fire({
        title: "O",
        text: "개발 분야 삭제가 완료되었어요!",
        confirmButtonText: "👍",
        confirmButtonColor: "#171717",
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      setUpdate(true);
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data); // => the response payload 오 굿굿
      }
    });
};

export const AddDevelope = async ({ input, teamName, props, setUpdate }) => {
  const data = {
    developField: input,
  };

  console.log(props);
  await axios
    .post(
      SERVER_URL + "/api/v1/teams/admin/" + teamName + "/developfield/add",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: getCookie("token"),
        },
      }
    )
    .then((res) => {
      console.log(res);
      Swal.fire({
        title: "O",
        text: "개발 분야 추가가 완료되었어요!",
        confirmButtonText: "👍",
        confirmButtonColor: "#171717",
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      setUpdate(true);
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data); // => the response payload 오 굿굿
      }
    });
};
export const deleteTeam = async (props) => {
  const { teamName } = props;
  console.log(props);
  await axios
    .delete(SERVER_URL + "/api/v1/teams/admin/" + teamName + "/team/delete", {
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
    })
    .then((res) => {
      console.log(res);
      props.props.history.push("/team");
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data); // => the response payload 오 굿굿
      }
    });
};

export const getAllDevelop = async ({
  teamName,
  setDevelopLists,
  setUpdate,
}) => {
  await axios
    .get(SERVER_URL + "/api/v1/teams/admin/" + teamName + "/developfield", {
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
    })
    .then((res) => {
      console.log(res);
      setDevelopLists(res.data.data);
      setUpdate(false);
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data); // => the response payload 오 굿굿
      }
    });
};

export const AddTeamNotice = async ({ noticeText, teamName, props }) => {
  const data = {
    notice: noticeText,
  };

  console.log(props);
  await axios
    .post(SERVER_URL + "/api/v1/teams/admin/" + teamName + "/notice", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
    })
    .then((res) => {
      console.log(res);
      Swal.fire({
        title: "O",
        text: "공지사항 추가가 완료되었어요!",
        confirmButtonText: "👍",
        confirmButtonColor: "#171717",
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      props.history.push("/dashboard/" + props.match.params.teamName + "");
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
