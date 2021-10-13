import React, { useEffect, useRef } from 'react';
import "./Dashboard.css";

class CircularProgressBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      // Size of the enclosing square
      const sqSize = this.props.sqSize;
      // SVG centers the stroke width on the radius, subtract out so circle fits in square
      const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
      
      // Enclose cicle in a circumscribing square
      const viewBox = '0 0 ${sqSize} ${sqSize}';

      // Arc length at 100% coverage is the circle circumference
      const dashArray = radius * Math.PI * 2;
      // Scale 100% coverage overlay with the actual percent
      const dashOffset = dashArray - dashArray * this.props.percentage / 100;
  
      return (
        <div class="grid justify-items-center">
            <svg
                width={this.props.sqSize}
                height={this.props.sqSize}
                viewBox={viewBox}
                >
                
                <circle 
                className="circle-background"
                cx={this.props.sqSize / 2}
                cy={this.props.sqSize / 2}
                r={radius}
                strokeWidth={'${this.props.strokeWidth}px'} />

                <circle
                className="circle-progress"
                cx={this.props.sqSize / 2}
                cy={this.props.sqSize / 2}
                r={radius}
                strokeWidth={'${this.props.strokeWidth}px'}
                // Start progress marker at 12 O'Clock
                transform={'rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})'}
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset
                }} />
                
                <text
                className="circle-text"
                x="50%"
                y="50%"
                dy=".3em"
                textAnchor="middle">
                {`${this.props.percentage}%`}
                </text>

                <text
                className="circle-text2"
                x="50%"
                y="70%"
                dy=".3em"
                textAnchor="middle">
                {'Tasks completed'}
                </text>    
                </svg>
            </div>
      );
    }
  }
  
  CircularProgressBar.defaultProps = {
    sqSize: 100,
    percentage: 80,
    strokeWidth: 15
  };



function Dashboard(props)
{

    return(
        
        <div class="font-test" className="header">
            <div className="Dashboard" class="grid grid-cols-5">
                <div className="LeftSide" class="col-span-4 ml-10  mb-10">
                    <div class="pt-5 pl-5 font-ltest text-gray-400">유진님 반가워요, 다시 돌아오신 걸 환영해요! 👋</div>
                    
                    <div class="flex">
                        <div class="flex-grow pl-5 text-3xl font-sbtest text-2xl">Team1 DashBoard Today</div>
                        <button class="bg-red-300 hover:bg-red-400 text-white py-2 px-2 rounded shadow-lg hover:shadow-xl transition duration-200">Browse Code From Git</button>
                    </div>

                    <div class="grid grid-rows-2 grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                            <div className="Weekly" class="grid font-ttest w-full h-full bg-white mx-auto pl-10 md:p-12 my-auto rounded-lg shadow-xl ">
                                <div class="font-sbtest">Weekly Progress</div>
                                <div>Start from Nov 7-14, 2020</div>                                 
                                <div class="mt-10">
                                    <CircularProgressBar
                                    strokeWidth="10"
                                    sqSize="200"/>
                                </div>                           
                            </div>
                            
                            <div className="Develop" class="grid font-ttest w-full h-full bg-white mx-auto pl-10 md:p-12 my-auto rounded-lg shadow-xl">
                                <div class="font-sbtest">Develop Progress</div>
                                
                                <div> 
                                    <div class= "mt-4 grid grid-rows-3 grid-flow-col">
                                        <div class="row-span-3 rounded-lg w-16 h-14 bg-develbg font-sbtest">
                                            <div class="mt-2 pt-2 w-16 h-14 text-center">UI</div>
                                        </div>
                                        <div class="mb-2 col-span-2 text-sm font-test">Web Design</div>
                                        <div class="text-sm font-ltest">Last Update : 2021.09.27</div>
                                    </div>                                 
                                    
                                    <div class= "mt-1 grid grid-rows-3 grid-flow-col">
                                        <div class="row-span-3 rounded-lg w-16 h-14 bg-develbg font-sbtest">
                                            <div class="mt-2 pt-2 w-16 h-14 text-center">Front</div>
                                        </div>
                                        <div class="mb-2 col-span-2 text-sm font-test">Front Server</div>
                                        <div class="text-sm font-ltest">Last Update : 2021.09.27</div>
                                    </div> 
                                    
                                    <div class= "mt-1 grid grid-rows-3 grid-flow-col">
                                        <div class="row-span-3 rounded-lg w-16 h-14 bg-develbg font-sbtest">
                                            <div class="mt-2 pt-2 w-16 h-14 text-center">Back</div>
                                        </div>
                                        <div class="mb-2 col-span-2 text-sm font-test">Back Server</div>
                                        <div class="text-sm font-ltest">Last Update : 2021.09.27</div>
                                    </div>                                   
                                </div> 

                            </div>
                            
                            <div className="Reference" class="row-span-2 grid font-ttest w-full h-full relative bg-white mx-auto pl-10 md:p-12 my-auto rounded-lg shadow-xl">
                                3
                            </div>

                            <div className="Todo" class="grid font-ttest w-full h-full relative bg-white mx-auto pl-10 md:p-12 my-auto rounded-lg shadow-xl">
                                4
                            </div>

                        
                        <div className="Calendar" class="grid font-ttest w-full h-full relative bg-white mx-auto pl-10 md:p-12 my-auto rounded-lg shadow-xl">
                                5
                        </div>
                        <div className="Console" class="col-span-3 grid font-ttest w-full relative bg-white mx-auto pl-10 md:p-12 my-auto rounded-lg shadow-xl">
                        Console
                        </div>
                    </div>
            </div>

                <div className="RightSide" class="col-span-1 bg-rightbar ml-10">
                    <div class="font-sbtest">Upcoming</div>
                </div>
                

            </div>
        </div>
    );

}

export default Dashboard;