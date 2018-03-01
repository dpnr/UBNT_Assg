var React = require('react');
var LeftPanel = require('./LeftPanel/LeftPanel');
var RightPanel = require('./RightPanel/RightPanel');


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            power: 'high',
            frequency: '2.4',
            coverage: this.getCoverage('high','2.4')
        }

        this.updateValues = this.updateValues.bind(this);
        this.getCoverage = this.getCoverage.bind(this);
    }

    getCoverage(pow,freq){
        // Have to write the math logic here
        let powerMap = {'high':4,'medium':-6,'low':-16}
        let freqMap = {'2.4':2.4,'5':5}
        let power = powerMap[pow];
        let frequency = freqMap[freq];

        let d = Math.pow(10,((power+80 - (92.45 + (20* Math.log10(frequency)) ))/20));
        
        let range = 67 + d*Math.pow(10,3); //70px is the radius in pixels occupied by the device
        console.log('Range of coverage in meters:');
        console.log(range-67);

        //calculate the value here


        return 2*range;
    }
    updateValues(pow,freq){
        this.setState(function(){
            return {power: pow,
                    frequency: freq,
                    coverage: this.getCoverage(pow,freq)}
        })
    }

    render(){
        return(
            <div >
                <LeftPanel 
                coverage = {this.state.coverage}/>
                <RightPanel 
                onSave = {this.updateValues}
                savedPower = {this.state.power}
                savedFreq = {this.state.frequency} />
            
            </div>
        )
    }
}


module.exports = App;