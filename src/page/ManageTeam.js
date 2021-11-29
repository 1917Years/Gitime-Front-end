import React, { useState } from "react";
import Swal from "sweetalert2";

import {
  DeleteDevelope,
  AddDevelope,
  AddTeamNotice,
  getAllDevelop,
  getTeamNoticeList,
} from "../utils/api/teamAdmin/TeamAdminApi";

import { sample_member } from "../component/test/sample_data"; // 나중에 지울 것

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
  const [showNowClick8, setShowNowClick8] = useState(false);
  const [showInputDev, setShowInputDev] = useState(false);
  const [noticeLists, setNoticeLists] = useState([]);
  const [noticeText, setNoticeText] = useState(null);
  const [developLists, setDevelopLists] = useState([
    { field: "abcd" },
    { field: "dkfdk" },
  ]);
  const [devinput, setDevinput] = useState("");
  const [email, setEmail] = useState("");

  const onDevdeleteHandler = (field) => {
    console.log(field);
    DeleteDevelope({
      input: field,
      teamName: props.match.params.teamName,
    });
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
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
    addDevinput();
    setShowInputDev(false);
  };

  const addDevinput = () => {
    AddDevelope({
      input: devinput,
      teamName: props.match.params.teamName,
    });
  };

  const onNoticeTextHandler = (event) => {
    setNoticeText(event.currentTarget.value);
  };

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
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
                      setShowNowClick8(false);
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
                      setShowNowClick8(false);
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
                      setShowNowClick8(false);
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
                      setShowNowClick8(false);
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
                      setShowNowClick8(false);
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
                      showNowClick8
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
                      setShowNowClick7(false);
                      setShowNowClick8(true);
                    }}
                  >
                    팀원 목록
                  </button>
                </div>
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
                      setShowNowClick8(false);
                    }}
                  >
                    팀원 초대
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
                      setShowNowClick8(false);
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
                <div class="mt-4 pt-5 w-full">
                  <div class="p-2 bg-opacity-5 border-gray-100 rounded-t">
                    <div class="grid grid-cols-2 gap-6">
                      <div>
                        <label class="ml-6 mr-6 text-sm text-gray-400">
                          대표 이미지
                        </label>
                        <div class="pl-8 mt-4 md:mx-0">
                          <div class="items-center space-x-4 ">
                            <div class="flex w-full items-end ">
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
                              <div class="ml-2 text-sm text-gray-400 font-ltest">
                                추천 사이즈: 200x200, 파일 최대 크기: 1MB
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="bg-white col-span-1">
                        <div class="font-test space-y-2 md:space-y-0 p-2 w-full text-gray-500 items-center">
                          <div class="ml-6 mr-6 ">
                            <div>
                              <label class="text-sm text-gray-400">
                                팀 이름
                              </label>
                              <div class="w-full">
                                <input class="block text-base bg-white w-full h-10 lg:h-12 mt-2 lg:mt-4 px-1 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500" />
                              </div>
                            </div>
                            <div class="mt-4">
                              <label class="text-sm text-gray-400">
                                개발 언어
                              </label>
                              <div
                                tabindex="0"
                                class="col-span-1 block text-base bg-white w-full h-10 lg:h-12 mt-2 lg:mt-4 px-1 lg:px-6 rounded-lg outline-none focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white border rounded border-gray-400 py-2.5"
                              >
                                <select
                                  aria-label="select an option"
                                  class="text-sm text-gray-500 w-full focus:outline-none"
                                >
                                  <option selected="" disabled="" value="">
                                    개발 언어 선택
                                  </option>
                                  <option>JAVA</option>
                                  <option>C</option>
                                  <option>C++</option>
                                  <option>Python</option>
                                  <option>Spring</option>
                                  <option>React</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4 font-test space-y-2 md:space-y-0 p-2 w-full text-gray-500 items-center">
                      <div class="ml-6 mr-6">
                        <label class=" text-sm text-gray-400">
                          깃허브 연동 주소
                        </label>
                        <div class="w-full px-4 mt-4 text-gray-400 bg-gray-50 block resize-none overflow-y-auto py-3 rounded-lg outline-none transition border border-gray-400">
                          https://github.com/Hodu-BackSpace/SYNC-Software-Contest
                        </div>
                      </div>
                    </div>
                    <div class="mt-4 font-test space-y-2 md:space-y-0 p-2 w-full text-gray-500 items-center">
                      <div class="ml-6 mr-6">
                        <label class=" text-sm text-gray-400">팀 설명</label>
                        <div class="w-full inline-flex">
                          <textarea class="block resize-none overflow-y-auto py-3 h-24 text-base bg-white w-full mt-2 lg:mt-4 px-1 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500" />
                        </div>
                      </div>
                    </div>
                    <div class="font-test w-full p-6 text-right text-gray-500">
                      <button class="text-red-400">팀 삭제하기</button>
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
                <div class="flex">
                  <div class="font-bold mt-4 pt-5 text-gray-500 text-lg pb-5 flex-grow">
                    개발 분야 관리하기
                  </div>
                </div>
                <div class=" grid grid-cols-3 mt-3">
                  {developLists.map((list) => {
                    return (
                      <div class="text-center my-8">
                        <div class="mx-auto my-auto rounded-full h-24 w-24 bg-gray-600 border-2 border-gray-600 border-dashed  px-2 py-2 text-center">
                          <button
                            class="relative bg-gray-200 w-6 h-6 rounded-full text-center ml-14 bottom-3"
                            value={list.field}
                            onClick={(e) => {
                              onDevdeleteHandler(e.currentTarget.value);
                            }}
                          >
                            -
                          </button>
                          <div class="h-auto relative align-middle px-2 font-test text-lg font-bold text-gray-100 text-center">
                            {list.field}
                          </div>
                        </div>
                        <div class="mt-5 text-sm font-test text-gray-500">
                          {/* {.map((person) => {
                            return (
                              <div class="my-2">
                                {person.name} ( {person.email} )
                              </div>
                            );
                          })} */}
                        </div>
                      </div>
                    );
                  })}
                  <div class="my-8">
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
                  팀원 초대
                </p>
                <div class="text-sm pt-2 pb-5 text-gray-400">
                  <p>새로운 팀원에게 초대 메일을 보냅니다.</p>
                </div>
                <hr />
                <div class="flex">
                  <div class="font-bold mt-4 pt-5 text-gray-500 text-lg pb-5 flex-grow">
                    팀원 초대하기
                  </div>
                </div>
                <div class="font-bold mt-4 pt-2 text-lg">
                  <div>
                    <div class="flex gap-2 items-center h-10">
                      <div className="w-5/6 h-full">
                        {" "}
                        <input
                          id="email"
                          value={email}
                          onChange={onEmailHandler}
                          placeholder="초대 할 이메일을 입력"
                          class="block text-base w-full h-full px-1 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500"
                        ></input>
                      </div>
                      <div className="w-1/6 h-full">
                        <button
                          type="button"
                          onClick={() => {
                            console.log(email);
                          }}
                          class="w-full h-full bg-gray-400 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base rounded-lg "
                        >
                          초대 보내기
                        </button>
                      </div>
                    </div>

                    <div class="grid mt-5 mx-5">
                      <div class="pb-3 flex w-full items-center">
                        <div class="grid w-full h-full gap-2 mt-5">
                          {sample_member.map((member) => {
                            return (
                              <div class="flex w-full items-center">
                                <div class="grid w-1/12 gap-3">
                                  <img
                                    class="rounded-full border border-gray-100 shadow-sm"
                                    src="https://randomuser.me/portraits/men/40.jpg"
                                    alt="user image"
                                  />
                                </div>
                                <div class="grid w-7/12 h-4/5 mx-auto text-lg text-gray-500 place-items-start ml-3 ">
                                  <div>
                                    <p class="text-left">{member.username}</p>
                                  </div>
                                  <div>
                                    <p class="truncate text-left text-base text-gray-400">
                                      {member.email}
                                    </p>
                                  </div>
                                </div>
                                <div class=" grid w-1/4 h-1/3 font-thin text-lg text-purple-300 place-items-center">
                                  {member.state_accept}
                                </div>
                                <div class="grid w-1/12 h-1/3  text-gray-600 ">
                                  <button
                                    onClick={() => {
                                      console.log("removed " + member.username);
                                    }}
                                  >
                                    X
                                  </button>
                                </div>
                              </div>
                            );
                          })}
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
