function TeamForm(props)
{
    return(
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
                            <img class="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/portraits/men/40.jpg" alt="user image" />
                        </div>
                        <div class="relative mt-5 mb-2 ml-5 w-6 h-6">
                            <img class="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/portraits/women/12.jpg" alt="user image" />
                        </div>
                        <div class="relative mt-5 mb-2 ml-5 w-6 h-6">
                            <img class="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/portraits/men/3.jpg" alt="user image" />
                        </div>
                        <div class="relative mt-5 mb-2 ml-5 w-6 h-6">
                            <img class="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/portraits/women/5.jpg" alt="user image" />
                        </div>
                        <div class="relative mt-5 mb-2 ml-5 w-6 h-6">
                            <img class="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/portraits/men/44.jpg" alt="user image" />
                        </div>
                        <div class="font-thin pl-3 mt-5 text-gray-400 text-xs"> 5 members </div>
                    </div>
                </div>

                <div class="font-btest font-bold text-black text-2xl"> 델리만쥬 </div>
                <div class="font-thin mt-2 text-gray-400 text-base"> Participants List </div>

                <div class="flex space-x-2">
                    <div class="font-thin mt-5 ml-5 text-gray-300 text-sm"> Profile </div>
                    <div class="font-thin mt-5 pl-10 text-gray-300 text-sm"> Role </div>
                </div>
    
                <div class="pb-3 flex space-x-2">
                    <div class="flex space-x-8">
                        <div class="relative mt-5 mb-2 ml-5 w-12 h-12">
                            <img class="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/portraits/men/40.jpg" alt="user image" />
                            <div class="pt-1 text-sm text-purple-400 pl-2">박상호</div>
                        </div>
                        <div class="pt-1 mt-7 mx-auto text-sm text-gray-500 pl-2">서버 관리 및 백앤드 기능 구현</div>
                        <div class="font-thin mt-8 text-xs text-purple-300">Leader</div>
                    </div>
                </div>

                <div class="pb-3 flex space-x-2">
                    <div class="flex space-x-8">
                        <div class="relative mt-5 mb-2 ml-5 w-12 h-12">
                            <img class="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/portraits/women/12.jpg" alt="user image" />
                            <div class="pt-1 text-sm text-gray-400 pl-2">이지원</div>
                        </div>
                        <div class="pt-1 mt-7 mx-auto text-sm text-gray-500 pl-2">프론트 디자인 및 기능 구현</div>
                    </div>
                </div>

                <div class="pb-3 flex space-x-2">
                    <div class="flex space-x-8">
                        <div class="relative mt-5 mb-2 ml-5 w-12 h-12">
                            <img class="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/portraits/men/3.jpg" alt="user image" />
                            <div class="pt-1 text-sm text-gray-400 pl-2">최영찬</div>
                        </div>
                        <div class="pt-1 mt-7 mx-auto text-sm text-gray-500 pl-2">서버 관리 및 백앤드 기능 구현</div>
                    </div>
                </div>

                <div class="pb-3 flex space-x-2">
                    <div class="flex space-x-8">
                        <div class="relative mt-5 mb-2 ml-5 w-12 h-12">
                            <img class="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/portraits/women/5.jpg" alt="user image" />
                            <div class="pt-1 text-sm text-gray-400 pl-2">신유진</div>
                        </div>
                        <div class="pt-1 mt-7 mx-auto text-sm text-gray-500 pl-2">프론트 디자인 및 기능 구현</div>  
                    </div>               
                </div>
            
                <div class="pb-3 flex space-x-2">
                    <div class="flex space-x-8">
                        <div class="relative mt-5 mb-2 ml-5 w-12 h-12">
                            <img class="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/portraits/men/44.jpg" alt="user image" />
                            <div class="pt-1 text-sm text-gray-400 pl-2">김혁준</div>
                        </div>
                        <div class="pt-1 mt-7 mx-auto text-sm text-gray-500 pl-2">프론트 디자인 및 기능 구현</div>  
                    </div>
                </div>

                <div class="p-4 w-full md:w-1/3 mx-auto">
                    <button class="bg-purple-300 mt-3 hover:bg-purple-400 w-full left-1/2 text-white font-medium py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Edit Team Form</button>
                </div>
            </div>
        </div>
    );
}

export default TeamForm;