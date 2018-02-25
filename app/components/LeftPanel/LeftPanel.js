var React = require('react');
import styled from 'styled-components';
import {Panel,ItemContainer} from './LeftPanel.Style';
var path = require('path');
import Device from '../../assets/dragger.png';
import Draggable from 'react-draggable';
import {Range,Image} from './LeftPanel.Style';


class LeftPanel extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Panel>
                <Draggable
                    
                    axis="both"
                    handle=".handle"
                    bounds="parent"
                    defaultPosition={{x: 0, y: 0}}
                    position={null}
                    grid={[25, 25]}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    
                    <Range className="handle" coverage = {this.props.coverage}>
                        <Image
                        src = {Device}
                        alt = 'Image of a device'
                        />
                    </Range>

                    
                    
                </Draggable>
                <svg>
                        <circle cx="15" cy="15" r="10" fill="red" />
                </svg>
                
            </Panel>
        )
    }
}

module.exports = LeftPanel;