import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // css import
import { ko } from "date-fns/esm/locale";
import { GetGitRepoList, PostCreateTeam } from "../utils/api/team/TeamApi";
import { PostCreateTodo } from "../utils/api/dashboard/DashboardApi";

export const Board = (props) => {
  const { setShowModal4, dataLists3 } = props;
  const [writing, setWriting] = useState(false);
  return (
    <div class="justify-center w-full items-center flex flex-col overflow-x-hidden overflow-y-auto fixed  bg-black bg-opacity-25  inset-0 z-50 outline-none focus:outline-none">
      <div class="relative w-1/2 h-2/3 my-5 mx-auto max-w-3xl">
        <div
          class="border-0 h-full rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none
        "
        >
          <div class="flex items-start justify-between px-6 py-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 class="text-2xl font-sbtest py-1">자료실</h3>
            <button
              className="ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal4(false)}
            >
              <span className="bg-transparen text-black text-opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                x
              </span>
            </button>
          </div>
          {writing ? (
            <div class="mx-5 mb-5">
              <input
                placeholder="제목"
                class="block text-base w-full h-10 lg:h-12 mt-2 lg:mt-4 px-1 lg:px-6 outline-none transition border border-dashed hover:border-primary-500 border-gray-400 bg-white focus:border-primary-500"
              ></input>
              <input
                placeholder="내용 입력"
                class="block text-base w-full h-full px-1 lg:px-6 outline-none transition border-b border-l border-r border-dashed hover:border-primary-500 border-gray-400 bg-gray-50 focus:border-primary-500"
              ></input>
            </div>
          ) : (
            <>
              <div class="mx-5 mb-5">
                <button
                  class="block text-base w-full h-10 lg:h-12 mt-2 lg:mt-4 px-1 lg:px-6 rounded-lg outline-none transition border border-dashed hover:border-primary-500 border-gray-400 bg-gray-50 focus:border-primary-500"
                  onClick={() => setWriting(true)}
                >
                  글 작성하기
                </button>
              </div>
              <div class="mx-2 overflow-y-scroll">
                {dataLists3.map((list) => {
                  return (
                    <div class="justify-between border-b border-dashed border-blueGray-200 py-4 mx-5 grid grid-cols-8 grid-rows-2 gap-4">
                      <div class="col-start-1 row-start-1 col-span-1 row-span-2 rounded-lg bg-black font-sbtest">
                        <div class="my-6 font-sbtest text-center text-develbg">
                          {list.file}
                        </div>
                      </div>
                      <h3 class="col-span-6  row-start-1 lg:text-lg font-ltest text-fontColor-900 ">
                        {list.title}
                      </h3>

                      <h3 class="col-span-4 col-start-2 row-start-2 lg:text-sm font-ltest text-gray-500 text-fontColor-900 ">
                        {list.data}
                      </h3>
                      <div class="place-content-end my-0 float-right justify-self-end col-span-2 col-start-6 row-start-2 row-end-2 flex pl-12 text-right text-sm font-ltest text-date">
                        <div class="">{list.date}</div>
                        <div class="pl-2">{list.time}</div>
                      </div>

                      <div class="col-span-1 col-start-8 text-gray-600 row-start-1 row-end-1 text-right font-ltest text-base">
                        {list.username}
                      </div>
                      <div class="place-content-end my-0 col-span-1 col-start-8 text-gray-500 row-start-2 row-end-2 text-right font-ltest text-sm text-date">
                        👍{list.like} 💬{list.comment}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export const AddingToDo = (props) => {
  const {
    setShowModal,
    endCheck,
    checkedItemHandler,
    checkedList,
    changeComplete,
    setNextTodo,
    nextTodo,
    todoDate,
    setTodoDate,
    ExampleCustomInput,
  } = props;
  return (
    <>
      <div class="justify-center w-full items-center flex flex-col overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div class="relative w-1/3 my-5 mx-auto max-w-3xl">
          {/*content*/}
          <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div class="flex items-start justify-between px-6 py-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 class="text-2xl font-sbtest py-1">목표 관리하기</h3>
              <button
                className="ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparen text-black text-opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>
            {/*body*/}
            <div class="relative w-full mx-auto max-w-3xl">
              <div class="font-test flex items-center px-6 space-x-2 lg:space-x-4 py-2 text-blueGray-500 leading-relaxed">
                {nextTodo ? (
                  <>
                    <div class="flex-col w-full">
                      <div class="w-auto font-ltest text-gray-600">
                        목표 날짜와 개발 분야를 선택해주세요.
                      </div>
                      <div class="flex mt-3 w-full">
                        <DatePicker
                          closeOnScroll={(e) => e.target === document}
                          selected={todoDate}
                          locale="ko"
                          dateFormat="yyyy년 MM월 dd일"
                          minDate={new Date()}
                          popperModifiers={{
                            preventOverflow: { enabled: true },
                          }}
                          onChange={(date) => setTodoDate(date)}
                          customInput={<ExampleCustomInput />}
                        />
                        <select
                          aria-label="select an option"
                          class="border-date border-opacity-50 font-ltest example-custom-input bg-develbg bg-opacity-30 text-date text-opacity-70 rounded-full py-2 px-4 text-sm text-gray-500 w-full border rounded-lg h-full focus:outline-none text-center"
                        >
                          <option selected="" disabled="" value="">
                            개발 분야
                          </option>
                          <option value="Front">Front</option>
                          <option value="Back">Back</option>
                          <option value="개발분야3">개발분야3</option>
                          <option value="개발분야4">개발분야4</option>
                          <option value="개발분야5">개발분야5</option>
                          <option value="개발분야6">개발분야6</option>
                        </select>
                      </div>
                    </div>
                    <button
                      class="font-test w-1/3 float-right block text-white text-base bg-gray-400 h-10 lg:h-12 mt-2 lg:mt-4 px-4 lg:px-7 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500"
                      onClick={() => {
                        PostCreateTodo();
                        setNextTodo(false);
                      }}
                    >
                      추가
                    </button>
                  </>
                ) : (
                  <>
                    <div class="w-full">
                      <input
                        placeholder="추가할 목표를 입력해주세요!"
                        class="block flex-grow text-base w-full h-10 lg:h-12 mt-2 lg:mt-4 px-1 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500"
                      ></input>
                      <div class="flex mt-3 w-full">
                        <DatePicker
                          closeOnScroll={(e) => e.target === document}
                          selected={todoDate}
                          locale="ko"
                          dateFormat="yyyy년 MM월 dd일"
                          minDate={new Date()}
                          popperModifiers={{
                            preventOverflow: { enabled: true },
                          }}
                          onChange={(date) => setTodoDate(date)}
                          customInput={<ExampleCustomInput />}
                        />
                        <select
                          aria-label="select an option"
                          class="border-date border-opacity-50 font-ltest example-custom-input bg-develbg bg-opacity-30 text-date text-opacity-70 rounded-full py-2 px-4 w-full border rounded-lg h-full focus:outline-none text-center"
                        >
                          <option selected="" disabled="" value="">
                            개발 분야
                          </option>
                          <option value="Front">Front</option>
                          <option value="Back">Back</option>
                          <option value="개발분야3">개발분야3</option>
                          <option value="개발분야4">개발분야4</option>
                          <option value="개발분야5">개발분야5</option>
                          <option value="개발분야6">개발분야6</option>
                        </select>
                      </div>
                    </div>
                    <button
                      class="font-test w-1/3 float-right block text-white text-base bg-gray-400 h-10 lg:h-12 mt-2 lg:mt-4 px-4 lg:px-7 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500"
                      onClick={() => {
                        setNextTodo(true);
                      }}
                    >
                      추가
                    </button>
                  </>
                )}
              </div>
              {endCheck.map((list) => {
                return (
                  <div class="flex items-center justify-between w-full h-auto sm:h-16 px-4 lg:px-8 rounded-lg shadow bg-white">
                    <div
                      class="flex items-center space-x-2 lg:space-x-4 w-full h-auto"
                      key={list.id}
                    >
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          checkedItemHandler(list, e.target.checked)
                        }
                        checked={checkedList.includes(list) ? true : false}
                      ></input>
                      <div class="col-span-3 rounded-lg w-12 h-8 bg-develbg font-sbtest">
                        <div class="pt-2 m-auto w-6 h-6 text-center text-xs">
                          {list.kinds}
                        </div>
                      </div>
                      <h3 class="flex-grow lg:text-base font-test text-fontColor-900 ">
                        {list.data}
                      </h3>
                      <div class="float-right my-auto pl-10 text-right col-span-4 text-sm font-ltest text-date">
                        {list.date}
                      </div>
                      <div>
                        {list.end ? (
                          <button onClick={(e) => changeComplete(list)}>
                            <svg
                              class="h-8 w-8 text-purple-500 text-opacity-70 font-ltest text-date"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              {" "}
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />{" "}
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                          </button>
                        ) : (
                          <button onClick={(e) => changeComplete(list)}>
                            <svg
                              class="h-8 w-8 text-purple-500 text-opacity-20 font-ltest text-date"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              {" "}
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />{" "}
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-gray-500 background-transparent font-test uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  삭제하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export const ChatRoom = (props) => {
  const { setShowModal2, dataLists2, addChat, setCtext } = props;
  const [chat, setChat] = useState(null);

  useEffect(() => {
    setChat(document.getElementById("#chat"));
  }, []);

  return (
    <>
      <div class="justify-center w-full items-center flex flex-col overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none shadow-2xl">
        <div class="relative w-1/3 bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
          <div className="grid pb-10 ">
            <div class="font-sbtest text-xl">
              TeamName 채팅방
              <button
                className="ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal2(false)}
              >
                <span className="bg-transparen text-black text-opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>
          </div>
          <div id="chat" className="grid max-h-72 overflow-y-auto">
            {dataLists2.map((list2) => {
              return (
                <div class="pb-3 flex space-x-2 px-3" key={list2.id}>
                  <div class="relative w-12 h-12">
                    <img
                      class="rounded-full border border-gray-100 shadow-sm"
                      src={list2.userprofile}
                      alt="user image"
                    />
                    {list2.online ? (
                      <>
                        <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
                      </>
                    ) : (
                      <>
                        <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-gray-400 z-2"></div>
                      </>
                    )}
                  </div>
                  <div class="font-test flex-grow text-sm text-sscroll pl-2">
                    {list2.username}
                    <div class="font-ltest text-xs mt-1 text-gray-400 pl-2">
                      {list2.data}
                    </div>
                  </div>
                  <div class="font-ltest float-right text-right text-xs mt-1 text-gray-300">
                    {list2.date}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid">
            <input
              id="sendMessage"
              type="text"
              placeholder="메세지 입력..."
              class="font-test border rounded border-opacity-50 w-full lg:px-4 py-2 text-gray-700 border-scroll transition duration-500 px-1 mt-6 shadow"
              onChange={(e) => {
                setCtext(e.target.value);
              }}
            />
            <button
              class="font-test bg-scroll mt-3 hover:bg-gray-500 w-full text-white font-medium py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
              onClick={(e) => {
                addChat(null);
                //console.log(document.getElementById("sendMessage").value);
                //setCtext(document.getElementById("sendMessage").value);
                document.getElementById("sendMessage").value = "";
                setChat(!chat);
              }}
            >
              보내기
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export const VideoChatRoom = (props) => {
  const {
    setShowModal3,
    setShowVideoList,
    setMemberList,
    videoList,
    videoConference,
    memberList,
    memList,
  } = props;
  return (
    <>
      <div class="justify-center w-full items-center flex flex-col overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div class="relative w-1/3 my-5 mx-auto max-w-3xl">
          {/*content*/}
          <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div class="flex items-start justify-between px-6 py-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 class="text-2xl font-sbtest py-1">화상회의 시작하기</h3>
              <button
                className="ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal3(false)}
              >
                <span className="bg-transparent text-black text-opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>
            {/*body*/}
            <div class="relative w-full mx-auto max-w-3xl">
              <div class={"h-10 font-test grid grid-cols-2"}>
                <button
                  onClick={() => {
                    setShowVideoList(true);
                    setMemberList(false);
                  }}
                >
                  <p className={videoList ? "text-date font-bold" : null}>
                    목록
                  </p>
                </button>
                <button
                  onClick={() => {
                    setMemberList(true);
                    setShowVideoList(false);
                  }}
                >
                  <p className={memberList ? "text-date font-bold" : null}>
                    팀원
                  </p>
                </button>
              </div>
              <hr></hr>
              {videoList
                ? videoConference.map((list) => {
                    return (
                      <div>
                        <div class="flex items-center justify-between w-full h-auto sm:h-16 px-4 lg:px-8 rounded-lg shadow bg-white">
                          <div
                            class="items-center space-x-2 lg:space-x-4 w-full h-auto"
                            key={list.id}
                          >
                            <button class="flex-grow lg:text-base font-test text-fontColor-900">
                              💻 {list.name}
                            </button>

                            <div class="float-right my-auto pl-10 text-right col-span-4 text-sm font-ltest text-date">
                              {list.person} 명 진행 중
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}

              {memberList ? (
                <div>
                  <div class="flex items-center px-6 space-x-2 lg:space-x-4 py-2 text-blueGray-500 leading-relaxed">
                    <input
                      placeholder="🔎 팀원 찾기"
                      class="font-test block text-base w-full h-10 lg:h-12 mt-2 lg:mt-4 px-1 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500"
                    ></input>
                    <button class="font-test w-1/3 float-right block text-white text-base bg-gray-400 h-10 lg:h-12 mt-2 lg:mt-4 px-4 lg:px-7 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500">
                      확인
                    </button>
                  </div>

                  {memList.map((list) => {
                    return (
                      <div>
                        <div class="flex items-center justify-between w-full h-auto sm:h-16 px-4 lg:px-8 rounded-lg shadow bg-white">
                          <div
                            class="items-center space-x-2 lg:space-x-4 w-full h-auto"
                            key={list.id}
                          >
                            <div class="pb-2 flex">
                              <div class="relative w-10 h-10">
                                <img
                                  class="rounded-full border border-gray-100 shadow-sm"
                                  src={list.profile}
                                  alt="user image"
                                />
                                {list.online ? (
                                  <>
                                    <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
                                  </>
                                ) : (
                                  <>
                                    <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-gray-400 z-2"></div>
                                  </>
                                )}
                              </div>

                              <div class="text-left font-test flex-grow text-sm text-black mt-3 pl-2">
                                {list.name}
                              </div>

                              {list.online ? (
                                <button
                                  class="float-right font-test text-gray-500 px-5 py-1 rounded-md bg-gray-200 hover:bg-gray-400 hover:text-gray-50"
                                  onClick={() => {}}
                                >
                                  초대
                                </button>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export const CreateTeam = ({ props, setShowCreateTeamForm }) => {
  const [gitRepos, setGitRepos] = useState([]);
  const [teamName, setTeamName] = useState(null);
  const [teamDevelopType, setTeamDevelopType] = useState(null);
  const [teamGitRepo, setTeamGitRepo] = useState(null);
  const [teamDescription, setTeamDescription] = useState(null);

  useEffect(() => {
    GetGitRepoList({ setGitRepos });
  }, []);

  const onTeamNameHandler = (event) => {
    setTeamName(event.currentTarget.value);
  };

  const onTeamDevelopTypeHandler = (event) => {
    setTeamDevelopType(event.currentTarget.value);
  };

  const onTeamGitRepoHandler = (event) => {
    setTeamGitRepo(event.currentTarget.value);
  };

  const onTeamDescriptionHandler = (event) => {
    setTeamDescription(event.currentTarget.value);
  };
  return (
    <div>
      <div
        id="popup"
        class="z-50 fixed w-full flex justify-center inset-0 bg-opacity-20 bg-gray-600"
      >
        <div
          onClick={() => {
            setShowCreateTeamForm(false);
          }}
          class="w-full h-full z-0 absolute inset-0"
        ></div>
        <div class="mx-auto container">
          <div class="flex items-center justify-center h-full w-full">
            <div class="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div class="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                <p class="text-base font-semibold">새로운 팀 생성</p>
                <button
                  role="button"
                  aria-label="close label"
                  onClick={() => {
                    setShowCreateTeamForm(false);
                  }}
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 7L7 21"
                      stroke="#A1A1AA"
                      stroke-width="1.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M7 7L21 21"
                      stroke="#A1A1AA"
                      stroke-width="1.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
                <form class="mt-11">
                  <div class="flex items-center space-x-9">
                    <input
                      placeholder="팀 이름"
                      class="focus:ring-2 focus:ring-gray-400 w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      onChange={onTeamNameHandler}
                    />
                    <div
                      tabindex="0"
                      class="focus:outline-none focus:ring-2 focus:ring-gray-400 w-1/2 bg-white border rounded border-gray-200 py-2.5 px-3"
                    >
                      <select
                        aria-label="select an option"
                        class="text-sm text-gray-500 w-full focus:outline-none"
                        onChange={onTeamDevelopTypeHandler}
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
                  <div class="flex items-center mt-8">
                    <div
                      tabindex="0"
                      class="focus:outline-none focus:ring-2 focus:ring-gray-400 w-full bg-white border rounded border-gray-200 py-2.5 px-3"
                    >
                      <select
                        aria-label="select an option"
                        class="text-sm text-gray-500 w-full focus:outline-none"
                        onChange={onTeamGitRepoHandler}
                      >
                        <option selected="" disabled="" value="">
                          Github Repository 선택
                        </option>
                        {gitRepos.map((item) => {
                          return <option>{item.gitRepoUrl}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                  <div class="mt-8">
                    <textarea
                      placeholder="팀 설명"
                      class="focus:outline-none focus:ring-2 focus:ring-gray-400 py-3 pl-3 overflow-y-auto h-24 border placeholder-gray-500 rounded border-gray-200 w-full resize-none focus:outline-none"
                      onChange={onTeamDescriptionHandler}
                    ></textarea>
                  </div>
                </form>
                <div class="flex items-center justify-between mt-9">
                  <button
                    role="button"
                    aria-label="close button"
                    onClick={() => {
                      setShowCreateTeamForm(false);
                    }}
                    class="focus:ring-2 focus:ring-offset-2 focus:bg-gray-600 focus:ring-gray-600 focus:outline-none px-6 py-3 bg-gray-600 hover:bg-gray-500 shadow rounded text-sm text-white"
                  >
                    취소
                  </button>
                  <button
                    aria-label="add user"
                    role="button"
                    class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 focus:outline-none px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white"
                    onClick={() => {
                      const data = {
                        teamName: teamName,
                        teamDescription: teamDescription,
                        gitRepoUrl: teamGitRepo,
                        developType: teamDevelopType,
                      };
                      PostCreateTeam({ data, props });
                      setShowCreateTeamForm(false);
                    }}
                  >
                    팀 생성
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
