import React, { useEffect } from "react";
import { useState } from "react";
import { CreateTeam } from "../component/Modal";
import { GetAcceptCode, GetTeamList } from "../utils/api/team/TeamApi";
import "../assets/styles/Progressbar.css";
import { GetTodoList } from "../utils/api/dashboard/DashboardApi";
var ProgressBar = ({ width, percent, color }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(percent * width);
  });

  return (
    <div>
      <div className="progress-div" style={{ width: width }}>
        <div
          style={{ width: `${value}px`, backgroundColor: color }}
          className="progress"
        />
      </div>
    </div>
  );
};
const DropDownEditDelete = (props) => {
  const { item, data } = props;

  console.log(data);
  return (
    <tr
      tabindex="0"
      class="focus:outline-none h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
    >
      <td
        class="pl-4 cursor-pointer"
        onClick={() => {
          props.props.history.push("/dashboard/" + item.teamName);
        }}
      >
        <div class="flex items-center">
          <div class="w-10 h-10">
            <img
              class="w-full h-full"
              src="https://cdn.tuk.dev/assets/templates/olympus/projects.png"
              alt="UX Design and Visual Strategy"
            />
          </div>
          <div class="pl-4">
            <p class="font-medium">{item.teamName}</p>
            <p class="text-xs leading-3 text-gray-600 pt-2">
              {item.teamDescription}
            </p>
          </div>
        </div>
      </td>
      <td class="pl-12">
        <p class="text-sm font-medium leading-none text-gray-800">
          {data.progress == "NaN" ? "0%" : Math.floor(data.progress) + "%"}
        </p>
        <div class="w-24 h-3 bg-gray-100 rounded-full mt-2">
          <ProgressBar
            width={10}
            percent={data.progress / 10}
            color={"black"}
          />
        </div>
      </td>
      <td class="pl-12">
        <p class="font-medium">
          {data.working[0]}/{data.working[1]}
        </p>
        <p class="text-xs leading-3 text-gray-600 mt-2">
          {data.working[1] - data.working[0]}?????? ????????? ???????????????.
        </p>
      </td>
      <td class="pl-20">
        <p class="font-medium">
          {item.teamCreatedAt[0]}.{item.teamCreatedAt[1]}.
          {item.teamCreatedAt[2]}
        </p>
      </td>
      <td class="pl-16">
        <div class="flex items-center">
          <p class="font-medium">{data.teamMemberCount} ???</p>
        </div>
      </td>
    </tr>
  );
};

function TeamForm(props) {
  const [showCreateTeamForm, setShowCreateTeamForm] = useState(false);
  const [teamList, setTeamList] = useState(null);
  const [update, setUpdate] = useState(true);
  const [page, setPage] = useState(0);
  const [acceptCode, setAcceptCode] = useState(null);
  const [isCodeEmpty, setIsCodeEmpty] = useState(false);
  const [errorAcceptCode, setErrorAcceptCode] = useState(false);
  const [completeAcceptCode, setCompleteAcceptCode] = useState(false);
  const [teamAdditionalInfo, setTeamAdditionalInfo] = useState(null);
  var tempList = [];

  const codeButtonHandler = () => {
    if (acceptCode == null || acceptCode == "") {
      setErrorAcceptCode(false);
      setIsCodeEmpty(true);
    } else {
      setIsCodeEmpty(false);
      GetAcceptCode({
        acceptCode: acceptCode,
        setErrorAcceptCode: setErrorAcceptCode,
        setCompleteAcceptCode: setCompleteAcceptCode,
        setUpdate: setUpdate,
      });
    }
  };

  useEffect(() => {
    GetTeamList({ setTeamList, page, setTeamAdditionalInfo });
  }, []);

  useEffect(() => {
    if (update) {
      GetTeamList({ setTeamList, page, setTeamAdditionalInfo });
    }
    setUpdate(false);
  });

  return (
    <div class="font-test w-full sm:px-6 pt-6 h-full">
      {showCreateTeamForm ? (
        <CreateTeam
          setShowCreateTeamForm={setShowCreateTeamForm}
          props={props} // 1
          setUpdate={setUpdate}
        />
      ) : null}
      <div class="px-4 md:px-10 py-4 md:py-7 border rounded-tl-lg rounded-tr-lg">
        <div class="sm:flex items-center justify-between">
          <p
            tabindex="0"
            class="font-test focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
          >
            ??? ??????
          </p>

          <div class="">
            <input
              id="sendMessage"
              type="text"
              placeholder="?????? ????????? ??????????????????."
              class="font-rtest border border-opacity-70 inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-2 bg-gray-white focus:outline-none rounded border-scroll transition duration-500 px-1 mt-6"
              onChange={(e) => {
                setAcceptCode(e.target.value);
              }}
            />

            <button
              class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-gray-800 hover:bg-gray-900 focus:outline-none rounded"
              onClick={() => {
                document.getElementById("sendMessage").value = "";
                codeButtonHandler();
              }}
            >
              <p class="font-test text-sm font-medium leading-none text-white">
                ?????? ?????? ??????
              </p>
            </button>
            <button
              class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-gray-800 hover:bg-gray-900 focus:outline-none rounded"
              onClick={() => {
                setShowCreateTeamForm(true);
              }}
            >
              <p class="font-test text-sm font-medium leading-none text-white">
                ??? ??????
              </p>
            </button>
            {isCodeEmpty ? (
              <div class="font-rtest mt-1 ml-4 text-red-500 text-sm">
                ?????? ????????? ????????? ??? ????????? ??????????????????.
              </div>
            ) : null}
            {errorAcceptCode ? (
              <div class="font-rtest mt-1 ml-4 text-red-500 text-sm">
                ???????????? ????????? ????????? ???????????????.
              </div>
            ) : null}
            {completeAcceptCode ? (
              <div class="font-rtest mt-1 ml-4 text-green-500 text-sm">
                ??? ????????? ?????????????????????!
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div class="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto h-full">
        <table class="w-full whitespace-nowrap">
          <thead>
            <tr
              tabindex="0"
              class="focus:outline-none h-16 w-full text-sm leading-none text-gray-800"
            >
              <th class="font-normal text-left pl-4">??????</th>
              <th class="font-normal text-left pl-12">?????????</th>
              <th class="font-normal text-left pl-12">?????????</th>
              <th class="font-normal text-left pl-20">?????????</th>
              <th class="font-normal text-left pl-16">?????? ??????</th>
            </tr>
          </thead>
          <tbody class="w-full">
            {teamList == null
              ? "???????????? ???..."
              : teamList.content.map((item, idx) => {
                  return (
                    <DropDownEditDelete
                      item={item}
                      data={teamAdditionalInfo[item.teamName]}
                      props={props}
                    />
                  );
                })}
          </tbody>
        </table>
        <div className="flex justify-center mt-10">
          <div class="flex flex-col items-center">
            <div class="inline-flex mt-2 xs:mt-0">
              <button
                class="bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-l py-2 px-4"
                onClick={() => {
                  if (page > 0) {
                    setPage(page - 1);
                    setUpdate(true);
                  }
                }}
              >
                ??????
              </button>
              {teamList == null ? null : teamList.last == false ? (
                <button
                  class="disabled:opacity-60 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-r border-0 border-l border-gray-700 py-2 px-4"
                  onClick={() => {
                    if (teamList.last == false) {
                      setPage(page + 1);
                      setUpdate(true);
                    }
                  }}
                >
                  {" "}
                  ??????
                </button>
              ) : (
                <button
                  disabled
                  class="disabled:opacity-60 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-r border-0 border-l border-gray-700 py-2 px-4"
                  onClick={() => {
                    if (teamList.last == false) {
                      setPage(page + 1);
                      setUpdate(true);
                    }
                  }}
                >
                  {" "}
                  ??????
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamForm;
