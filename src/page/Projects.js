import React from 'react';
import { Link } from 'react-router-dom'


const testdata =[       // 샘플데이터
    {
        id : 1,
        title : "avcd",
        description : "front",
        date : "2021-10-23"
    },
    {
        id : 2,
        title : "pop",
        description : "front",
        date : "2021-10-23"
    },
    {
        id : 3,
        title : "avcd",
        description : "back",
        date : "2021-10-23"
    },
    {
        id : 4,
        title : "noting to report",
        description : "report",
        date : "2021-10-23"
    }
];


function ProjectData({listData}){
    return(
        <li >
            <a class="block hover:bg-gray-50 dark:hover:bg-gray-900 ">
                <div class="px-4 py-4 sm:px-6">
                    <div class="flex items-center justify-between">
                        <p class="text-md text-gray-700 dark:text-white md:truncate text-4xl">
                            <Link to={"/Dashboard"}>{listData.title}</Link>
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
                                {listData.description}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </li>
    )
}



class ProjectList extends React.Component{

    render(){
        /*
        const rows = [];
        
        this.props.listData.forEach((listData) => {
            rows.push(
                <TodoListData data = {listData} key = {listData.id}/>
            )
        });
        */
        return(
            <ul class="divide-y divide-gray-200 space-y-2">
                {this.props.listData.map (data => (
                    <ProjectData listData = {data} key = {data.id}/>
                ))}
            </ul>
        );
    }
}

export default class Projects extends React.Component {
    render(){
        return(
            <div class="px-4 py-5 border-b rounded-t sm:px-6">
                <div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
                    
                     <ProjectList listData = {testdata}/>


                </div>
            </div> 
        )
    }
}
  