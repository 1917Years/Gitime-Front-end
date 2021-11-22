import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/Dashboard.css";
import "../assets/styles/Scroll.css";
import "../assets/styles/alert_banner.css";
import { AlertNotice } from "../component/Alert";
import { AddingToDo, ChatRoom, VideoChatRoom } from "../component/Modal";
import {
  BoardWidget,
  CalendarWidget,
  ConsoleWidget,
  DevelopeWidget,
  TodoWidget,
  WeeklyWidget,
} from "../component/Widget";
import {
  Members,
  RecentActivity,
  Upcoming,
  NavFooterMenu,
} from "../component/SideNav";

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

var videoConference = [
  // 화상회의 목록 리스트
  { id: 1, name: "프론트 회의방", person: "3" },
  { id: 2, name: "백 회의방", person: "2" },
];

var memList = [
  // 멤버 리스트
  {
    id: 1,
    name: "박상호",
    profile: "https://randomuser.me/portraits/men/40.jpg",
    online: true,
  },
  {
    id: 2,
    name: "김혁준",
    profile: "https://randomuser.me/portraits/men/40.jpg",
    online: false,
  },
  {
    id: 3,
    name: "최영찬",
    profile: "https://randomuser.me/portraits/men/40.jpg",
    online: false,
  },
  {
    id: 4,
    name: "신유진",
    profile: "https://randomuser.me/portraits/men/40.jpg",
    online: true,
  },
  {
    id: 5,
    name: "이지원",
    profile: "https://randomuser.me/portraits/men/40.jpg",
    online: true,
  },
];

var dataLists = [
  // 투두리스트 샘플 데이터
  {
    id: 1,
    data: "프론트 디자인 완성하기",
    kinds: "F",
    date: "2021.09.14",
    end: false,
  },
  {
    id: 2,
    data: "프론트 코드 쓰기",
    kinds: "F",
    date: "2021.09.25",
    end: false,
  },
  {
    id: 3,
    data: "백엔드 코드 짜기",
    kinds: "B",
    date: "2021.09.30",
    end: true,
  },
];

var dataLists2 = [
  // 채팅 샘플 데이터
  {
    id: 1,
    username: "팀원1",
    userprofile: "https://randomuser.me/portraits/men/40.jpg",
    data: "여러분 이거 어떤가요??",
    date: "2021.11.11",
    time: "17:04",
    online: false,
  },
  {
    id: 2,
    data: "오 괜찮은데요?!",
    username: "팀원2",
    userprofile: "https://randomuser.me/portraits/men/40.jpg",
    date: "2021.11.11",
    time: "17:15",
    online: true,
  },
  {
    id: 3,
    data: "오 좋아요!",
    username: "팀원3",
    userprofile: "https://randomuser.me/portraits/men/40.jpg",
    date: "2021.11.11",
    time: "17:15",
    online: false,
  },
  {
    id: 4,
    data: "그럼 이걸로 할까요?",
    username: "팀원4",
    userprofile: "https://randomuser.me/portraits/men/40.jpg",
    date: "2021.11.11",
    time: "17:26",
    online: false,
  },
  {
    id: 5,
    data: "좋아요ㅋㅋ",
    username: "팀원5",
    userprofile: "https://randomuser.me/portraits/men/40.jpg",
    date: "2021.11.11",
    time: "17:37",
    online: true,
  },
];

function Dashboard(props) {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [ctext, setCtext] = useState("");
  const [inputText, setInputText] = useState("");
  const [checkedList, setCheckedItems] = useState([]);
  const [temp, setTemp] = useState(false);
  const [endCheck, setEndCheck] = useState(dataLists);
  const [videoList, setShowVideoList] = useState(true);
  const [memberList, setMemberList] = useState(false);

  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };
  const onReset = () => {
    setInputText("");
  };
  const addChat = (list) => {
    var tmp = {
      id: 6,
      data: ctext,
      username: "나",
      userprofile: "https://randomuser.me/portraits/men/40.jpg",
      date: "2021.11.11",
      time: "18:33",
      online: true,
    };
    dataLists2.push(tmp);
    setTemp(!temp);
  };
  const checkedItemHandler = (list, isChecked) => {
    if (isChecked) {
      setCheckedItems([...checkedList, list]);
    } else if (!isChecked && checkedList.includes(list)) {
      setCheckedItems(checkedList.filter((el) => el !== list));
    }
  };
  const eraseElement = (list) => {
    for (let i = 0; i < dataLists.length; i++) {
      if (dataLists[i].id == list.id) {
        dataLists.splice(i, 1);
        i--;
      }
    }
  };
  const changeComplete = (list) => {
    list.end = !list.end;
    setTemp(!temp);
  };

  return (
    <div class="font-test" className="header">
      <AlertNotice />
      {showModal ? (
        <AddingToDo
          setShowModal={setShowModal}
          endCheck={endCheck}
          checkedItemHandler={checkedItemHandler}
          checkedList={checkedList}
          changeComplete={changeComplete}
        />
      ) : null}

      {showModal2 ? (
        <ChatRoom
          setShowModal2={setShowModal2}
          dataLists2={dataLists2}
          addChat={addChat}
          setCtext={setCtext}
          onChangeInput={onChangeInput}
          onReset={onReset}
          inputText={inputText}
        />
      ) : null}

      {showModal3 ? (
        <VideoChatRoom
          setShowModal3={setShowModal3}
          setShowVideoList={setShowVideoList}
          setMemberList={setMemberList}
          memberList={memberList}
          videoList={videoList}
          videoConference={videoConference}
          memList={memList}
        />
      ) : null}

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

          <div className="grid grid-cols-3 grid-rows-7 gap-4 ">
            <WeeklyWidget />
            <DevelopeWidget />
            <CalendarWidget />
            <BoardWidget />
            <TodoWidget setShowModal={setShowModal} />
            <ConsoleWidget />
          </div>
        </div>

        <div className="RightSide" class="col-span-1 bg-rightbar ml-10">
          <div className="grid grid-rows-4 ml-10">
            <Upcoming dataLists={dataLists} />
            <RecentActivity />
            <Members />
            <NavFooterMenu
              setShowModal2={setShowModal2}
              setShowModal3={setShowModal3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
