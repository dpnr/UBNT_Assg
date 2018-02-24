var React = require('react');
var LeftPanel = require('./LeftPanel/LeftPanel');
var RightPanel = require('./RightPanel/RightPanel');

class App extends React.Component{
    render(){
        return(
            <div >
                <LeftPanel />
                <RightPanel />
            
            </div>
        )
    }
}


module.exports = App;