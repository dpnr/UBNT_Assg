var React = require('react');
import styled from 'styled-components';
import {Panel,ItemHeading,Options,Select,SubPanel,Label,Bottom,Cancel,Buttons,Save} from './RightPanel.Style';

function PowerOptions(){
    return(
        
        <SubPanel>
            <Select >
                <option defaultValue value="high">High(4dBm)</option>
                <option value="medium">Medium(-6dBm)</option>
                <option value="low">Low(-16dBm)</option>
            </Select>
        </SubPanel>
        
    )
}

function FreqButtons(props){
    return(
        <div className = 'column'>
            <Label>
                <Options type="radio" name="freq" value="2.4" defaultChecked /> 2.4 GHZ 
            </Label>
            <Label>
                <Options type="radio" name="freq" value="5" /> 5 GHZ 
            </Label>        
        </div>
    )
}

class RightPanel extends React.Component {
    render(){
        return(
            <Panel>
                
                    <ItemHeading>TX power:</ItemHeading>
                    <PowerOptions />
                    <br/>
                    <ItemHeading>Radio:</ItemHeading>
                    <FreqButtons />
                <Bottom>
                    
                    <Buttons>
                        <Save 
                        className='btn btn-primary'>
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