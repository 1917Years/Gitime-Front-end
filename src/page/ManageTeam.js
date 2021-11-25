import React, { useEffect, useRef, useState } from "react";
import {
  AddTeamNotice,
  getTeamNoticeList,
} from "../utils/api/teamAdmin/TeamAdminApi";

var developeList = [
  {
    develope: "Front-end",
    person: [
      {
        name: "이지원",
        email: "aaa@gmail.com",
      },
      {
        name: "신유진",
        email: "bbb@gmail.com",
      },
      {
        name: "김혁준",
        email: "ccc@gmail.com",
      },
    ],
  },
  {
    develope: "Back-End",
    person: [
      {
        name: "박상호",
        email: "ddd@gmail.com",
      },
      {
        name: "최영찬",
        email: "eee@gmail.com",
      },
    ],
  },
];

function ManageTeam(props) {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const [showNowClick1, setShowNowClick1] = useState(false);
  const [showNowClick2, setShowNowClick2] = useState(false);
  const [showNowClick3, setShowNowClick3] = useState(false);
  const [showNowClick4, setShowNowClick4] = useState(false);
  const [showNowClick5, setShowNowClick5] = useState(false);
  const [showNowClick6, setShowNowClick6] = useState(false);
  const [showNowClick7, setShowNowClick7] = useState(false);
  const [addMember, setAddMember] = useState(false);
  const [showInputDev, setShowInputDev] = useState(false);
  const [noticeLists, setNoticeLists] = useState([]);
  const [noticeText, setNoticeText] = useState(null);

  const onNoticeTextHandler = (event) => {
    setNoticeText(event.currentTarget.value);
  };

  if (showNowClick2) {
    if (noticeLists.length === 0) {
      getTeamNoticeList({
        teamName: props.match.params.teamName,
        setNoticeLists: setNoticeLists,
      });
    }
  }

  return (
    <div class="grid grid-cols-5 h-screen">
      <div className="col-span-1 w-full">
        <div class="bg-gray-800 dark:bg-gray-50 text-gray-50 dark:text-gray-800 rounded-r-lg w-full h-8 ">
          <div class="font-test pt-5 h-screen w-full xl:w-full 2xl:w-full xl:mr-6 2xl:pr-12 2xl:mr-12 pr-6 border-r-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 xl:pl-0 transition-transform duration-150 ease-in-out">
            <div class="mt-4 pl-6 2xl:pl-12">
              <p class="text-2xl font-bold leading-tight tracking-tight text-gray-600 dark:text-gray-400 capitalize">
                Team 델리만쥬
              </p>
              <div
                class="mt-10 cursor-pointer flex w-full justify-between pb-3 border-b-2 border-gray-200 dark:border-gray-800"
                onClick={() => {
                  setShowSubMenu(!showSubMenu);
                }}
              >
                <p class="text-sm xl:text-lg font-bold leading-tight tracking-tight text-gray-600 dark:text-gray-400 capitalize">
                  팀 관리
                </p>
                {showSubMenu ? (
                  <button
                    class="focus:outline-none text-gray-800"
                    onClick={() => {
                      setShowSubMenu(!showSubMenu);
                    }}
                  >
                    ∧
                  </button>
                ) : (
                  <button
                    class="focus:outline-none text-gray-800"
                    onClick={() => {
                      setShowSubMenu(!showSubMenu);
                    }}
                  >
                    ∨
                  </button>
                )}
              </div>
              <div class={showSubMenu ? null : "hidden"}>
                <div class="pl-2 block">
                  <div class="h-6"></div>
                  <button
                    class={
                      showNowClick1
                        ? "text-sm xl:text-lg font-bold leading-tight tracking-tight text-date  capitalize"
                        : "text-sm xl:text-lg font-medium leading-tight tracking-tight  text-gray-600 dark:text-gray-400 capitalize"
                    }
                    onClick={() => {
                      setShowNowClick1(true);
                      setShowNowClick2(false);
                      setShowNowClick3(false);
                      setShowNowClick4(false);
                      setShowNowClick5(false);
                      setShowNowClick6(false);
                      setShowNowClick7(false);
                    }}
                  >
                    팀 설정 관리
                  </button>
                </div>

                <div class="pl-2 block">
                  <div class="h-6"></div>
                  <button
                    class={
                      showNowClick2
                        ? "text-sm xl:text-lg font-bold leading-tight tracking-tight text-date capitalize"
                        : "text-sm xl:text-lg font-medium leading-tight tracking-tight text-gray-600 dark:text-gray-400 capitalize"
                    }
                    onClick={() => {
                      setShowNowClick1(false);
                      setShowNowClick2(true);
                      setShowNowClick3(false);
                      setShowNowClick4(false);
                      setShowNowClick5(false);
                      setShowNowClick6(false);
                      setShowNowClick7(false);
                    }}
                  >
                    공지사항 관리
                  </button>
                </div>

                <div class="pl-2 block">
                  <div class="h-6"></div>
                  <button
                    class={
                      showNowClick3
                        ? "text-sm xl:text-lg font-bold leading-tight tracking-tight text-date  capitalize"
                        : "text-sm xl:text-lg font-medium leading-tight tracking-tight  text-gray-600  dark:text-gray-400 capitalize"
                    }
                    onClick={() => {
                      setShowNowClick1(false);
                      setShowNowClick2(false);
                      setShowNowClick3(true);
                      setShowNowClick4(false);
                      setShowNowClick5(false);
                      setShowNowClick6(false);
                      setShowNowClick7(false);
                    }}
                  >
                    깃허브 연동 관리
                  </button>
                </div>
                <div class="pl-2 block">
                  <div class="h-6"></div>
                  <button
                    class={
                      showNowClick4
                        ? "text-sm xl:text-lg font-bold leading-tight tracking-tight text-date  capitalize"
                        : "text-sm xl:text-lg font-medium leading-tight tracking-tight  text-gray-600 dark:text-gray-400 capitalize"
                    }
                    onClick={() => {
                      setShowNowClick1(false);
                      setShowNowClick2(false);
                      setShowNowClick3(false);
                      setShowNowClick4(true);
                      setShowNowClick5(false);
                      setShowNowClick6(false);
                      setShowNowClick7(false);
                    }}
                  >
                    개발 분야 관리
                  </button>
                </div>
                <div class="pl-2 block">
                  <div class="h-6"></div>
                  <button
                    class={
                      showNowClick5
                        ? "text-sm xl:text-lg font-bold leading-tight tracking-tight text-date capitalize"
                        : "text-sm xl:text-lg font-medium leading-tight tracking-tight text-gray-600 dark:text-gray-400 capitalize"
                    }
                    onClick={() => {
                      setShowNowClick1(false);
                      setShowNowClick2(false);
                      setShowNowClick3(false);
                      setShowNowClick4(false);
                      setShowNowClick5(true);
                      setShowNowClick6(false);
                      setShowNowClick7(false);
                    }}
                  >
                    서버 관리
                  </button>
                </div>
              </div>

              <div
                class="mt-10 cursor-pointer flex w-full justify-between pb-3 border-b-2 border-gray-200 dark:border-gray-800"
                onClick={() => {
                  setShowSubMenu2(!showSubMenu2);
                }}
              >
                <p class="text-sm xl:text-lg font-bold leading-tight tracking-tight text-gray-600 dark:text-gray-400 capitalize">
                  팀원 관리
                </p>
                {showSubMenu2 ? (
                  <button
                    class="focus:outline-none text-gray-800"
                    onClick={() => {
                      setShowSubMenu2(!showSubMenu2);
                    }}
                  >
                    ∧
                  </button>
                ) : (
                  <button
                    class="focus:outline-none text-gray-800"
                    onClick={() => {
                      setShowSubMenu2(!showSubMenu2);
                    }}
                  >
                    ∨
                  </button>
                )}
              </div>

              <div class={showSubMenu2 ? null : "hidden"}>
                <div class="pl-2 block">
                  <div class="h-6"></div>
                  <button
                    class={
                      showNowClick6
                        ? "text-sm xl:text-lg font-bold leading-tight tracking-tight text-date  capitalize"
                        : "text-sm xl:text-lg font-medium leading-tight tracking-tight  text-gray-600  dark:text-gray-400 capitalize"
                    }
                    onClick={() => {
                      setShowNowClick1(false);
                      setShowNowClick2(false);
                      setShowNowClick3(false);
                      setShowNowClick4(false);
                      setShowNowClick5(false);
                      setShowNowClick6(true);
                      setShowNowClick7(false);
                    }}
                  >
                    팀원 초대 및 추방
                  </button>
                </div>
                <div class="pl-2 block">
                  <div class="h-6"></div>
                  <button
                    class={
                      showNowClick7
                        ? "text-sm xl:text-lg font-bold leading-tight tracking-tight text-date  capitalize"
                        : "text-sm xl:text-lg font-medium leading-tight tracking-tight  text-gray-600  dark:text-gray-400 capitalize"
                    }
                    onClick={() => {
                      setShowNowClick1(false);
                      setShowNowClick2(false);
                      setShowNowClick3(false);
                      setShowNowClick4(false);
                      setShowNowClick5(false);
                      setShowNowClick6(false);
                      setShowNowClick7(true);
                    }}
                  >
                    팀원 역할 설정
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-4 w-full font-test">
        <div class="w-full h-full">
          {showNowClick1 === true && (
            <div class="w-full h-full">
              <div class="pt-5 mt-4 pl-10">
                <p class="text-2xl font-bold leading-tight tracking-tight text-gray-600 dark:text-gray-400 capitalize">
                  팀 설정 관리
                </p>
              </div>
            </div>
          )}
          {showNowClick2 === true && (
            <div class="w-full h-full flex">
              <div class="w-1/12"></div>
              <div class="w-3/4 pt-5 pl-10 mt-4">
                <p class="text-2xl font-bold leading-tight tracking-tight text-black dark:text-gray-400 capitalize">
                  공지사항 관리
                </p>
                <div class="text-sm pt-2 pb-5 text-gray-400">
                  대시보드 상단에 띄워지는 공지사항을 관리할 수 있어요.
                </div>
                <hr></hr>
                <div class="font-bold mt-4 pt-5 text-gray-500 text-lg">
                  공지 추가하기
                </div>
                <div class="font-test flex items-center px-6 space-x-2 lg:space-x-4 py-2 text-blueGray-500 leading-relaxed">
                  <input
                    placeholder="📢추가할 공지사항을 입력해주세요!"
                    class="block text-base w-full h-10 lg:h-12 mt-2 lg:mt-4 px-1 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500"
                    onChange={onNoticeTextHandler}
                  ></input>
                  <button
                    class="font-test w-1/3 float-right block text-white text-base bg-gray-400 h-10 lg:h-12 mt-2 lg:mt-4 px-4 lg:px-7 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500"
                    onClick={() => {
                      AddTeamNotice({
                        noticeText: noticeText,
                        teamName: "testTeam",
                      });
                    }}
                  >
                    추가
                  </button>
                </div>
                <div class="font-bold mt-7 mb-5 pt-5 text-gray-500 text-lg">
                  로그 보기 (최대 5개까지 출력됩니다!)
                </div>
                {noticeLists.map((list) => {
                  return (
                    <div class="border-b border-dashed border-blueGray-200 my-5 grid grid-cols-5 w-full">
                      <div class="flex col-span-4 mx-5 py-3">
                        "{list.notice}"
                        <div class="pt-1 ml-2 text-sm text-gray-500">
                          라고 모두에게 알렸어요!
                        </div>
                      </div>
                      <div class="py-3 col-span-1 float-right text-right pr-10 text-sm text-date text-opacity-70">
                        {list.date}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {showNowClick3 === true && (
            <div class="w-full h-full">
              <div class="w-1/12"></div>
              <div class="w-3/4 pt-5 pl-10 mt-4">
                <p class="text-2xl font-bold leading-tight tracking-tight text-gray-600 dark:text-gray-400 capitalize">
                  깃허브 연동 관리
                </p>
              </div>
            </div>
          )}
          {showNowClick4 === true && (
            <div class="w-full h-full flex">
              <div class="w-1/12"></div>
              <div class="w-3/4 pt-5 pl-10 mt-4">
                <p class="text-2xl font-bold leading-tight tracking-tight text-black dark:text-gray-400 capitalize">
                  개발 분야 관리
                </p>
                <div class="text-sm pt-2 pb-5 text-gray-400">
                  팀원의 개발 분야를 설정할 수 있어요. 이는 Progress와
                  연동됩니다.
                </div>
                <hr></hr>
                <div class="font-bold mt-4 pt-5 text-gray-500 text-lg pb-5">
                  개발 분야 추가하기
                </div>
                <div class="w-full grid grid-cols-5 mt-5">
                  {developeList.map((list) => {
                    return (
                      <div class="text-center">
                        <div class="mx-auto my-auto rounded-full h-auto w-24 bg-gray-600 justify-items-center border-2 border-gray-600 border-dashed  px-2 py-2">
                          <button class="w-full px-2 py-2 font-test text-lg font-bold text-gray-100 text-center justify-items-center">
                            {list.develope}
                          </button>
                        </div>
                        <div class="mt-5 text-sm font-test text-gray-500">
                          {list.person.map((person) => {
                            return (
                              <div class="my-2">
                                {person.name} ( {person.email} )
                              </div>
                            );
                          })}

                          <div>
                            {addMember ? (
                              <input
                                class="w-20 rounded-lg text-sm p-1 bg-gray-100"
                                placeholder="🔎검색"
                              ></input>
                            ) : (
                              <button
                                class="rounded-lg text-sm p-1 bg-gray-100"
                                onClick={() => {
                                  setAddMember(true);
                                }}
                              >
                                + 팀원 추가
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div>
                    {showInputDev ? (
                      <div class="mx-auto rounded-full h-24 w-24 bg-gray-50 justify-items-center border-2 border-gray-400 border-dashed place-content-center px-2 py-2">
                        <input
                          class="relative rounded-full w-full h-full font-test text-xl bg-gray-50 justify-items-center m-auto text-center 
                          text-base outline-none transition focus:bg-gray-50"
                          placeholder="입력"
                        ></input>
                      </div>
                    ) : (
                      <div class="mx-auto rounded-full h-24 w-24 bg-gray-50 justify-items-center border-2 border-gray-400 border-dashed place-content-center px-2 py-2">
                        <button
                          class="w-full h-full font-test text-3xl text-gray-500"
                          onClick={() => setShowInputDev(true)}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {showNowClick5 === true && (
            <div class="w-full h-full">
              <div class="pt-5 mt-4 pl-10">
                <p class="text-2xl font-bold leading-tight tracking-tight text-gray-600 dark:text-gray-400 capitalize">
                  서버 관리
                </p>
              </div>
            </div>
          )}
          {showNowClick6 === true && (
            <div class="w-full h-full flex">
              <div class="w-1/12"></div>
              <div class="w-3/4 pt-5 pl-10 mt-4">
                <p class="text-2xl font-bold leading-tight tracking-tight text-black dark:text-gray-400">
                  팀원 초대 및 추방
                </p>
                <div class="text-sm pt-2 pb-5 text-gray-400">
                  <p>팀원 추가 및 삭제 작업을 수행합니다.</p>
                </div>
                <div class="font-bold mt-4 pt-5 text-lg">
                  <div>
                    <div className="w-1/6">
                      <button
                        type="button"
                        class="w-full h-10 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base rounded-lg "
                      >
                        + 초대 보내기
                      </button>
                    </div>
                    <div>
                      <div class="pb-3 flex w-full">
                        <div class="flex w-full place-content-center content-center">
                          <div class="relative mt-5 mb-2 ml-5 w-1/12 h-12">
                            <img
                              class="rounded-full border border-gray-100 shadow-sm"
                              src="https://randomuser.me/portraits/men/40.jpg"
                              alt="user image"
                            />
                            <div class="text-sm text-purple-400">박상호</div>
                          </div>
                          <div class="w-7/12 h-1/3 mx-auto text-sm text-gray-500 ">
                            서버 관리 및 백앤드 기능 구현
                          </div>
                          <div class="w-1/4 h-1/3 font-thin text-xs text-purple-300">
                            Leader
                          </div>
                          <div class="w-1/12 h-1/3  text-gray-600 ">X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {showNowClick7 === true && (
            <div class="w-full h-full">
              <div class="pt-5 mt-4 pl-10">
                <p class="text-2xl font-bold leading-tight tracking-tight text-gray-600 dark:text-gray-400 capitalize">
                  팀원 역할 설정
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManageTeam;
