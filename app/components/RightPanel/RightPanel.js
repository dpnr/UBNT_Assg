var React = require('react');
import styled from 'styled-components';
import {Panel,ItemHeading,Options,Select,SubPanel,Label,Bottom,Cancel,Buttons,Save,Container,Span} from './RightPanel.Style';


function PowerOptions(props){
    return(
        
        <SubPanel>
            <Select 
            onChange = {props.update}>
                <option defaultValue value="high">High(4 dBm)</option>
                <option value="medium">Medium(-6 dBm)</option>
                <option value="low">Low(-16 dBm)</option>
            </Select>
        </SubPanel>
        
    )
}

function FreqButtons(props){
    return(
        <Container>
            <Label>
                <Options onChange = {props.update} type="radio" name="freq" value="2.4" defaultChecked />  <Span> 2.4 GHZ </Span> 
            </Label>
            <Label>
                <Options onChange = {props.update} type="radio" name="freq" value="5" />  <Span> 5 GHZ </Span>
            </Label>        
        </Container>
    )
}

class RightPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            power: 'high',
            frequency: '2.4'
        }

        this.powerChange = this.powerChange.bind(this);
        this.freqChange = this.freqChange.bind(this);
    }

    powerChange(event){
        var newPower = event.target.value;
        this.setState(function(){
            return {power: newPower};
        })
    }

    freqChange(event){
        var newFreq = event.target.value;
        this.setState(function(){
            return {frequency: newFreq};
        })
    }

    render(){
        return(
            <Panel>
                
                    <ItemHeading>TX power:</ItemHeading>
                    <PowerOptions 
                    update = {this.powerChange.bind(null)}/>
                    <br/>
                    <ItemHeading>Radio:</ItemHeading>
                    <FreqButtons 
                    update = {this.freqChange.bind(null)} />
                    
                    <Bottom>
                        
                        <Buttons>
                            <Save 
                            className='btn btn-primary'
                            onClick = {this.props.onSave.bind(null,this.state.power,this.state.frequency)}>
                            SAVE
                            </Save>
                            
                            <Cancel 
                            className='btn btn-primary'>
                            CANCEL
                            </Cancel>
                        </Buttons>
                    </Bottom>

            </Panel>
        )
    }
}

module.exports = RightPanel;