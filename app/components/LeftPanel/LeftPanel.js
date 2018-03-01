var React = require('react');
import styled from 'styled-components';
import {Panel,ItemContainer} from './LeftPanel.Style';
var path = require('path');
import Device from '../../assets/device.png';
import Draggable from 'react-draggable';
import {Range,Image,Scale} from './LeftPanel.Style';
import {ReactHeight} from 'react-height';

function randRange( minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

function getDistance(gear,client,radius) {

    return Math.sqrt( Math.pow((gear[0]+radius-client[0]),2) + Math.pow((gear[1]+radius-client[1]),2));
}


function PlaceClients(props){
   

    return(
        props.spots.map((item,index)=>
        {
            let distance = getDistance(props.gearPosition,item,props.coverage/2)
            let color = "red"
            
            if(distance <= props.coverage/2){ color = "green"}
            return   <circle key = {index} cx={item[0]} cy={item[1]} r="10" fill={color} />
        }
        )
    )

    //randomly generate 10 (x,y) which fall inside the div
        
}




class LeftPanel extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            gear:[0,0],
            clients:[],
            width: window.innerWidth ,
            height: window.innerHeight
        }

        this.updateResize = this.updateResize.bind(this);
        this.updateGearPosition = this.updateGearPosition.bind(this);
        this.updateClients = this.updateClients.bind(this);
    }

   
    componentDidMount(){
        this.updateResize();
        window.addEventListener('resize',this.updateResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize',this.updateResize);
    }


    updateResize(){

        let radius = 5;
        let plantedAt = [];
        for(let i=0;i<10; i++){
            plantedAt.push([randRange(radius,window.innerWidth-300-radius),randRange(radius,window.innerHeight) ])
        }

        this.setState(function(){
            return { width: window.innerWidth  , height: window.innerHeight, clients: plantedAt}
        })


    }

    updateGearPosition(event){
        let params = event.target.parentNode.style.transform
        params = params.substring(10,params.length-3)
        let x = parseInt(params.substring(0,params.indexOf('p')))
        let y = parseInt(params.substring(params.indexOf('p')+3, params.length ))
        this.setState (function(){
            return {
                gear : [x,y]
                }
            }
        )
        
    }

    updateClients(spots){
        this.setState = function(){
            return {
                clients: spots
            }
        }
    }


    render(){
        return(
            
            <Panel>
                
                <Draggable
                    
                    axis="both"
                    handle=".handle"
                    bounds= {{left: 0 , top: -1*this.props.coverage, right:  this.state.width - 300 - this.props.coverage  , bottom: this.state.height}}
                    defaultPosition={{x: 0, y: 0}}
                    position={null}
                    grid={[1, 1]}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.updateGearPosition }>
                    {/* onStop={this.handleStop }> */}
                    
                    <Range  coverage = {this.props.coverage}>
                        <Image className="handle"
                            src = {Device}
                            alt = 'Image of a device'
                            />
                    </Range>

                    
                    
                </Draggable>
                <svg width = {this.state.width-315} height = {this.state.height}>
                <PlaceClients 
                            spots = {this.state.clients}
                            gearPosition = {this.state.gear}
                            coverage = {this.props.coverage}/>
                </svg>

                <Scale> 100m </Scale>
                
            </Panel>
            
        )
    }
}

module.exports = LeftPanel;