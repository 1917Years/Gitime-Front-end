import React from "react";
import "animate.css";
import { getCookie } from "../utils/cookie";

function Mainpage(props) {
  console.log(props);
  console.log(getCookie("token"));

  return (
    <div className="header">
      <div className="relative">
        <div class="whitespace-normal text-shadow-md font-semibold absolute fixed left-28 bottom-36 transform -translate-x-8 -translate-y-1/2 text-white z-10">
          <div class="animate__animated animate__fadeInUp font-quiche">
            <a class="text-8xl">gitime</a>
            <div class="mt-5 text-lg">
              <div>
                "Coming together is a beginning. Keeping together is progress.
                <div></div>
                Working together is success." -Henry Ford.
                <div></div>
                Develop anything, with our Gitime, and your team members.
                <div></div>
                It's "Time" to develop anything with "Git" Dashboard Service.
              </div>
            </div>
          </div>
        </div>

        <video
          autoPlay
          muted
          loop
          playsInline
          width="100%"
          height="100%"
          class=""
          src="/Book.mp4"
          type="video/mp4"
        ></video>
      </div>

      <button
        onClick={() => {
          props.history.push("/login");
        }}
        class="text-xl font-bold fixed right-1 bottom-1 rounded-full h-24 w-24 shadow-lg hover:shadow-xl"
      >
        <img src="/login1.png"></img>
      </button>

      <section class="bg-gradient-to-b from-bg1">
        <div class="py-10 font-test w-max relative top-1/2 left-1/2 transform -translate-x-1/2">
          <div class="text-white font-semibold text-3xl">더욱 편리하게.</div>
          <div class="mt-3 mb-7 text-gray-500">
            GDP 내의 컴파일 기능을 통해 코드의 에러를 바로 확인하세요.
          </div>
          <img src="https://media.discordapp.net/attachments/874660081160044625/889471029276213268/work-731198_960_720.png?width=1000&height=400" />
          <div class="font-semibold mt-20 text-3xl">모든 것을 한눈에.</div>
          <div class="mt-3 mb-7 text-gray-500">
            대시보드를 통해 프로젝트의 전반적인 프로세스를 한눈에 확인하세요.
            일정, 할일, 진행률 등 다양한 기능과 함께하세요!
          </div>
          <img src="https://media.discordapp.net/attachments/874660081160044625/889470805396832286/maximilien-t-scharner-GExOn1lUED0-unsplash.jpg?width=1000&height=400" />
          <div class="font-semibold mt-20 text-3xl">의사소통을 빠르게.</div>
          <div class="mt-3 mb-7 text-gray-500">
            메시지와 화상 통화를 통해 이동 없이 빠르게 연락을 주고 받으세요.
          </div>
          <img src="https://media.discordapp.net/attachments/874658668434583658/889033174322126858/mike-erskine-S_VbdMTsdiA-unsplash.jpg?width=1000&height=400" />
        </div>
      </section>
      {/* <section class="bg-white dark:bg-gray-800">
        <nav class="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
          <div class="flex items-center justify-between">
            <div>
              <a
                class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                href="#"
              >
                Brand
              </a>
            </div>

            <div class="flex lg:hidden">
              <button
                type="button"
                class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="flex flex-col mt-4 space-y-2 lg:mt-0 lg:flex-row lg:space-x-16 lg:space-y-0">
            <a
              class="text-gray-700 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
              href="#"
            >
              Home
            </a>
            <a
              class="text-gray-700 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
              href="#"
            >
              Components
            </a>
            <a
              class="text-gray-700 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
              href="#"
            >
              Pricing
            </a>
            <a
              class="text-gray-700 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
              href="#"
            >
              Contact
            </a>
          </div>

          <a
            class="block px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto"
            href="#"
          >
            Get started
          </a>
        </nav>

        <div class="container px-6 py-16 mx-auto text-center">
          <div class="max-w-lg mx-auto">
            <h1 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Building Your Next App with our Awesome components
            </h1>
            <p class="mt-6 text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              similique obcaecati illum mollitia.
            </p>
            <button class="px-6 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 md:mx-0 md:w-auto focus:outline-none">
              Start 14-Day free trial
            </button>
            <p class="mt-3 text-sm text-gray-400 ">No credit card required</p>
          </div>

          <div class="flex justify-center mt-10">
            <div class="w-full h-64 bg-blue-600 rounded-xl md:w-4/5"></div>
          </div>
        </div>
      </section>

      <section class="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
        <div class="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div class="lg:w-1/2">
            <div
              class="h-64 bg-cover lg:rounded-lg lg:h-full"
              // style="background-image:url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')"
            ></div>
          </div>

          <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
              Build Your New{" "}
              <span class="text-indigo-600 dark:text-indigo-400">Idea</span>
            </h2>
            <p class="mt-4 text-gray-600 dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </p>

            <div class="mt-8">
              <a
                href="#"
                class="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Mainpage;
