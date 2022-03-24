import { Component } from "react";

class Container extends Component{
    constructor(props){
        super(props);
        this.state = {
            power:false,
            bank:true,
            message: "Power off",
            volume: 50
        }
        this.qAudio = this.qAudio.bind(this);
        this.wAudio = this.wAudio.bind(this);
        this.eAudio = this.eAudio.bind(this);
        this.aAudio = this.aAudio.bind(this);
        this.sAudio = this.sAudio.bind(this);
        this.dAudio = this.dAudio.bind(this);
        this.zAudio = this.zAudio.bind(this);
        this.xAudio = this.xAudio.bind(this);
        this.cAudio = this.cAudio.bind(this);
        this.changeBank = this.changeBank.bind(this);
        this.setChange = this.setChange.bind(this);
        this.changePower = this.changePower.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.setVolume = this.setVolume.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this._handleKeyDown = this.handleKeyPress.bind(this);
    }
    handleKeyPress(event){
        console.log("You clicked " + event.keyCode);
        switch (event.keyCode) {
            case 81:
                this.qAudio(event);
                break;
            case 87:
                this.wAudio(event);
                break;
            case 69:
                this.eAudio(event);
                break;
            case 65:
                this.aAudio(event);
                break;
            case 83:
                this.sAudio(event);
                break;
            case 68:
                this.dAudio(event);
                break;
            case 90:
                this.zAudio(event);
                break
            case 88:
                this.xAudio(event);
                break
            case 67:
                this.cAudio(event);
                break               
            default:
                break;
        }
    
    }
    
    // componentWillMount deprecated in React 16.3
    componentDidMount(){
        document.addEventListener("click", this._handleDocumentClick, false);
        document.addEventListener("keydown", this.handleKeyPress);
    }
    
    
    componentWillUnmount() {
        document.removeEventListener("click", this._handleDocumentClick, false);
        document.removeEventListener("keydown", this.handleKeyPress);
    }
    setVolume(power,bank,message,volume){
        this.setState({
            power:power,
            bank:bank,
            message:message,
            volume: volume
        });
    }
    setChange(power,bank,message){
        this.setState({
            power:power,
            bank:bank,
            message:message,
            volume: this.state.volume
        });
    }
    qAudio(e){
        if(this.state.power){
        e.preventDefault();
        if(this.state.bank){
            let url = "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
            let audio = new Audio(url);
            audio.volume = this.state.volume*0.01;
            audio.play();
            this.setChange(true,true,"Heater 1");
        }
        else{
            let url = "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3";
            let audio = new Audio(url);
            audio.volume = this.state.volume*0.01;
            audio.play();
            this.setChange(true,false,"Chord 1");
        }
        }
    }
    wAudio(e){
        if(this.state.power){
        e.preventDefault();
        if(this.state.bank){
            let url = "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
            let audio = new Audio(url);
            audio.volume = this.state.volume*0.01;
            audio.play();
            this.setChange(true,true,"Heater 2");
        }
        else{
            let url = "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3";
            let audio = new Audio(url);
            audio.volume = this.state.volume*0.01;
            audio.play();
            this.setChange(true,false,"Chord 2");
        }
    }
    }
    eAudio(e){
        if(this.state.power){
        e.preventDefault();
        if(this.state.bank){
            let url = "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
            let audio = new Audio(url);
            audio.volume = this.state.volume*0.01;
            audio.play();
            this.setChange(true,true,"Heater 3");
        }
        else{
            let url = "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3";
            let audio = new Audio(url);
            audio.volume = this.state.volume*0.01;
            audio.play();
            this.setChange(true,false,"Chord 3");
        }
    }
    }
    aAudio(e){
        if(this.state.power){
        e.preventDefault();
        if(this.state.bank){
            let url = "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3";
            let audio = new Audio(url);
            audio.volume = this.state.volume*0.01;
            audio.play();
            this.setChange(true,true,"Heater 4");
        }
        else{
            let url = "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3";
            let audio = new Audio(url);
            audio.volume = this.state.volume*0.01;
            audio.play();
            this.setChange(true,false,"Shaker");
        }
    }
    }
    sAudio(e){
        if(this.state.power){
        e.preventDefault();
        if(this.state.bank){
            let url = "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
            let audio = new Audio(url);
            audio.volume = this.state.volume*0.01;
            audio.play();
            this.setChange(true,true,"Clap");
        }
        else{
            let url = "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3";
            let audio = new Audio(url);
            audio.volume = this.state.volume*0.01;
            audio.play();
            this.setChange(true,false,"Open HH");
        }
    }
    }
    dAudio(e){
        if(this.state.power){
        e.preventDefault();
        if(this.state.bank){
            let url = "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
            let audio = new Audio(url);
            audio.volume = this.state.volume*0.01;
            audio.play();
            this.setChange(true,true,"Open HH");
        }
        else{
            let url = "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3";
            let audio = new Audio(url);
            audio.play();
            this.setState({
                power:true,
                bank:false,
                message:"Closed HH"
            });
            this.setChange(true,false,"Closed HH");
        }
    }
    }
    zAudio(e){
        if(this.state.power){
        e.preventDefault();
        if(this.state.bank){
            let url = "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
            let audio = new Audio(url);
            audio.volume = this.state.volume*0.01;
            audio.play();
            this.setChange(true,true,"Kick n'Hat");
        }
        else{
            let url = "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3";
            let audio = new Audio(url);
            audio.volume = this.state.volume*0.01;
            audio.play();
            this.setChange(true,false,"Punchy Kick");
        }
    }
    }
    xAudio(e){
        if(this.state.power){
        e.preventDefault();
        if(this.state.bank){
            let url = "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
            let audio = new Audio(url);
            audio.volume = this.state.volume*0.01;
            audio.play();
            this.setChange(true,true,"Kick");
        }
        else{
            let url = "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3";
            let audio = new Audio(url);
            audio.volume = this.state.volume*0.01;
            audio.play();
            this.setChange(true,false,"Slide kick");
        }
    }
    }
    cAudio(e){
        if(this.state.power){
        e.preventDefault();
        if(this.state.bank){
            let url = "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3";
            let audio = new Audio(url);
            audio.volume = this.state.volume*0.01;
            audio.play();
            this.setChange(true,true,"Closed");
        }
        else{
            let url = "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3";
            let audio = new Audio(url);
            audio.volume = this.state.volume*0.01;
            audio.play();
            this.setChange(true,false,"Snare");
        }
    }
    }
    changeBank(e){
        if(this.state.bank){
            this.setChange(true,false,"Smooth Piano Kit");
        }
        else{
            this.setChange(true,true,"Heater Kit");
        }
        return e;
    }
    changePower(e){
        if(!this.state.power){
            this.setChange(true,true,"Power on");
        }
        else{
            this.setChange(true,true,"Power off");
        }
        return e;
    }
    changeVolume(e){
        this.setVolume(this.state.power,this.state.bank,"Volume is "+ e.target.value,e.target.value);
        }
    render(){
        return (
            
            <div className="container d-flex align-items-center justify-content-center" id="container">
                <div className="container row justify-content-center p-0">
                    <div className="col d-inline-flex">
                        <div className="col d-flex flex-column">
                            <div className="col d-flex flex-row justify-content-center">
                                <div className="p-1">
                                    <button className="btn btn-primary" onClick={this.qAudio} onKeyPress={this.handleKeyPress}>Q</button>
                                </div>
                                <div className="p-1">
                                    <button className="btn btn-primary" onClick={this.wAudio}>W</button>
                                </div>
                                <div className="p-1">
                                    <button className="btn btn-primary" onClick={this.eAudio}>E</button>
                                </div>
                            </div>
                            <div className="col d-flex flex-row justify-content-center">
                                <div className="p-1">
                                    <button className="btn btn-primary" onClick={this.aAudio}>A</button>
                                </div>
                                <div className="p-1">
                                    <button className="btn btn-primary" onClick={this.sAudio}>S</button>
                                </div>
                                <div className="p-1">
                                    <button className="btn btn-primary" onClick={this.dAudio}>D</button>
                                </div>
                            </div>
                            <div className="col d-flex flex-row justify-content-center">
                                <div className="p-1">
                                    <button className="btn btn-primary" onClick={this.zAudio}>Z</button>
                                </div>
                                <div className="p-1">
                                    <button className="btn btn-primary " onClick={this.xAudio}>X</button>
                                </div>
                                <div className="p-1">
                                    <button className="btn btn-primary" onClick={this.cAudio}>C</button>
                                </div>
                            </div>
                        </div>
                    <div className="col d-inline-flex m-20">
                        <div className="col d-flex flex-column justify-content-center" id="settings">
                            <div className="d-flex flex-row justify-content-center form-switch form-check" id="PowerDiv">
                                <input className="form-check-input" type="checkbox" onChange={this.changePower} id="Power"/>
                                <label className="form-check-label" style={{marginLeft:10}}>Power</label>
                            </div>
                            <div className="d-flex flex-column justify-content-center" id="SoundDiv">
                                <p>{this.state.message}</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center" id="RangeDiv">
                                <label className="form-label">Volume</label>
                                <input type="range" className="form-range" min="0" max="100" id="range" onChange={this.changeVolume}/>
                            </div>
                            <div className="d-flex flex-row justify-content-center form-switch form-check" id="BankDiv">
                                <input className="form-check-input" type="checkbox" id="Bank" onChange={this.changeBank}/>
                                <label className="form-check-label" style={{marginLeft:10}}>Bank</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default Container;