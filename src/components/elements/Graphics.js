import React, { Component } from "react"
import {Bar,Line,Pie,Radar,Bubble,Doughnut} from 'react-chartjs-2'

class Graphics extends Component{
constructor(props){
    super(props);
    this.state = {
        chartData:{
            labels:['Deposits','Stocks','Sundaymarketplace'],
            datasets:[{
                barPercentage: 0,
                offset:true,
                barThickness: 2,
                maxBarThickness: 8,
                minBarLength: 20,
                data: [0.9, 1.9, 3.5],
                    backgroundColor:[
                        '#2b4957',
                        '#2b4957',
                        '#2b4957'
                    ]
            }]
        }
    }
}
render(){
    return(
        <div className="chart">
            <Bar
            data={this.state.chartData}
            options={{
                backgroundColor:{
                    color:'red'
                },
                title:{
                    display:true,
                    text:'Make your money work for you.',
                    fontSize:25
                },
                legend:{
                    display:false,
                    position:'right',
                    fontSize:25
                },
                
            }}
            width={100}
            height={55}
            options={{
                
                
            }}
            
            />
        </div>
        
    )
}
}
    

export default Graphics;