import React from "react";

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
];

function TodoListData({ listData }) {
  return (
    <li>
      <a class="block hover:bg-gray-50 dark:hover:bg-gray-900">
        <div class="px-4 py-4 sm:px-6">
          <div class="flex items-center justify-between">
            <p class="text-md text-gray-700 dark:text-white md:truncate">
              {listData.title}
            </p>
            <div class="ml-2 flex-shrink-0 flex">
              <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {listData.tag}
              </p>
            </div>
          </div>
          <div class="mt-2 sm:flex sm:justify-between">
            <div class="sm:flex">
              <p class="flex items-center text-md font-light text-gray-500 dark:text-gray-300">
                {listData.date}
              </p>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}

class TodoList extends React.Component {
  render() {
    return (
      <ul class="divide-y divide-gray-200">
        {this.props.listData.map((data) => (
          <TodoListData listData={data} key={data.id} />
        ))}
      </ul>
    );
  }
}

export default class Todo extends React.Component {
  render() {
    return (
      <div class="px-4 py-5 border-b rounded-t sm:px-6">
        <div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
          <TodoList listData={testdata} />

          <div class="p-4 w-full md:w-1/2 mx-auto">
            <button
              type="button"
              class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              View all
            </button>
          </div>
        </div>
      </div>
    );
  }
}
