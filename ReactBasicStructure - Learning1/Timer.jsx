import React from "react";

export default class IndependentTimer extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ""
        };

        this.customFunction = this.customFunction.bind(this);
    }

    componentDidMount() {
        console.log("timer display!");
        this.timer = setInterval(this.customFunction,1000);
    }

    customFunction() {
        console.log("customFunDis display!");
        this.setState({value: new Date().toLocaleTimeString()});
    }


    render() {
        return (
            <div>
                Time : {this.state.value}
            </div>
        );
    }

}



