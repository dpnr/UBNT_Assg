var React = require('react');
import styled from 'styled-components';
import {Panel,ItemContainer} from './LeftPanel.Style';

class LeftPanel extends React.Component {
    render(){
        return(
            <Panel>
                <ItemContainer>
                    left Panel   
                </ItemContainer> 
            </Panel>
        )
    }
}

module.exports = LeftPanel;