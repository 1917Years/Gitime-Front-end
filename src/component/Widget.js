import React, { useState, useEffect, forwardRef } from "react";
import { format, getDay } from "date-fns";
import { enGB, ko } from "date-fns/locale";
import DatePicker from "react-datepicker";
import { DatePickerCalendar } from "react-nice-dates";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import ChangingProgressProvider from "./ChangingProgressProvider";
import "react-circular-progressbar/dist/styles.css";

import "react-nice-dates/build/style.css";
import "../assets/styles/Progressbar.css";

export var ProgressBar = ({ width, percent, color }) => {
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
export const WeeklyWidget = (props) => {
  const percentage = 82;
  let today = new Date();

  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  let day = today.getDay(); // 요일
  return (
    <div
      className="Weekly"
      class="grid sm:col-span-3 md:col-span-1 row-span-2 font-ttest w-full h-full relative bg-white mx-auto pl-10 md:p-5 my-auto rounded-lg shadow-xl"
    >
      <div class="grid grid-rows-2">
        <div class="font-sbtest ">Weekly Progress</div>
        <div class="font-ttest text-sm pt-1">
          Start from Nov {month}-{date}, {year}
        </div>
      </div>
      <div class="ml-20 mt-10 w-1/2 h-1/2">
        {
          <CircularProgressbarWithChildren
            value={percentage}
            styles={buildStyles({
              pathColor: "#9d9cf2",
            })}
          >
            <div
              class="font-extrabold font-ebtest"
              style={{ fontSize: 32, marginTop: -5, color: "#7a78ed" }}
            >
              {percentage}%
            </div>
            <div class="font-test text-gray-500">Task completed</div>
          </CircularProgressbarWithChildren>
        }
      </div>
    </div>
  );
};

export const DevelopeWidget = (props) => {
  return (
    <div
      className="Develope"
      class="grid sm:col-span-3 md:col-span-1 row-span-2 font-ttest w-full h-full relative bg-white mx-auto pl-10 md:p-5 rounded-lg shadow-xl"
    >
      <div class="grid grid-cols-10 gap-2">
        <div className="grid col-span-10">
          <div class="font-sbtest">Develop Progress</div>
        </div>
        <div class="grid col-span-2 rounded-lg bg-develbg">
          <div className="my-auto  font-sbtest text-center">UI</div>
        </div>
        <div className="col-span-1"></div>
        <div class="col-span-4 text-sm font-test my-auto">
          Choi Yeong chan
          <div class="text-sm font-ltest">Last Update : 2021.09.27</div>
        </div>

        <div class="relative pt-1 col-span-3 pt-4">
          <div class="flex items-center justify-between">
            <div></div>
            <div class="text-right">
              <span class="text-xs font-semibold inline-block text-purple-600">
                10%
              </span>
            </div>
          </div>
          <div class="overflow-hidden h-3 mb-4 text-xs flex rounded bg-purple-200 transition">
            <ProgressBar width={10} percent={1} color={"blue"} />
          </div>
        </div>

        <div class="grid col-span-2 rounded-lg bg-develbg">
          <div className="my-auto  font-sbtest text-center">UI</div>
        </div>
        <div className="col-span-1"></div>
        <div class="my-auto col-span-4 text-sm font-test">
          =<div class="text-sm font-ltest">Last Update : 2021.09.27</div>
        </div>

        <div class="relative pt-1 col-span-3 pt-4">
          <div class="flex items-center justify-between">
            <div></div>
            <div class="text-right">
              <span class="text-xs font-semibold inline-block text-red-600">
                50%
              </span>
            </div>
          </div>
          <div class="overflow-hidden h-3 mb-4 text-xs flex rounded bg-red-200">
            <ProgressBar width={10} percent={5} color={"red"} />
          </div>
        </div>

        <div class="grid col-span-2 rounded-lg bg-develbg">
          <div className="my-auto  font-sbtest text-center">UI</div>
        </div>
        <div className="col-span-1"></div>
        <div class="my-auto col-span-4 text-sm font-test">
          Genius
          <div class="text-sm font-ltest">Last Update : 2021.09.27</div>
        </div>

        <div class="relative pt-1 col-span-3 pt-4">
          <div></div>
          <div class="flex items-center justify-between">
            <div></div>

            <div class="text-right">
              <span class="text-xs font-semibold inline-block text-green-600">
                70%
              </span>
            </div>
          </div>
          <div class="overflow-hidden h-3 mb-4 text-xs flex rounded bg-green-200">
            <ProgressBar width={10} percent={7} color={"green"} />
          </div>
        </div>
      </div>
    </div>
  );
};

var todayY;
var todayM;
var todayD;
var selectedList = [];

function deleteList() {
  selectedList = [];
}

const handlerDate = ({ todoLists, date }) => {
  // 클릭 시 리스트 초기화
  deleteList();
  todoLists.map((item) => {
    todayY = new Date(date).getFullYear();
    todayM = new Date(date).getMonth() + 1;
    todayD = new Date(date).getDate();

    // 2021.01.12 ~ 2021.03.22
    // endY = 2021, startY= 2021
    // endM = 03, startM = 01
    // endD = 22, startD = 12
    // [2021,11,13]

    if (todayY == item.untilDate[0] * 1) {
      if (todayM >= item.startDate[1] * 1) {
        if (
          todayD >= item.startDate[2] * 1 &&
          todayD <= item.untilDate[2] * 1
        ) {
          selectedList.push(item);
        }
      }
    }

    if (todayY < item.untilDate[0] * 1) {
      if (todayM >= item.startDate[1] * 1) {
        if (
          todayD >= item.startDate[2] * 1 &&
          todayD <= item.untilDate[2] * 1
        ) {
          selectedList.push(item);
        }
      }
    }
  });

  selectedList.sort(function (a, b) {
    var dod = todayY.toString() + todayM.toString() + todayD.toString();
    var add = a.endDateY + a.endDateM + a.endDateD;
    var bdd = b.endDateY + b.endDateM + b.endDateD;

    var gapA = add * 1 - dod * 1;
    var gapB = bdd * 1 - dod * 1;

    if (gapA < gapB) {
      return -1;
    }
    if (gapA > gapB) {
      return 1;
    }

    // 이름이 같을 경우
    return 0;
  });
};

export const CalendarWidget = (props) => {
  const [date, setDate] = useState();
  const [showAddSchedule, setShowAddSchedule] = useState(false);
  const { todoLists } = props;
  const [showOneDay, setShowOneDay] = useState(false);
  const [showMultiDay, setShowMultiDay] = useState(false);
  const [onedayDate, setonedayDate] = useState(new Date());
  const [multidayStartDate, setMultidayStartDate] = useState(new Date());
  const [multidayEndDate, setMultidayEndDate] = useState(new Date());
  const [showTodoDate, setShowTodoDate] = useState(false);

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="border border-date border-opacity-50 font-ltest example-custom-input bg-develbg bg-opacity-30 text-date text-opacity-70 rounded-full py-2 px-5"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));

  const modifiers = {
    // disabled: (date) => getDay(date) === -1, // Disables Saturdays
    highlight: (date) => getDay(date) === 2, // 이거를 토대로 디비에서 일정 목록을 받아와 하이라이트 표시 한다
  };
  const modifiersClassNames = {
    highlight: "-highlight",
  };
  useEffect(() => {
    handlerDate({ todoLists, date });
  }, []);
  return (
    <div
      className="Calendar"
      class="row-span-4 sm:col-span-3 md:col-span-1 font-ttest w-full h-full relative bg-white mx-auto pl-10 md:p-5 my-auto rounded-lg shadow-xl"
    >
      <div className="">
        <DatePickerCalendar
          date={date}
          onDateChange={setDate}
          locale={enGB}
          modifiers={modifiers}
          modifiersClassNames={modifiersClassNames}
        />
      </div>
      <div className={date ? null : "hidden"}>
        <div
          className={
            date
              ? "font-bold mt-4 flex items-center justify-between h-8"
              : "hidden"
          }
        >
          {date ? format(date, "yyyy년 MMM dd일", { locale: ko }) : "none"}.
          <button
            type="button"
            class="h-full w-1/3 text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm text-center"
            onClick={() => {
              setShowAddSchedule(true);
            }}
          >
            일정 추가
          </button>
        </div>
        <div class="">
          {
            <div class="mt-2 font-sbtest overflow-y-auto h-36 w-full">
              {handlerDate({ todoLists, date })}

              {selectedList.map((todo) => {
                return (
                  <div class="">
                    <div class="mb-3 mt-3 grid grid-cols-12 w-full">
                      <div class="col-span-3 rounded-lg w-12 h-8 bg-develbg font-sbtest">
                        <div class="pt-2 m-auto w-6 h-6 text-center text-xs">
                          {todo.developField.substring(0, 1)}
                        </div>
                      </div>
                      <div class="my-auto col-span-5 text-sm font-ltest">
                        {todo.todo}
                      </div>
                      <div class="my-auto pr-5 text-right col-span-4 text-xs font-ltest text-date">
                        ~
                        {todo.untilDate[0] +
                          "." +
                          todo.untilDate[1] +
                          "." +
                          todo.untilDate[2]}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          }
        </div>
      </div>

      {showAddSchedule ? (
        <div class="bg-black bg-opacity-25 justify-center w-full items-center flex flex-col overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div class="relative w-1/3 my-5 mx-auto max-w-3xl">
            {/*content*/}
            <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div class="flex items-start justify-between px-6 py-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 class="text-xl font-sbtest text-center py-1">
                  일정 추가하기
                </h3>
                <button
                  className="ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => {
                    setShowAddSchedule(false);
                    setShowOneDay(false);
                    setShowMultiDay(false);
                  }}
                >
                  <span className="bg-transparent text-black text-opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    x
                  </span>
                </button>
              </div>
              <div class="relative w-full mx-auto max-w-3xl">
                <div class="pt-4 ml-4 font-test"> ✔ 날짜를 선택해 주세요.</div>

                <div class="grid grid-cols-2">
                  <div class="font-test ml-4 mr-4 px-4 py-4 grid grid-rows-2 gap-2">
                    <button
                      className={
                        showOneDay
                          ? "py-2 border rounded-lg bg-gray-200"
                          : "py-2 border rounded-lg"
                      }
                      onClick={() => {
                        setShowOneDay(true);
                        setShowMultiDay(false);
                        setShowTodoDate(false);
                      }}
                    >
                      하루
                    </button>

                    <button
                      className={
                        showMultiDay
                          ? "py-2 border rounded-lg bg-gray-200"
                          : "py-2 border rounded-lg"
                      }
                      onClick={() => {
                        setShowOneDay(false);
                        setShowMultiDay(true);
                        setShowTodoDate(false);
                      }}
                    >
                      연속
                    </button>
                  </div>
                  <div class="font-test px-4 py-4 gap-1">
                    {showOneDay ? (
                      <div class="">
                        <DatePicker
                          closeOnScroll={(e) => e.target === document}
                          selected={onedayDate}
                          locale="ko"
                          dateFormat="yyyy년 MM월 dd일"
                          minDate={new Date()}
                          popperModifiers={{
                            preventOverflow: { enabled: true },
                          }}
                          onChange={(date) => {
                            setonedayDate(date);
                            setShowTodoDate(true);
                          }}
                          customInput={<ExampleCustomInput />}
                        />
                      </div>
                    ) : null}

                    {showMultiDay ? (
                      <div class="">
                        <DatePicker
                          closeOnScroll={(e) => e.target === document}
                          selected={multidayStartDate}
                          locale="ko"
                          dateFormat="yyyy년 MM월 dd일"
                          minDate={new Date()}
                          popperModifiers={{
                            preventOverflow: { enabled: true },
                          }}
                          onChange={(date) => {
                            setMultidayStartDate(date);
                            setShowTodoDate(true);
                          }}
                          customInput={<ExampleCustomInput />}
                        />
                        <div class="my-2"></div>
                        <DatePicker
                          closeOnScroll={(e) => e.target === document}
                          selected={multidayEndDate}
                          locale="ko"
                          dateFormat="yyyy년 MM월 dd일"
                          minDate={new Date()}
                          popperModifiers={{
                            preventOverflow: { enabled: true },
                          }}
                          onChange={(date) => setMultidayEndDate(date)}
                          customInput={<ExampleCustomInput />}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>

                {/*
                showTodoDate ? (
                  onedayDate ? (
                    multidayStartDate ? (
                      multidayEndDate ? (
                        <div class="pt-2 ml-4 font-test">
                          ✔ 선택한 날짜: {multidayStartDate.getFullYear()}년
                          {multidayStartDate.getMonth() + 1}월{" "}
                          {multidayStartDate.getDate()}일 ~{" "}
                          {multidayEndDate.getFullYear()}년{" "}
                          {multidayEndDate.getMonth() + 1}월{" "}
                          {multidayEndDate.getDate()}일
                        </div>
                      ) : (
                        <div class="pt-2 ml-4 font-test">
                          {" "}
                          ✔ 선택한 날짜: {multidayStartDate.getFullYear()}년
                          {multidayStartDate.getMonth() + 1}월{" "}
                          {multidayStartDate.getDate()}일
                        </div>
                      )
                    ) : (
                      <div class="pt-2 ml-4 font-test">
                        ✔ 선택한 날짜: {onedayDate.getFullYear()}년
                        {onedayDate.getMonth() + 1}월 {onedayDate.getDate()}일
                      </div>
                    )
                  ) : null
                ) : null
                    */}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export const BoardWidget = (props) => {
  const { setShowModal4, dataLists3 } = props;
  return (
    <div
      className="Board"
      class="grid sm:col-span-3 md:col-span-1 row-span-2 font-ttest w-full h-full relative bg-white mx-auto pl-10 md:p-5 my-auto rounded-lg shadow-xl"
    >
      <div class="grid grid-cols-2">
        {/* <div class="font-sbtest text-left">자료실</div> */}
        <button class="font-sbtest text-left">자료실</button>
        <button
          class="font-test text-right text-xs"
          onClick={() => {
            setShowModal4(true);
          }}
        >
          더보기 {">"}
        </button>
      </div>
      <div className="py-2 px-1">
        {Object.keys(dataLists3.content).length == 0 ? (
          <div class="font-test">
            자료실에 글이 없어요😂
            <div>팀원들과 정보를 공유해 보세요.</div>
            <div>
              <a class="text-red-600">더보기</a>를 누르면 글을 쓸 수 있어요!
            </div>
          </div>
        ) : (
          dataLists3.content.map((list) => {
            return (
              <div class="grid grid-cols-2 grid-rows-2 mt-5 font-sbtest">
                <div class="col-span-2 my-auto text-sm font-ltest">
                  {list.title}
                </div>
                <div class="text-gray-500 my-auto text-xs font-ltest">
                  {list.writeTime[0] +
                    "." +
                    list.writeTime[1] +
                    "." +
                    list.writeTime[2]}{" "}
                  {list.writeTime[3] +
                    ":" +
                    list.writeTime[4] +
                    ":" +
                    list.writeTime[5]}
                </div>
                <div class="my-auto text-sm font-ltest text-right">
                  {list.writer}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export const TodoWidget = (props) => {
  const { setShowModal, dataLists } = props;
  return (
    <div
      className="Todo"
      class="grid sm:col-span-3 md:col-span-1 row-span-2 font-ttest w-full h-full relative bg-white mx-auto pl-10 md:p-5 my-auto rounded-lg shadow-xl"
    >
      <div class="font-sbtest">To-Do List</div>
      <div
        class={
          Object.keys(dataLists).length == 0
            ? null
            : "font-sbtest overflow-y-auto h-3/4 w-full"
        }
      >
        {Object.keys(dataLists).length == 0 ? (
          <div class="font-test my-3">
            아직은 할 일이 없어요😅
            <div class="mb-4">
              <a class="text-red-600">목표 관리하기</a> 버튼으로 할 일을 추가해
              보세요!
            </div>
          </div>
        ) : (
          dataLists.map((list) => {
            return (
              <div class="">
                <div class="mb-3 mt-3 grid grid-cols-12 w-full">
                  <div class="col-span-3 rounded-lg w-12 h-8 bg-develbg font-sbtest">
                    <div class="pt-2 m-auto w-6 h-6 text-center text-xs">
                      {list.developField.substring(0, 1)}
                    </div>
                  </div>
                  <div class="my-auto col-span-5 text-sm font-ltest">
                    {list.todo}
                  </div>
                  <div class="my-auto pr-5 text-right col-span-4 text-sm font-ltest text-date">
                    {list.untilDate[0] +
                      "." +
                      list.untilDate[1] +
                      "." +
                      list.untilDate[2]}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <button
        class="font-test"
        type="button"
        onClick={() => setShowModal(true)}
      >
        목표 관리하기
      </button>
    </div>
  );
};

export const ConsoleWidget = (props) => {
  return (
    <div
      id="console"
      class="grid row-span-2 col-span-3 font-ttest w-full h-80 relative bg-white mx-auto pl-10 md:p-5 my-auto rounded-lg shadow-xl min-h-100"
    >
      <div class="font-sbtest">Console</div>
    </div>
  );
};
