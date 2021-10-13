import React from "react";
import "animate.css";
import { getCookie } from "../utils/cookie";

function Mainpage(props) {
  console.log(props);
  console.log(getCookie("token"));

  return (
    <div class="text-gray-800 antialiased z-1">
      <main>
        <div
          class="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{ minHeight: "75vh" }}
        >
          <div class="absolute top-0 w-full h-full bg-center bg-cover">
            <video
              autoPlay
              muted
              loop
              playsInline
              width="100%"
              height="80%"
              class=""
              src="/Book.mp4"
              type="video/mp4"
            ></video>
          </div>

          <div class="container relative mx-auto">
            <div class="items-center flex flex-wrap">
              <div class="font-quiche w-full lg:w-7/12 mt-44 px-2 ml-auto mr-auto text-center">
                <div class="pr-12">
                  <h1 class="animate__animated animate__backInUp text-white font-semibold text-5xl">
                    Your Project starts with Gitime.
                  </h1>
                  <p class="animate__animated animate__fadeIn mt-4 font-test text-lg text-gray-300">
                    한 번의 클릭으로 깃허브의 모든 프로젝트를 관리하세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0px)" }}
          >
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            ></svg>
          </div>
        </div>
        <section class="mt-40 pb-20 bg-bg2">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap">
              <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i class="fas fa-award"></i>
                    </div>
                    <h6 class="font-test text-2xl font-semibold">
                      더욱 편리하게👍
                    </h6>
                    <p class="font-ltest mt-2 mb-4 text-gray-600">
                      Gitime 내의 컴파일 기능을 통해 코드의 에러를 바로
                      확인하세요.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i class="fas fa-retweet"></i>
                    </div>
                    <h6 class="font-test text-2xl font-semibold">
                      모든 것을 한눈에👁‍🗨
                    </h6>
                    <p class="font-ltest mt-2 mb-4 text-gray-600">
                      대시보드를 통해 프로젝트의 전반적인 프로세스를 한눈에
                      확인하세요. 일정, 할일, 진행률, 게시판 등 다양한 기능과
                      함께하세요!
                    </p>
                  </div>
                </div>
              </div>
              <div class="pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i class="fas fa-fingerprint"></i>
                    </div>
                    <h6 class="font-test text-2xl font-semibold">
                      의사소통을 빠르게💬
                    </h6>
                    <p class="font-ltest mt-2 mb-4 text-gray-600">
                      메시지와 화상 통화를 통해 별도의 이동 없이 빠르게 연락을
                      주고 받으세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap items-center mt-32">
              <div class="w-full md:w-6/12 px-4 mr-auto ml-auto">
                <div class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-300"></div>
                <h3 class="z-40 font-test text-3xl mb-2 font-semibold leading-normal">
                  Gitime와 함께라면, 프로젝트 관리가 쉬워질 거예요.
                </h3>
                <p class="font-test text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  더이상 프로젝트와 관련된 업무들을 분산된 곳에서 처리할 필요가
                  없어요. 업무들을 한 눈에 보기 쉽게 제공하는 Gitime만의
                  대시보드를 통해, 통합된 업무 관리 서비스를 시작해보세요.
                </p>
                <p class="font-test text-lg font-light leading-relaxed mt-0 mb-8 text-gray-700">
                  가입과 연동이라는 간단한 과정만으로도 모든 기능을 이용할 수
                  있어요. 가입해 Gitime와 함께하세요!
                </p>
                <a
                  href="https://github.com/abhinavs/cookie"
                  class="font-bold text-gray-500 px-8 py-4 rounded-md bg-gray-50 hover:bg-gray-400 hover:text-gray-50"
                >
                  Check Cookie!
                </a>
              </div>
              <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div class="relative flex flex-col min-w-0 break-words bg-gray-300 w-full mb-6 shadow-lg rounded-lg bg-bg3">
                  <img
                    alt="..."
                    src="https://media.discordapp.net/attachments/874660081160044625/890232102380007474/code-1076536_1280.webp?width=698&height=392"
                    class="w-full align-middle rounded-t-lg"
                  />
                  <blockquote class="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      class="absolute left-0 w-full block"
                      style={{ height: "95px", top: "-94px" }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        class="text-bg3 fill-current"
                      ></polygon>
                    </svg>
                    <h4 class="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p class="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="relative py-20 bg-bg4">
          <div
            class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px", transform: "translateZ(0px)" }}
          >
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-bg4 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div class="container mx-auto px-4">
            <div class="items-center flex flex-wrap">
              <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  class="max-w-full rounded-lg shadow-lg"
                  src="./assets/img/section2.jpeg"
                />
              </div>
              <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div class="md:pr-12">
                  <div class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i class="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 class="text-3xl font-semibold">A growing company</h3>
                  <p class="mt-4 text-lg leading-relaxed text-gray-600">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul class="list-none mt-6">
                    <li class="py-2">
                      <div class="flex items-center">
                        <div>
                          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i class="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 class="text-gray-600">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <div>
                          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i class="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 class="text-gray-600">Amazing page examples</h4>
                        </div>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <div>
                          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i class="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 class="text-gray-600">Dynamic components</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font bg-bg4">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                  Shooting Stars
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                  The Catalyzer
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
            </div>
            <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                  The 400 Blows
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <button class="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </div>
        </section>
        <section class="pb-20 relative block bg-gray-900">
          <div
            class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px", transform: "translateZ(0px)" }}
          >
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div class="flex flex-wrap text-center justify-center">
              <div class="w-full lg:w-6/12 px-4">
                <h2 class="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div class="flex flex-wrap mt-12 justify-center">
              <div class="w-full lg:w-3/12 px-4 text-center">
                <div class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-gray-300 inline-flex items-center justify-center">
                  <i class="fas fa-medal text-xl"></i>
                </div>
                <h6 class="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p class="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div class="w-full lg:w-3/12 px-4 text-center">
                <div class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i class="fas fa-poll text-xl"></i>
                </div>
                <h5 class="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p class="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div class="w-full lg:w-3/12 px-4 text-center">
                <div class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i class="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 class="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p class="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="relative block py-24 lg:pt-0 bg-gray-900">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div class="flex-auto p-5 lg:p-10">
                    <h4 class="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div class="relative w-full mb-3 mt-8">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Full Name"
                        style={{ transition: "all 0.15s ease 0s" }}
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Email"
                        style={{ transition: "all 0.15s ease 0s" }}
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Type a message..."
                      ></textarea>
                    </div>
                    <div class="text-center mt-6">
                      <button
                        class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all 0.15s ease 0s" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">Tailblocks</span>
            </a>
            <p class="mt-2 text-sm text-gray-500">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">
              © 2020 Tailblocks —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                class="text-gray-600 ml-1"
                target="_blank"
              >
                @knyttneve
              </a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>

    /*
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
      </div>
    */
  );
}

export default Mainpage;
