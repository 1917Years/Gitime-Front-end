import React, { useEffect } from "react";
import { useState } from "react";
import { CreateTeam } from "../component/Modal";
import { GetTeamList } from "../utils/api/team/TeamApi";
import "../assets/styles/Progressbar.css";

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
  const { item } = props;
  console.log(props);
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
        <p class="text-sm font-medium leading-none text-gray-800">100%</p>
        <div class="w-24 h-3 bg-gray-100 rounded-full mt-2">
          <ProgressBar width={10} percent={10} color={"black"} />
        </div>
      </td>
      <td class="pl-12">
        <p class="font-medium">32/47</p>
        <p class="text-xs leading-3 text-gray-600 mt-2">
          5개의 작업이 남았습니다.
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
          <img
            class="shadow-md w-8 h-8 rounded-full"
            src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
            alt="collaborator 1"
          />
          <img
            class="shadow-md w-8 h-8 rounded-full -ml-2"
            src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
            alt="collaborator 2"
          />
          <img
            class="shadow-md w-8 h-8 rounded-full -ml-2"
            src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
            alt="collaborator 3"
          />
          <img
            class="shadow-md w-8 h-8 rounded-full -ml-2"
            src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
            alt="collaborator 4"
          />
        </div>
      </td>
    </tr>
  );
};

function TeamForm(props) {
  const [showCreateTeamForm, setShowCreateTeamForm] = useState(false);
  const [teamList, setTeamList] = useState(null);

  useEffect(() => {
    GetTeamList({ setTeamList });
  }, []);

  console.log(teamList);
  return (
    <div class="w-full sm:px-6 pt-6 h-full">
      {showCreateTeamForm ? (
        <CreateTeam
          setShowCreateTeamForm={setShowCreateTeamForm}
          props={props} // 1
        />
      ) : null}
      <div class="px-4 md:px-10 py-4 md:py-7 border rounded-tl-lg rounded-tr-lg">
        <div class="sm:flex items-center justify-between">
          <p
            tabindex="0"
            class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
          >
            팀 목록
          </p>

          <div>
            <button
              class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-gray-800 hover:bg-gray-900 focus:outline-none rounded"
              onClick={() => {
                setShowCreateTeamForm(true);
              }}
            >
              <p class="text-sm font-medium leading-none text-white">팀 생성</p>
            </button>
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
              <th class="font-normal text-left pl-4">팀명</th>
              <th class="font-normal text-left pl-12">진행도</th>
              <th class="font-normal text-left pl-12">작업률</th>
              <th class="font-normal text-left pl-20">생성일</th>
              <th class="font-normal text-left pl-16">구성 멤버</th>
            </tr>
          </thead>
          <tbody class="w-full">
            {teamList == null
              ? "불러오는중..."
              : teamList.content.map((item) => {
                  return <DropDownEditDelete item={item} props={props} />;
                })}
          </tbody>
        </table>
        <div className="flex justify-center mt-10">
          <div class="flex flex-col items-center">
            <div class="inline-flex mt-2 xs:mt-0">
              <button class="bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-l py-2 px-4">
                이전
              </button>
              <button class="bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-r border-0 border-l border-gray-700 py-2 px-4">
                다음
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamForm;
