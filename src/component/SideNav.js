import React, { useState } from "react";

export const Upcoming = (props) => {
  const { dataLists } = props;
  return (
    <div className="grid mt-10 font-sbtest">
      <div>
        <p>Upcoming!</p>
        <div className="grid mt-4">
          {dataLists.map((item) => {
            return (
              <div className="grid grid-cols-5 my-2 gap-2">
                <div class="grid rounded-lg bg-yellow-300  justify-items-center place-content-center px-2 py-2">
                  <div class="text-red-200">
                    <img
                      src="https://svgsilh.com/svg/558009-ff9800.svg"
                      alt="alert"
                    />
                  </div>
                </div>
                <div class="col-span-4 text-sm">
                  <p>{item.title}</p>
                  <p class="text-xs font-ltest">
                    {item.date} {item.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const RecentActivity = (props) => {
  const { dataLists } = props;
  return (
    <div className="grid mt-10 font-sbtest">
      <div>
        <p>Recent Activity</p>
        <div className="grid mt-4">
          {dataLists.map((item) => {
            switch (item.type) {
              case 1:
                return (
                  <div className="grid grid-cols-5 my-2 gap-2">
                    <div class="grid rounded-lg bg-green-300  justify-items-center place-content-center px-2 py-2">
                      <div class="text-white">
                        <img
                          src="https://svgsilh.com/svg/1970468-4caf50.svg"
                          alt="code"
                        />
                      </div>
                    </div>
                    <div class="col-span-4 text-sm">
                      <p>{item.username}님이 코드를 수정했습니다.</p>
                      <p class="text-sm font-ltest">
                        {item.date} {item.time}
                      </p>
                    </div>
                  </div>
                );
              case 2:
                return (
                  <div className="grid grid-cols-5 my-2 gap-2">
                    <div class="grid rounded-lg bg-blue-300  justify-items-center place-content-center px-2 py-2">
                      <div class="text-white">
                        <img
                          src="https://svgsilh.com/svg/1294836-3f51b5.svg"
                          alt="code"
                        />
                      </div>
                    </div>
                    <div class="col-span-4 text-sm">
                      <p>{item.username}님이 새로운 계획을 업로드 했습니다.</p>
                      <p class="text-sm font-ltest">
                        {item.date} {item.time}
                      </p>
                    </div>
                  </div>
                );
              case 3:
                return (
                  <div className="grid grid-cols-5 my-2 gap-2">
                    <div class="grid rounded-lg bg-red-300  justify-items-center place-content-center px-2 py-2">
                      <div class="text-white">
                        <img
                          src="https://svgsilh.com/svg/481821-f44336.svg"
                          alt="code"
                        />
                      </div>
                    </div>
                    <div class="col-span-4 text-sm">
                      <p>{item.username}님이 화상회의를 녹화했습니다.</p>
                      <p class="text-sm font-ltest">
                        {item.date} {item.time}
                      </p>
                    </div>
                  </div>
                );
              case 4:
                return (
                  <div className="grid grid-cols-5 my-2 gap-2">
                    <div class="grid rounded-lg bg-purple-300  justify-items-center place-content-center px-2 py-2">
                      <div class="text-white">
                        <img
                          src="https://svgsilh.com/svg/310475-9c27b0.svg"
                          alt="code"
                        />
                      </div>
                    </div>
                    <div class="col-span-4 text-sm">
                      <p>{item.username}님이 파일을 업로드 했습니다.</p>
                      <p class="text-sm font-ltest">
                        {item.date} {item.time}
                      </p>
                    </div>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export const Members = (props) => {
  return (
    <div className="mt-10 grid font-sbtest">
      <div>
        <p>Members</p>
        <div className="grid mt-4">
          <div class="flex  gap-4 grid grid-rows-3 grid-cols-3 place-items-center">
            <div>
              <img
                class="shadow-md w-10 h-10 rounded-full "
                src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                alt="collaborator 1"
              />
            </div>
            <div>
              <img
                class="shadow-md w-10 h-10 rounded-full "
                src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                alt="collaborator 2"
              />
            </div>
            <div>
              <img
                class="shadow-md w-10 h-10 rounded-full "
                src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                alt="collaborator 3"
              />
            </div>
            <div>
              <img
                class="shadow-md w-10 h-10 rounded-full "
                src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                alt="collaborator 4"
              />
            </div>
            <div>
              <img
                class="shadow-md w-10 h-10 rounded-full "
                src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                alt="collaborator 4"
              />
            </div>
            <div>
              <img
                class="shadow-md w-10 h-10 rounded-full "
                src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                alt="collaborator 4"
              />
            </div>
            <div>
              <img
                class="shadow-md w-10 h-10 rounded-full "
                src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                alt="collaborator 4"
              />
            </div>
            <div>
              <img
                class="shadow-md w-10 h-10 rounded-full "
                src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                alt="collaborator 4"
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                stroke="#A1A1AA"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                stroke="#A1A1AA"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                stroke="#A1A1AA"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

var webSocket;

const onOpen = () => {};

const onClose = () => {
  disconnect();
};

const onMessage = () => {
  // data = e.data;
  // chatroom = document.getElementById("chatroom");
  // chatroom.innerHTML = chatroom.innerHTML + "<br>" + data;
};

const disconnect = () => {
  //webSocket.send(JSON.stringify({chatRoomId : roomId,type:'LEAVE',writer:nickname}));
  webSocket.send();
  webSocket.close();
  //location.href=endLink;
};

const first_send = (e) => {
  //msg = document.getElementById("message").value;
  //webSocket.send(JSON.stringify({chatRoomId : roomId,type:'CHAT',writer:nickname,message : msg}));
  //document.getElementById("message").value = "";
};

export const SocketConnect = (props) => {
  const { teamName, dataLists2, nickName } = props;
  // console.log(teamName);
  // console.log(nickName);
  return <div></div>;
  webSocket = new WebSocket("ws://localhost:8080/chat/" + teamName);
  webSocket.onopen = function () {
    webSocket.send(
      JSON.stringify({
        type: "ENTER",
        writer: nickName,
        message: "",
      })
    );
  };
  webSocket.onclose = function (e) {};
  webSocket.onmessage = function (e) {};
};

// socket.onopen = function () {
//   console.log("connection server");
// };

// socket.onmessage = function (e) {
//     const data = JSON.parse(e.data);
//     console.log("data >>", e);
//   };

//   const sendMsg = () => {
//     socket.send(
//       JSON.stringify({
//         message: "zz",
//       })
//     );
//   };

// socket.onclose = function (event) {
//   if (event.wasClean) {
//     console.log("[close] 커넥션 종료됨");
//   } else {
//     console.log("[close] 커넥션 error");
//   }
// };
/*
  function connect(){
        webSocket = new WebSocket("ws://localhost:8080/chat/team1");
        webSocket.onopen = onOpen;
        webSocket.onclose = onClose;
        webSocket.onmessage = onMessage;
    }
    function disconnect(){
        webSocket.send(JSON.stringify({chatRoomId : roomId,type:'LEAVE',writer:nickname}));
        webSocket.close();
        location.href=endLink;
    }
    function send(){
        msg = document.getElementById("message").value;
        webSocket.send(JSON.stringify({chatRoomId : roomId,type:'CHAT',writer:nickname,message : msg}));
        document.getElementById("message").value = "";
    }
    function onOpen(){
        webSocket.send(JSON.stringify({chatRoomId : roomId,type:'ENTER',writer:nickname}));
    }
    function onMessage(e){
        data = e.data;
        chatroom = document.getElementById("chatroom");
        chatroom.innerHTML = chatroom.innerHTML + "<br>" + data;
    }
    function onClose(){
        disconnect();
    }
  */

export const NavFooterMenu = (props) => {
  const { setShowModal2, setShowModal3 } = props;
  const [linkSocket, setLinkSocket] = useState(false);

  return (
    <div className="grid grid-cols-3 justify-items-stretch mt-10 h-10">
      <div className="grid justify-items-center">
        <button
          onClick={() => {
            setShowModal2(true);
            setLinkSocket(true);
          }}
        >
          <img
            class="w-12 h-12"
            src="https://svgsilh.com/svg/310399.svg"
            alt="chat"
          />
        </button>
        {linkSocket ? null : null}
      </div>
      <div></div>

      <div className="grid justify-items-center">
        <button onClick={() => setShowModal3(true)}>
          <img
            class="w-10 h-12"
            src="https://svgsilh.com/svg/651704.svg"
            alt="call"
          />
        </button>
      </div>
    </div>
  );
};
