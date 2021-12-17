import React, { useEffect, useState, forwardRef } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import DatePicker from "react-datepicker";
import "../assets/styles/Dashboard.css";
import "../assets/styles/Scroll.css";
import "../assets/styles/alert_banner.css";
import { AlertNotice } from "../component/Alert";
import { Board, AddingToDo, ChatRoom, VideoChatRoom } from "../component/Modal";

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

import {
  sample_activity,
  sample_upcoming,
} from "../component/test/sample_data";
import { GetTeamNotice } from "../utils/api/team/TeamApi";

var teamName = "델리만쥬";
var nickName = "신유진";

export let sockJS = new SockJS("http://localhost:8080/api/v1/socket/chat");
console.log(sockJS);
Stomp.client = Stomp.over(sockJS);
export let stompClient = Stomp.client;

var message;

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
  {
    id: 4,
    data: "백엔드 채팅방 만들기",
    kinds: "B",
    date: "2021.11.22",
    end: true,
  },
];

var chat_id = 0;
var dataLists2 = [
  // 채팅 샘플 데이터
];

var msg = {
  id: 0,
  username: "",
  userprofile: "https://randomuser.me/portraits/men/40.jpg",
  data: "",
  date: "",
  online: false,
};

var dataLists3 = [
  // 자료실 샘플 데이터
  {
    id: 1,
    username: "팀원1",
    title: "오늘 프론트 결과 캡쳐해서 올려요",
    data: "오늘은 꽤 많이 한듯ㅋㅋ",
    file: "PNG",
    date: "2021.11.11",
    time: "17:04",
    like: "2",
    comment: "3",
  },
  {
    id: 2,
    username: "팀원2",
    title: "오늘 백 결과입니다",
    data: "다들 수고하셨어요~",
    file: "HWP",
    date: "2021.11.11",
    time: "17:07",
    like: "3",
    comment: "2",
  },
  {
    id: 3,
    username: "팀원3",
    title: "중간보고서 임시",
    data: "결과부분 내용 보충해주세요",
    file: "HWP",
    date: "2021.11.13",
    time: "11:56",
    like: "4",
    comment: "1",
  },
  {
    id: 4,
    username: "팀원4",
    title: "발표자료입니다",
    data: "피드백해주세요~",
    file: "PDF",
    date: "2021.11.25",
    time: "21:38",
    like: "5",
    comment: "5",
  },
];

function addMessage(message) {
  msg.id = chat_id;
  msg.username = message.userName;
  msg.data = message.content;
  msg.date = message.date;

  msg.userprofile = "https://randomuser.me/portraits/men/40.jpg";
  console.log(dataLists2);
  //console.log(msg);
  dataLists2.push(msg);
  chat_id += 1;

  console.log(dataLists2);
}

function Dashboard(props) {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  /*Todo*/
  const [nextTodo, setNextTodo] = useState(false);
  const [todoDate, setTodoDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="border border-date border-opacity-50 font-ltest example-custom-input bg-develbg bg-opacity-30 text-date text-opacity-70 rounded-full py-2 px-5"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));
  /*Todo*/
  const [ctext, setCtext] = useState("");
  const [inputText, setInputText] = useState("");
  const [checkedList, setCheckedItems] = useState([]);
  const [temp, setTemp] = useState(false);
  const [endCheck, setEndCheck] = useState(dataLists);
  const [videoList, setShowVideoList] = useState(true);
  const [memberList, setMemberList] = useState(false);
  const [notice, setNotice] = useState("불러오는중..");
  console.log();

  useEffect(() => {
    GetTeamNotice({
      setNotice: setNotice,
      teamName: props.match.params.teamName,
    });
    console.log(stompClient);
    stompClient.connect({}, () => {
      stompClient.subscribe("/topic/roomId", (data) => {
        message = JSON.parse(data.body);
        addMessage(message);
      });
    });
  }, []);

  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };
  const onReset = () => {
    setInputText("");
  };

  const handleEnter = () => {
    var sendMessage = {
      userName: nickName,
      content: ctext,
      date: 2020,
    };
    console.log(ctext);
    stompClient.send("/api/v1/socket/chat", {}, JSON.stringify(sendMessage));

    /*
    var tmp = {
      id: 6,
      data: ctext,
      username: "나",
      userprofile: "https://randomuser.me/portraits/men/40.jpg",
      date: "2021.11.11",
      time: "18:33",
      online: true,
    };
    */
    //dataLists2.push(tmp);

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
      if (dataLists[i].id === list.id) {
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
      <AlertNotice notice={notice} />
      {showModal ? (
        <AddingToDo
          setShowModal={setShowModal}
          endCheck={endCheck}
          checkedItemHandler={checkedItemHandler}
          checkedList={checkedList}
          changeComplete={changeComplete}
          setNextTodo={setNextTodo}
          nextTodo={nextTodo}
          setTodoDate={setTodoDate}
          todoDate={todoDate}
          ExampleCustomInput={ExampleCustomInput}
        />
      ) : null}

      {showModal2 ? (
        <ChatRoom
          setShowModal2={setShowModal2}
          dataLists2={dataLists2}
          addChat={handleEnter}
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
      {showModal4 ? (
        <Board setShowModal4={setShowModal4} dataLists3={dataLists3} />
      ) : null}
      <div className="Dashboard" class="grid grid-cols-5">
        <div className="LeftSide" class="col-span-4 ml-10 mb-10">
          <div class="pt-5 pl-5 font-ltest text-gray-400">
            {nickName}님 반가워요, 다시 돌아오신 걸 환영해요! 👋
          </div>

          <div class="flex">
            <div class="flex-grow pl-5 text-3xl font-sbtest text-2xl">
              {teamName} DashBoard Today
            </div>
            <button
              class="text-3xl font-sbtest"
              onClick={() => {
                // window.location.href =
                props.history.push(
                  "/dashboard/" + props.match.params.teamName + "/setting"
                );
              }}
            >
              <img
                src="https://cdn.discordapp.com/attachments/874658668434583655/913307164058218506/iconmonstr-gear-1-32.png"
                alt="alert"
              />
            </button>
          </div>

          <div className="grid grid-cols-3 grid-rows-7 gap-4 ">
            <WeeklyWidget />
            <DevelopeWidget />
            <CalendarWidget />
            <BoardWidget
              setShowModal4={setShowModal4}
              dataLists3={dataLists3}
            />
            <TodoWidget setShowModal={setShowModal} dataLists={dataLists} />
            <ConsoleWidget />
          </div>
        </div>

        <div className="RightSide" class="col-span-1 bg-rightbar ml-10">
          <div className="grid  ml-5 mr-5">
            <Upcoming dataLists={sample_upcoming} />
            <RecentActivity dataLists={sample_activity} />
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
