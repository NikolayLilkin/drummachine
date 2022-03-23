import { Component } from "react";

class Container extends Component{
    render(){
        return (
            <div className="container" id="container">
                <div className="row justify-content-md-center">
                    <div className="col-md d-inline-flex m-20">
                        <div className="col d-flex flex-column">
                            <div className="d-flex flex-row justify-content-md-center">
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
                            <div className="d-flex flex-row justify-content-md-center">
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
                            <div className="d-flex flex-row justify-content-md-center">
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
                        <div className="col d-flex flex-column justify-content-center">
                            <div class="form-check form-switch d-flex flex-column">
                                <label class="form-check-label" for="Power">Power</label>
                                <input class="form-check-input" type="checkbox" id="Power"/>
                            </div>
                            <label for="range" class="form-label">Range</label>
                            <input type="range" class="form-range w-50" id="range"/>
                            <div class="form-check form-switch d-flex flex-column">
                                <label class="form-check-label" for="Bank">Bank</label>
                                <input class="form-check-input" type="checkbox" id="Bank"/>
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