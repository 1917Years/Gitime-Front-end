import React, { useState } from "react";
import { format, getDay } from "date-fns";
import { enGB, ko } from "date-fns/locale";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";

export const WeeklyWidget = (props) => {
  return (
    <div
      className="Weekly"
      class="grid sm:col-span-3 md:col-span-1 row-span-2 font-ttest w-full h-full relative bg-white mx-auto pl-10 md:p-5 my-auto rounded-lg shadow-xl"
    >
      <div class="font-sbtest">Weekly Progress</div>
      <div>Start from Nov 7-14, 2020</div>
      <div class="mt-10">
        {/* {<CircularProgressBar strokeWidth="10" sqSize="150" />} */}
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
            <div
              style={{ width: "10%", transition: "width 2s" }}
              class="
            shadow-none
            flex flex-col
            text-center
            whitespace-nowrap
            text-white
            justify-center
            bg-purple-500
          "
            ></div>
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
            <div
              style={{ width: "50%" }}
              class="
            shadow-none
            flex flex-col
            text-center
            whitespace-nowrap
            text-white
            justify-center
            bg-red-500
          "
            ></div>
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
            <div
              style={{ width: "70%" }}
              class="
            shadow-none
            flex flex-col
            text-center
            whitespace-nowrap
            text-white
            justify-center
            bg-green-500
          "
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CalendarWidget = (props) => {
  const [date, setDate] = useState();
  const [showAddSchedule, setShowAddSchedule] = useState(false);
  const modifiers = {
    // disabled: (date) => getDay(date) === -1, // Disables Saturdays
    highlight: (date) => getDay(date) === 2, // 이거를 토대로 디비에서 일정 목록을 받아와 하이라이트 표시 한다
  };
  const modifiersClassNames = {
    highlight: "-highlight",
  };
  return (
    <div
      className="Calendar"
      class="grid grid-rows-3 row-span-4 sm:col-span-3 md:col-span-1 font-ttest w-full h-full relative bg-white mx-auto pl-10 md:p-5 my-auto rounded-lg shadow-xl"
    >
      <div className="row-span-2">
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
          className={date ? "flex items-center justify-between h-8" : "hidden"}
        >
          {date ? format(date, "yyyy MMM dd", { locale: ko }) : "none"}.
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
        <div>
          <div class="mt-5 font-sbtest overflow-y-auto h-3/4 w-full ">
            <div class="gap-3 grid grid-rows-3">
              <div class="grid grid-cols-12 h-1/4 w-full">
                <div class="col-span-3 rounded-lg w-12 h-8 bg-develbg font-sbtest">
                  <div class="pt-2 m-auto w-6 h-6 text-center text-xs">U</div>
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
                  <div class="pt-2 m-auto w-6 h-6 text-center text-xs">F</div>
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
                  <div class="pt-2 m-auto w-6 h-6 text-center text-xs">B</div>
                </div>
                <div class="my-auto col-span-5 text-sm font-ltest">
                  백엔드 코드 짜기
                </div>
                <div class="my-auto pr-5 text-right col-span-4 text-sm font-ltest text-date">
                  2021.09.30
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BoardWidget = (props) => {
  return (
    <div
      className="Board"
      class="grid sm:col-span-3 md:col-span-1 row-span-2 font-ttest w-full h-full relative bg-white mx-auto pl-10 md:p-5 my-auto rounded-lg shadow-xl"
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
  );
};

export const TodoWidget = (props) => {
  const { setShowModal } = props;
  return (
    <div
      className="Todo"
      class="grid sm:col-span-3 md:col-span-1 row-span-2 font-ttest w-full h-full relative bg-white mx-auto pl-10 md:p-5 my-auto rounded-lg shadow-xl"
    >
      <div class="font-sbtest">To-Do List</div>
      <div class="mt-5 font-sbtest overflow-y-auto h-3/4 w-full ">
        <div class="gap-3 grid grid-rows-3">
          <div class="grid grid-cols-12 h-1/4 w-full">
            <div class="col-span-3 rounded-lg w-12 h-8 bg-develbg font-sbtest">
              <div class="pt-2 m-auto w-6 h-6 text-center text-xs">U</div>
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
              <div class="pt-2 m-auto w-6 h-6 text-center text-xs">F</div>
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
              <div class="pt-2 m-auto w-6 h-6 text-center text-xs">B</div>
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
