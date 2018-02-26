var React = require('react');
import styled from 'styled-components';
import {Panel,ItemHeading,Options,Select,SubPanel,Label,Bottom,Cancel,Buttons,Save,Container,Span} from './RightPanel.Style';


function PowerOptions(props){
    return(
        
        <SubPanel>
            <Select 
            onChange = {props.update}
            value = {props.value}>
                <option value="high">High(4 dBm)</option>
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
                <Options onChange = {props.update} type="radio" value="2.4" checked = {props.value === "2.4"} />  <Span> 2.4 GHz </Span> 
            </Label>
            <Label>
                <Options onChange = {props.update} type="radio" value="5" checked = {props.value === "5"}/>  <Span> 5 GHz </Span>
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
        this.restoreValues = this.restoreValues.bind(this);
    }

    restoreValues(){
        this.setState(function(){
            return {
                power: this.props.savedPower,
                frequency: this.props.savedFreq
            }
        })
    }

    powerChange(event){
        event.preventDefault();
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
                    update = {this.powerChange.bind(null)}
                    value = {this.state.power}/>
                    <br/>
                    <ItemHeading>Radio:</ItemHeading>
                    <FreqButtons 
                    update = {this.freqChange.bind(null)} 
                    value = {this.state.frequency}/>
                    
                    <Bottom>
                        
                        <Buttons>
                            <Save 
                                className='btn btn-primary'
                                onClick = {this.props.onSave.bind(null,this.state.power,this.state.frequency)}>
                                SAVE
                            </Save>
                            
                            <Cancel 
                                className='btn btn-primary'
                                onClick = {this.restoreValues.bind(null)}>
                                CANCEL
                            </Cancel>

                        </Buttons>
                    </Bottom>

            </Panel>
        )
    }
}

module.exports = RightPanel;