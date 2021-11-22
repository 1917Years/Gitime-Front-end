import React from "react";

export const Upcoming = (props) => {
  const { dataLists } = props;
  return (
    <div className="grid mt-10 font-sbtest">
      <div>
        <p>Upcoming!</p>
        <div className="grid mt-4">
          {dataLists.map((idx, item) => {
            return (
              <div className="grid grid-cols-5 my-2 gap-2">
                <div class="grid rounded-lg bg-yellow-500  justify-items-center place-content-center px-2 py-2">
                  <div class="text-red-500">
                    <img src="https://svgsilh.com/svg/558009.svg" alt="alert" />
                  </div>
                </div>
                <div class="col-span-4">
                  <p>약 먹을 시간</p>
                  <p class="text-xs font-ltest">2021-12-25 01:00</p>
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
  return (
    <div className="grid mt-10 font-sbtest">
      <div>
        <p>Recent Activity</p>
        <div className="grid mt-4">
          <div className="grid grid-cols-5 my-2 gap-2">
            <div class="grid rounded-lg bg-green-500  justify-items-center place-content-center px-2 py-2">
              <div class="text-white">
                <img src="https://svgsilh.com/svg/1970468.svg" alt="code" />
              </div>
            </div>
            <div class="col-span-4">
              <p>코드를 올렸다!</p>
              <p class="text-sm font-ltest">2021-12-25 01:00</p>
            </div>
          </div>
          <div className="grid grid-cols-5 my-2 gap-2">
            <div class="grid rounded-lg bg-blue-500  justify-items-center place-content-center px-2 py-2">
              <div class="text-white">
                <img
                  src="https://svgsilh.com/svg/1294836.svg"
                  alt="check_list"
                />
              </div>
            </div>
            <div class="col-span-4">
              <p>새로운 계획을 업로드 하였다.</p>
              <p class="text-sm font-ltest">2021-12-25 01:00</p>
            </div>
          </div>
          <div className="grid grid-cols-5 my-2 gap-2">
            <div class="grid rounded-lg bg-purple-500  justify-items-center place-content-center px-2 py-2">
              <div classname="text-white">
                <img src="https://svgsilh.com/svg/481821.svg" alt="recording" />
              </div>
            </div>
            <div class="col-span-4">
              <p>나도 모르게 영상이 녹화 되었다!</p>
              <p class="text-sm font-ltest">2021-12-25 01:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Members = (props) => {
  return (
    <div className="grid mt-10 font-sbtest">
      <p>Members</p>
      <div className="grid mt-4">
        <div class="flex items-center gap-4 grid grid-cols-3">
          <img
            class="shadow-md w-10 h-10 rounded-full "
            src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
            alt="collaborator 1"
          />
          <img
            class="shadow-md w-10 h-10 rounded-full "
            src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
            alt="collaborator 2"
          />
          <img
            class="shadow-md w-10 h-10 rounded-full "
            src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
            alt="collaborator 3"
          />
          <img
            class="shadow-md w-10 h-10 rounded-full "
            src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
            alt="collaborator 4"
          />
          <img
            class="shadow-md w-10 h-10 rounded-full "
            src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
            alt="collaborator 4"
          />
          <img
            class="shadow-md w-10 h-10 rounded-full "
            src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
            alt="collaborator 4"
          />
          <img
            class="shadow-md w-10 h-10 rounded-full "
            src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
            alt="collaborator 4"
          />
          <img
            class="shadow-md w-10 h-10 rounded-full "
            src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
            alt="collaborator 4"
          />
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
  );
};

export const NavFooterMenu = (props) => {
  const { setShowModal2, setShowModal3 } = props;
  return (
    <div className="flex content-center justify-center items-center">
      <div>
        <button onClick={() => setShowModal2(true)}>
          <img
            class="w-10 h-10"
            src="https://cdn-icons.flaticon.com/png/512/919/premium/919904.png?token=exp=1636619479~hmac=92a353c1d4a6a4157f0e37abb1f0d1e8"
            alt="chat"
          />
        </button>
      </div>

      <div>
        <button onClick={() => setShowModal3(true)}>
          <img
            class="w-10 h-10"
            src="https://cdn-icons.flaticon.com/png/512/3059/premium/3059502.png?token=exp=1636619670~hmac=b23bb68c24d18ad1133e913468298f9f"
            alt="call"
          />
        </button>
      </div>
    </div>
  );
};
