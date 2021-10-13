import { ReactComponent as Nuser } from "./New_user_icon.svg";

function TeamEdit(props) {
  return (
    <div className="header">
      <div class="font-ttest relative w-4/5 h-1 bg-white mx-auto pl-10 md:p-12 my-10 rounded-lg shadow-xl">
        <div class="mx-auto font-semibold text-gray-500 flex flex-row">
          <div class="pr-10">Team1</div>
          <div class="pr-10">Team2</div>
          <div class="pr-10">Team3</div>
        </div>
        <div class="mr-5 w-12 h-2 border-4 border-opacity-100 border-purple-300"></div>
      </div>

      <div class="font-ltest relative w-4/5 h-4/5 bg-white mx-auto p-5 md:p-7 my-10 rounded-lg shadow-2xl">
        <div class="absolute left-3/4 pl-8">
          <div class="flex space-x-1">
            <div class="relative mt-5 mb-2 ml-5 w-6 h-6">
              <img
                class="rounded-full border border-gray-100 shadow-sm"
                src="https://randomuser.me/portraits/men/40.jpg"
                alt="user image"
              />
            </div>
            <div class="relative mt-5 mb-2 ml-5 w-6 h-6">
              <img
                class="rounded-full border border-gray-100 shadow-sm"
                src="https://randomuser.me/portraits/women/12.jpg"
                alt="user image"
              />
            </div>
            <div class="relative mt-5 mb-2 ml-5 w-6 h-6">
              <img
                class="rounded-full border border-gray-100 shadow-sm"
                src="https://randomuser.me/portraits/men/3.jpg"
                alt="user image"
              />
            </div>
            <div class="relative mt-5 mb-2 ml-5 w-6 h-6">
              <img
                class="rounded-full border border-gray-100 shadow-sm"
                src="https://randomuser.me/portraits/women/5.jpg"
                alt="user image"
              />
            </div>
            <div class="relative mt-5 mb-2 ml-5 w-6 h-6">
              <img
                class="rounded-full border border-gray-100 shadow-sm"
                src="https://randomuser.me/portraits/men/44.jpg"
                alt="user image"
              />
            </div>
            <div class="font-thin pl-3 mt-5 text-gray-400 text-xs">
              {" "}
              5 members{" "}
            </div>
          </div>
        </div>

        <div class="font-btest font-bold text-black text-2xl"> 델리만쥬 </div>
        <div class="font-thin mt-2 text-gray-400 text-base">
          {" "}
          Participants List{" "}
        </div>

        <div className="divide" class="flex">
          <div className="left" class="flex-1">
            <div class="flex space-x-2">
              <div class="font-thin mt-5 ml-5 text-gray-300 text-sm">
                {" "}
                Profile{" "}
              </div>
              <div class="font-thin mt-5 pl-10 text-gray-300 text-sm">
                {" "}
                Role{" "}
              </div>
            </div>

            <div class="pb-3 flex space-x-2">
              <div class="flex space-x-8">
                <div class="relative mt-5 mb-2 ml-5 w-12 h-12">
                  <img
                    class="rounded-full border border-gray-100 shadow-sm"
                    src="https://randomuser.me/portraits/men/40.jpg"
                    alt="user image"
                  />
                  <div class="pt-1 text-sm text-purple-400 pl-2">박상호</div>
                </div>
                <div class="pt-1 mt-7 mx-auto text-sm text-gray-500 pl-2">
                  서버 관리 및 백앤드 기능 구현
                </div>
                <div class="font-thin mt-8 text-xs text-purple-300">Leader</div>
                <div class="absolute left-4/10 mt-7 text-gray-600 pl-8">X</div>
              </div>
            </div>

            <div class="pb-3 flex space-x-2">
              <div class="flex space-x-8">
                <div class="relative mt-5 mb-2 ml-5 w-12 h-12">
                  <img
                    class="rounded-full border border-gray-100 shadow-sm"
                    src="https://randomuser.me/portraits/women/12.jpg"
                    alt="user image"
                  />
                  <div class="pt-1 text-sm text-gray-400 pl-2">이지원</div>
                </div>
                <div class="pt-1 mt-7 mx-auto text-sm text-gray-500 pl-2">
                  프론트 디자인 및 기능 구현
                </div>
                <div class="absolute left-4/10 mt-7 text-gray-600 pl-8">X</div>
              </div>
            </div>

            <div class="pb-3 flex space-x-2">
              <div class="flex space-x-8">
                <div class="relative mt-5 mb-2 ml-5 w-12 h-12">
                  <img
                    class="rounded-full border border-gray-100 shadow-sm"
                    src="https://randomuser.me/portraits/men/3.jpg"
                    alt="user image"
                  />
                  <div class="pt-1 text-sm text-gray-400 pl-2">최영찬</div>
                </div>
                <div class="pt-1 mt-7 mx-auto text-sm text-gray-500 pl-2">
                  서버 관리 및 백앤드 기능 구현
                </div>
                <div class="absolute left-4/10 mt-7 text-gray-600 pl-8">X</div>
              </div>
            </div>

            <div class="pb-3 flex space-x-2">
              <div class="flex space-x-8">
                <div class="relative mt-5 mb-2 ml-5 w-12 h-12">
                  <img
                    class="rounded-full border border-gray-100 shadow-sm"
                    src="https://randomuser.me/portraits/women/5.jpg"
                    alt="user image"
                  />
                  <div class="pt-1 text-sm text-gray-400 pl-2">신유진</div>
                </div>
                <div class="pt-1 mt-7 mx-auto text-sm text-gray-500 pl-2">
                  프론트 디자인 및 기능 구현
                </div>
                <div class="absolute left-4/10 mt-7 text-gray-600 pl-8">X</div>
              </div>
            </div>

            <div class="pb-3 flex space-x-2">
              <div class="flex space-x-8">
                <div class="relative mt-5 mb-2 ml-5 w-12 h-12">
                  <img
                    class="rounded-full border border-gray-100 shadow-sm"
                    src="https://randomuser.me/portraits/men/44.jpg"
                    alt="user image"
                  />
                  <div class="pt-1 text-sm text-gray-400 pl-2">김혁준</div>
                </div>
                <div class="pt-1 mt-7 mx-auto text-sm text-gray-500 pl-2">
                  Edit...
                </div>
                <div class="absolute left-4/10 mt-7 text-gray-600 pl-8">X</div>
              </div>
            </div>

            <div class="w-full md:w-1/2 mx-auto pt-10 flex space-x-2">
              <Nuser class="w-10 h-8" />
              <button class="font-eltest pl-5 text-gray-500">
                Add new Member
              </button>
            </div>
          </div>

          <div className="middle">
            <div class="mr-5 w-0.25 h-4/5 bg-gray-200"></div>
          </div>

          <div className="right" class="flex-1">
            <div class="font-thin ml-8 mt-2 text-gray-400 text-base">
              {" "}
              Leader{" "}
            </div>
            <div class="flex space-x-16">
              <div class="relative mt-5 mb-2 ml-5 w-24 h-24">
                <img
                  class="rounded-full border border-gray-100 shadow-sm"
                  src="https://randomuser.me/portraits/men/40.jpg"
                  alt="user image"
                />
                <div class="pt-1 font-medium text-base text-purple-400 pl-7 pt-2">
                  박상호
                </div>
              </div>
              <div class="p-4 w-full md:w-1/2 mx-auto">
                <button
                  class="bg-purple-100 mt-3 hover:bg-purple-200 w-full text-purple-500 font-medium py-2 rounded shadow-sm hover:shadow-xl transition duration-200"
                  type="submit"
                >
                  사다리 타기를 통해 조장 정하기
                </button>
                <button
                  class="bg-purple-100 mt-3 hover:bg-purple-200 w-full text-purple-500 font-medium py-2 rounded shadow-sm hover:shadow-xl transition duration-200"
                  type="submit"
                >
                  투표를 통해 조장 정하기
                </button>
              </div>
            </div>
            <div class="mx-auto mt-10 w-full h-0.25 bg-gray-200"></div>
          </div>
        </div>

        <div class="p-4 w-full md:w-1/3 mx-auto">
          <button
            class="bg-purple-300 mt-3 hover:bg-purple-400 w-full left-1/2 text-white font-medium py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeamEdit;
