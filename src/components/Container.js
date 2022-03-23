import { Component } from "react";

class Container extends Component{
    render(){

        return (
            <div className="container d-flex align-items-center justify-content-center" id="container">
                <div className="container row justify-content-center p-0">
                    <div className="col d-inline-flex">
                        <div className="col d-flex flex-column">
                            <div className="col d-flex flex-row justify-content-center">
                                <div className="p-1">
                                    <button className="btn btn-primary">Q</button>
                                </div>
                                <div className="p-1">
                                    <button className="btn btn-primary">W</button>
                                </div>
                                <div className="p-1">
                                    <button className="btn btn-primary">E</button>
                                </div>
                            </div>
                            <div className="col d-flex flex-row justify-content-center">
                                <div className="p-1">
                                    <button className="btn btn-primary">A</button>
                                </div>
                                <div className="p-1">
                                    <button className="btn btn-primary">S</button>
                                </div>
                                <div className="p-1">
                                    <button className="btn btn-primary">D</button>
                                </div>
                            </div>
                            <div className="col d-flex flex-row justify-content-center">
                                <div className="p-1">
                                    <button className="btn btn-primary">Z</button>
                                </div>
                                <div className="p-1">
                                    <button className="btn btn-primary">X</button>
                                </div>
                                <div className="p-1">
                                    <button className="btn btn-primary">C</button>
                                </div>
                            </div>
                        </div>
                    <div className="col d-inline-flex m-20">
                        <div className="col d-flex flex-column justify-content-center" id="settings">
                            <div className="d-flex flex-row justify-content-center form-switch form-check" id="PowerDiv">
                                <input className="form-check-input" type="checkbox" id="Power"/>
                                <label className="form-check-label" style={{marginLeft:10}} for="Power">Power</label>
                            </div>
                            <div className="d-flex flex-column justify-content-center" id="SoundDiv">
                                <p>Heater</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center" id="RangeDiv">
                                <label for="range" className="form-label">Range</label>
                                <input type="range" className="form-range" id="range"/>
                            </div>
                            <div className="d-flex flex-row justify-content-center form-switch form-check" id="BankDiv">
                                <input className="form-check-input" type="checkbox" id="Bank"/>
                                <label className="form-check-label" style={{marginLeft:10}} for="Bank">Bank</label>
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