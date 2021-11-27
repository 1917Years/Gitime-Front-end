import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import {
  AddDevelope,
  AddTeamNotice,
  getAllDevelop,
  getTeamNoticeList,
} from "../utils/api/teamAdmin/TeamAdminApi";

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
  const [developLists, setDevelopLists] = useState([]);
  const [devinput, setDevinput] = useState("");

  const onKeyPress = (event) => {
    if (event.key == "Enter") {
      if (event.currentTarget.value.length > 5) {
        Swal.fire({
          title: "X",
          text: "개발 분야는 5글자 이내로 입력해주세요!",
          confirmButtonText: "🤣",
          confirmButtonColor: "#171717",
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
      } else {
        onDevinputHandler(event);
      }
    }
  };

  const onDevinputHandler = (event) => {
    //setDevinput(event.currentTarget.value);
    console.log(devinput);
    addDevinput();
    setShowInputDev(false);
  };

  const addDevinput = () => {
    var tmp = {
      develope: devinput,
      person: [
        {
          name: "임시",
          email: "imsi@gmail.com",
        },
      ],
    };
    AddDevelope({
      input: devinput,
      teamName: props.match.params.teamName,
    });
  };

  const onNoticeTextHandler = (event) => {
    setNoticeText(event.currentTarget.value);
  };

  return (
    <div class="grid grid-cols-5 h-full min-h-screen">
      <div className="col-span-1 w-full h-full">
        <div class="bg-gray-800 dark:bg-gray-50 text-gray-50 dark:text-gray-800 rounded-r-lg w-full h-full ">
          <div class="font-test pt-5 w-full h-full xl:mr-6 2xl:pr-12 2xl:mr-12  pr-6 border-r-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 xl:pl-0 transition-transform duration-150 ease-in-out">
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

                      getTeamNoticeList({
                        teamName: props.match.params.teamName,
                        setNoticeLists: setNoticeLists,
                      });
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
                      getAllDevelop({
                        setDevelopLists: setDevelopLists,
                        teamName: props.match.params.teamName,
                      });
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
                        ? "text-sm xl:text-lg font-bold leading-tight tracking-tight text-date"
                        : "text-sm xl:text-lg font-medium leading-tight tracking-tight text-gray-600 dark:text-gray-400 "
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
            <div class="w-full h-full flex">
              <div class="w-1/12"></div>
              <div class="w-3/4 pt-5 mt-4 pl-10">
                <p class="text-2xl font-bold leading-tight tracking-tight text-black dark:text-gray-400 capitalize">
                  팀 설정 관리
                </p>
                <div class="text-sm pt-2 pb-5 text-gray-400">
                  팀의 기본 설정을 관리할 수 있어요.
                </div>
                <hr></hr>
                <div class="mt-4 pt-5 border w-full">
                  <div class="p-6 bg-opacity-5 border-gray-100 rounded-t">
                    <div class="pl-4 max-w-sm mx-auto md:w-full md:mx-0">
                      <div class="inline-flex items-center space-x-4">
                        <div class="flex flex-col w-full">
                          <div
                            tabindex="0"
                            aria-label="img"
                            role="img"
                            class="focus:outline-none w-40 h-40 p-16 bg-gray-100 rounded-md flex items-center justify-center"
                          >
                            <svg
                              width="36"
                              height="36"
                              viewBox="0 0 36 36"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.5 12H22.515"
                                stroke="#94A3B8"
                                stroke-width="2.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M25.5 6H10.5C8.01472 6 6 8.01472 6 10.5V25.5C6 27.9853 8.01472 30 10.5 30H25.5C27.9853 30 30 27.9853 30 25.5V10.5C30 8.01472 27.9853 6 25.5 6Z"
                                stroke="#94A3B8"
                                stroke-width="2.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M6 22.4999L12 16.4999C12.6841 15.8417 13.4601 15.4951 14.25 15.4951C15.0399 15.4951 15.8159 15.8417 16.5 16.4999L24 23.9999"
                                stroke="#94A3B8"
                                stroke-width="2.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M21 20.9999L22.5 19.4999C23.1841 18.8417 23.9601 18.4951 24.75 18.4951C25.5399 18.4951 26.3159 18.8417 27 19.4999L30 22.4999"
                                stroke="#94A3B8"
                                stroke-width="2.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                          <div class="text-sm text-gray-600 font-ltest">
                            추천 사이즈: 200x200, 파일 최대 크기: 1MB
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white">
                    <div class="font-test space-y-2 md:space-y-0 p-2 w-full text-gray-500 items-center">
                      <div class="ml-6 mr-6">
                        <label class=" text-sm text-gray-400">팀 이름</label>
                        <div class="w-full inline-flex">
                          <input
                            type="name"
                            class="block text-base w-full h-10 lg:h-12 mt-2 lg:mt-4 px-1 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500"
                            placeholder="팀 이름"
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <hr />

                    <hr />
                    <div class="border-b-2 font-test w-full p-4 text-right text-gray-500">
                      <button class="font-test  text-red-500 inline-flex items-center focus:outline-none mr-4">
                        <svg
                          fill="none"
                          class="w-4 mr-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        팀 삭제
                      </button>
                    </div>
                  </div>
                </div>
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
                        teamName: props.match.params.teamName,
                        props: props,
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
            <div class="w-full h-full flex">
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
                <div class=" grid grid-cols-3 mt-3">
                  {developLists.map((list) => {
                    return (
                      <div class="text-center my-8">
                        <div class="mx-auto my-auto rounded-full h-auto w-32 bg-gray-600 justify-items-center border-2 border-gray-600 border-dashed  px-2 py-2">
                          <button class="w-full px-2 py-2 font-test text-lg font-bold text-gray-100 text-center justify-items-center">
                            {list.field}
                          </button>
                        </div>
                        <div class="mt-5 text-sm font-test text-gray-500">
                          {/* {list.person.map((person) => {
                            return (
                              <div class="my-2">
                                {person.name} ( {person.email} )
                              </div>
                            );
                          })} */}

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
                          onKeyPress={(e) => onKeyPress(e)}
                          onChange={(e) => setDevinput(e.currentTarget.value)}
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
                    <div class="flex gap-2 items-center">
                      <div className="w-5/6 h-10">
                        {" "}
                        <input
                          placeholder="초대 할 이메일을 입력"
                          class="block text-base w-full h-full lg:h-12  px-1 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500"
                        ></input>
                      </div>
                      <div className="w-1/6 h-10">
                        <button
                          type="button"
                          class="w-full h-full bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base rounded-lg "
                        >
                          초대 보내기 +
                        </button>
                      </div>
                    </div>

                    <div class="grid mt-10">
                      <div class="pb-3 flex w-full items-center">
                        <div class="grid w-full h-full gap-2 mt-5">
                          {/* {map((person) => {
                            return (
                              <div class="flex w-full items-center">
                                <div class="grid gap-3">
                                  <img
                                    class="rounded-full border border-gray-100 shadow-sm"
                                    src="https://randomuser.me/portraits/men/40.jpg"
                                    alt="user image"
                                  />
                                  <div class="text-center text-2xl text-purple-400 w-full">
                                    박상호
                                  </div>
                                </div>
                                <div class="grid w-7/12 h-1/3 mx-auto text-2xl text-gray-500 place-items-center">
                                  <p class="truncate">
                                    서버 관리 및 백앤드 기능 구현
                                  </p>
                                </div>
                                <div class=" grid w-1/4 h-1/3 font-thin text-2xl text-purple-300 place-items-center">
                                  Leader
                                </div>
                                <div class="grid w-1/12 h-1/3  text-gray-600 ">
                                  X
                                </div>
                              </div>
                            );
                          })} */}
                          <div class="flex w-full items-center">
                            <div class="grid w-1/12 gap-3">
                              <img
                                class="rounded-full border border-gray-100 shadow-sm"
                                src="https://randomuser.me/portraits/men/40.jpg"
                                alt="user image"
                              />
                              <div class="text-center text-2xl text-purple-400 w-full">
                                박상호
                              </div>
                            </div>
                            <div></div>
                            <div class="grid w-1/3 h-1/3 mx-auto text-2xl text-gray-500 place-items-center">
                              <p class="truncate">
                                서버 관리 및 백앤드 기능 구현
                              </p>
                            </div>
                            <div class=" grid w-1/4 h-1/3 font-thin text-2xl text-purple-300">
                              Leader
                            </div>
                            <div class="grid w-1/12 h-1/3  text-gray-600 ">
                              X
                            </div>
                          </div>
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
