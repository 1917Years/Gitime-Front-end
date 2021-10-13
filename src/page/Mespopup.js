function MesPopup(props) {
  return (
    <div className="header" class="font-test">
      <div class="relative bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <div class="pb-5">
          Chatting with Team members💬
          <button class="relative left-20 pl-8 ml-14 text-gray-400">X</button>
        </div>

        <div class="absolute left-9/10 mr-5 w-1 h-1/2 border-4 border-opacity-10 border-purple-400"></div>
        <div class="pb-3 flex space-x-2">
          <div class="relative w-12 h-12">
            <img
              class="rounded-full border border-gray-100 shadow-sm"
              src="https://randomuser.me/portraits/men/40.jpg"
              alt="user image"
            />
            <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
          </div>
          <div class="text-sm text-purple-400 pl-2">
            박상호
            <div class="text-xs mt-1 text-gray-400 pl-2">
              저희 회의 시작할까요? 하하하
            </div>
          </div>
          <div class="absolute left-3/4 text-xs mt-1 text-gray-300 pl-8">
            15:30
          </div>
        </div>

        <div class="pb-3 flex space-x-2">
          <div class="relative w-12 h-12">
            <img
              class="rounded-full border border-gray-100 shadow-sm"
              src="https://randomuser.me/portraits/women/12.jpg"
              alt="user image"
            />
            <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
          </div>
          <div class="text-sm text-purple-400 pl-2">
            이지원
            <div class="text-xs mt-1 text-gray-400 pl-2">넵!</div>
          </div>
          <div class="absolute left-3/4 text-xs mt-1 text-gray-300 pl-8">
            15:30
          </div>
        </div>

        <div class="pb-3 flex space-x-2">
          <div class="relative w-12 h-12">
            <img
              class="rounded-full border border-gray-100 shadow-sm"
              src="https://randomuser.me/portraits/men/3.jpg"
              alt="user image"
            />
            <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-gray-300 z-2"></div>
          </div>
          <div class="text-sm text-purple-400 pl-2">
            최영찬
            <div class="text-xs mt-1 text-gray-400 pl-2">싫어요;;;</div>
          </div>
          <div class="absolute left-3/4 text-xs mt-1 text-gray-300 pl-8">
            15:30
          </div>
        </div>
        <div class="pb-3 flex space-x-2">
          <div class="relative w-12 h-12">
            <img
              class="rounded-full border border-gray-100 shadow-sm"
              src="https://randomuser.me/portraits/women/5.jpg"
              alt="user image"
            />
            <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-300 z-2"></div>
          </div>
          <div class="text-sm text-purple-400 pl-2">
            신유진
            <div class="text-xs mt-1 text-gray-400 pl-2">
              영찬님.. 다같이 있는 방인데 매너 지키는 게 어떨까요? :)
            </div>
          </div>
          <div class="absolute left-3/4 text-xs mt-1 text-gray-300 pl-8">
            15:30
          </div>
        </div>

        <div class="pb-3 flex space-x-2">
          <div class="relative w-12 h-12">
            <img
              class="rounded-full border border-gray-100 shadow-sm"
              src="https://randomuser.me/portraits/men/44.jpg"
              alt="user image"
            />
            <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-red-400 z-2"></div>
          </div>
          <div class="text-sm text-purple-400 pl-2">
            김혁준
            <div class="text-xs mt-1 text-gray-400 pl-2">
              ㅋㅋㅋㅋㅋㅋㅋㅋㅋ
            </div>
          </div>
          <div class="absolute left-3/4 text-xs mt-1 text-gray-300 pl-8">
            15:30
          </div>
        </div>
        <input
          type="text"
          class="border mt-5 rounded border-opacity-50 w-full text-gray-700 border-purple-400 transition duration-500 px-1 pb-1 shadow"
        />
        <button
          class="bg-purple-300 mt-3 hover:bg-purple-400 w-full text-white font-medium py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
          type="submit"
        >
          보내기
        </button>
      </div>
    </div>
  );
}

export default MesPopup;
