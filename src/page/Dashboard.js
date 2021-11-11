import React, { useEffect, useRef } from "react";
import "./Dashboard.css";
import "./Scroll.css";
import logo from "../assets/img/team-4-470x470.png";

class CircularProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Size of the enclosing square
    const sqSize = this.props.sqSize;
    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (this.props.sqSize - this.props.strokeWidth) / 2;

    // Enclose cicle in a circumscribing square
    const viewBox = "0 0 ${sqSize} ${sqSize}";

    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - (dashArray * this.props.percentage) / 100;

    return (
      <div class="grid justify-items-center">
        <svg
          width={this.props.sqSize}
          height={this.props.sqSize}
          viewBox={viewBox}
        >
          <circle
            className="circle-background"
            cx={this.props.sqSize / 2}
            cy={this.props.sqSize / 2}
            r={radius}
            strokeWidth={"${this.props.strokeWidth}px"}
          />

          <circle
            className="circle-progress"
            cx={this.props.sqSize / 2}
            cy={this.props.sqSize / 2}
            r={radius}
            strokeWidth={"${this.props.strokeWidth}px"}
            // Start progress marker at 12 O'Clock
            transform={
              "rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})"
            }
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
            }}
          />

          <text
            className="circle-text"
            x="50%"
            y="50%"
            dy=".3em"
            textAnchor="middle"
          >
            {`${this.props.percentage}%`}
          </text>

          <text
            className="circle-text2"
            x="50%"
            y="70%"
            dy=".3em"
            textAnchor="middle"
          >
            {"Tasks completed"}
          </text>
        </svg>
      </div>
    );
  }
}

CircularProgressBar.defaultProps = {
  sqSize: 100,
  percentage: 80,
  strokeWidth: 15,
};

const BoardWidget = (props) => {
  return <div></div>;
};

const testdata = [
  // 샘플 데이터
  {
    id: 1,
    title: "avcd",
    tag: "front",
    date: "2021-10-23",
  },
  {
    id: 2,
    title: "pop",
    tag: "front",
    date: "2021-10-23",
  },
  {
    id: 3,
    title: "avcd",
    tag: "back",
    date: "2021-10-23",
  },
  {
    id: 4,
    title: "noting to report",
    tag: "report",
    date: "2021-10-23",
  },
  {
    id: 5,
    title: "noting to report",
    tag: "report",
    date: "2021-10-23",
  },
  {
    id: 6,
    title: "noting to report",
    tag: "report",
    date: "2021-10-23",
  },
];

function Dashboard(props) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div class="font-test" className="header">
      <div className="Dashboard" class="grid grid-cols-5">
        <div className="LeftSide" class="col-span-4 ml-10 mb-10">
          <div class="pt-5 pl-5 font-ltest text-gray-400">
            유진님 반가워요, 다시 돌아오신 걸 환영해요! 👋
          </div>

          <div class="flex">
            <div class="flex-grow pl-5 text-3xl font-sbtest text-2xl">
              Team1 DashBoard Today
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 h-screen">
            <div
              className="Weekly"
              class="grid col-span-1 font-ttest w-full h-full relative bg-white mx-auto pl-10 md:p-5 my-auto rounded-lg shadow-xl"
            >
              <div class="font-sbtest">Weekly Progress</div>
              <div>Start from Nov 7-14, 2020</div>
              <div class="mt-10">
                <CircularProgressBar strokeWidth="10" sqSize="200" />
              </div>
            </div>
            <div
              className="Develope"
              class="grid col-span-1 font-ttest w-full h-full relative bg-white mx-auto pl-10 md:p-5 rounded-lg shadow-xl"
            >
              <div class="grid grid-cols-10 gap-2">
                <div className="grid col-span-10">
                  <div class="font-sbtest">Develop Progress</div>
                </div>
                <div class="grid col-span-2 rounded-lg bg-develbg">
                  <div className="my-auto  font-sbtest text-center">UI</div>
                </div>
                <div className="col-span-1"></div>
                <div class="col-span-7 text-sm font-test my-auto">
                  Web Design
                  <div class="text-sm font-ltest">Last Update : 2021.09.27</div>
                </div>
                <div class="grid col-span-2 rounded-lg bg-develbg">
                  <div className="my-auto  font-sbtest text-center">UI</div>
                </div>
                <div className="col-span-1"></div>
                <div class="my-auto col-span-7 text-sm font-test">
                  Web Design
                  <div class="text-sm font-ltest">Last Update : 2021.09.27</div>
                </div>
                <div class="grid col-span-2 rounded-lg bg-develbg">
                  <div className="my-auto  font-sbtest text-center">UI</div>
                </div>
                <div className="col-span-1"></div>
                <div class="my-auto col-span-7 text-sm font-test">
                  Web Design
                  <div class="text-sm font-ltest">Last Update : 2021.09.27</div>
                </div>
              </div>
            </div>
            <div
              className="Calendar"
              class="grid col-span-1 font-ttest w-full h-full relative bg-white mx-auto pl-10 md:p-5 my-auto rounded-lg shadow-xl"
            >
              <div class="font-sbtest">팀 일정</div>
            </div>
            <div
              className="Writer"
              class="grid col-span-2 font-ttest w-full h-60 bg-white mx-auto pl-10 md:p-5 my-auto rounded-lg shadow-xl "
            >
              <div class="font-sbtest">자료실</div>
              <div>
                <div className="grid grid-cols-2 py-2 px-1">
                  <div className="h-44">
                    <div className="h-2/3">
                      <img src="/logo192.png" className="h-full w-full"></img>
                    </div>
                    <div className="h-1/3">
                      <strong>제목</strong>
                      <p>부제목 및 요약 설명</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 h-44">
                    <div className="grid col-span-1">
                      <img src="/logo192.png" className="h-14 w-full"></img>
                    </div>
                    <div className="grid col-span-2">
                      <strong>제목</strong>
                      <p>부제목 및 요약 설명</p>
                    </div>
                    <div className="grid col-span-1">
                      <img src="/logo192.png" className="h-14 w-full"></img>
                    </div>
                    <div className="grid col-span-2">
                      <strong>제목</strong>
                      <p>부제목 및 요약 설명</p>
                    </div>
                    <div className="grid col-span-1">
                      <img src="/logo192.png" className="h-14 w-full"></img>
                    </div>
                    <div className="grid col-span-2">
                      <strong>제목</strong>
                      <p>부제목 및 요약 설명</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="Todo"
              class="grid col-span-1 font-ttest w-full h-60 relative bg-white mx-auto pl-10 md:p-5 my-auto rounded-lg shadow-xl"
            >
              <div class="font-sbtest">To-Do List</div>
              <div class="mt-5 font-sbtest overflow-y-auto h-3/4 w-full ">
                <div class="gap-3 grid grid-rows-3">
                  <div class="grid grid-cols-12 h-1/4 w-full">
                    <div class="col-span-3 rounded-lg w-12 h-8 bg-develbg font-sbtest">
                      <div class="pt-2 m-auto w-6 h-6 text-center text-xs">
                        U
                      </div>
                    </div>
                    <div class="my-auto col-span-5 text-sm font-ltest">
                      프론트 디자인 완성하기
                    </div>
                    <div class="my-auto pr-5 text-right col-span-4 text-sm font-ltest text-date">
                      2021.09.14
                    </div>
                  </div>

                  <div class="grid grid-cols-12 h-1/4 w-full">
                    <div class="col-span-3 rounded-lg w-12 h-8 bg-develbg font-sbtest">
                      <div class="pt-2 m-auto w-6 h-6 text-center text-xs">
                        F
                      </div>
                    </div>
                    <div class="my-auto col-span-5 text-sm font-ltest">
                      프론트 코드 쓰기
                    </div>
                    <div class="my-auto pr-5 text-right col-span-4 text-sm font-ltest text-date">
                      2021.09.25
                    </div>
                  </div>

                  <div class="grid grid-cols-12 h-1/4 w-full">
                    <div class="col-span-3 rounded-lg w-12 h-8 bg-develbg font-sbtest">
                      <div class="pt-2 m-auto w-6 h-6 text-center text-xs">
                        B
                      </div>
                    </div>
                    <div class="my-auto col-span-5 text-sm font-ltest">
                      백엔드 코드 짜기
                    </div>
                    <div class="my-auto pr-5 text-right col-span-4 text-sm font-ltest text-date">
                      2021.09.30
                    </div>
                  </div>

                  <div class="grid grid-cols-3 h-1/4">
                    <div>13</div>
                    <div>14</div>
                    <div>15</div>
                  </div>
                </div>
              </div>
              <button
                class="font-test"
                type="button"
                onClick={() => setShowModal(true)}
              >
                새 목표 추가하기
              </button>
              {showModal ? (
                <>
                  <div class="justify-center w-3/4 items-center flex flex-col overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div class="relative my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                          <h3 class="text-3xl font-semibold">
                            새 목표 추가하기
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div class="relative w-auto my-6 mx-auto max-w-3xl">
                          <div class="flex items-center space-x-2 lg:space-x-4 my-4 text-blueGray-500 text-lg leading-relaxed">
                            <input
                              placeholder="추가할 목표를 입력해주세요!"
                              class="block w-full h-12 lg:h-14 mt-2 lg:mt-4 px-4 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500"
                            ></input>
                            <button class="block text-white bg-gray-500 w-1/2 h-12 lg:h-14 mt-2 lg:mt-4 px-4 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500">
                              추가하기
                            </button>
                          </div>
                          <div class="flex items-center justify-between w-full h-14 sm:h-16 lg:h-20 px-4 lg:px-8 rounded-lg shadow bg-white">
                            <div class="flex items-center space-x-2 lg:space-x-4 w-full h-full">
                              <input type="checkbox" checked=""></input>
                              <h3 class="lg:text-lg font-semibold text-fontColor-900 ">
                                프론트 디자인 완성하기
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
            <div
              id="console"
              class="grid col-span-3 font-ttest w-full h-full relative bg-white mx-auto pl-10 md:p-5 my-auto rounded-lg shadow-xl"
            >
              <div class="font-sbtest">Console</div>
            </div>
          </div>
        </div>

        <div className="RightSide" class="col-span-1 bg-rightbar ml-10 h-full">
          <div className="grid grid-cols-1 h-screen">
            <div className="grid col-span-1 font-sbtest pt-4 pl-6 pr-6">
              <div>Upcoming</div>
            </div>
            <div className="grid col-span-1 font-sbtest pt-4 pl-6 pr-6">
              <div>Recent Activity</div>
            </div>
            <div className="grid col-span-1 font-sbtest pt-4 pl-6 pr-6">
              <div>Members</div>
            </div>
          </div>
          <div className="grid">hello</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
