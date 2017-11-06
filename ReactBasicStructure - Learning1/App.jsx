import React from "react";
import ReactDom from "react-dom";

class SecondLogin extends React.Component {
    render() {
        return (
            <div>
                <h1> Hello from second Login</h1>
            </div>
        );
    }
}

export default class LoginComponent extends React.Component {
    constructor() {
        super();
        this.state ={ 
            value: "" 
        };
        console.log("Constructor called!! once again!");
        this.handlechanage = this.handlechanage.bind(this);
        this.loginFunction = this.loginFunction.bind(this);
    }

    loginFunction(event) {
        var v = new Date();
        console.log("Date us " + v.getDate());
    
        var text = this.state.value;
        //g stands for check entire text var content
        var expression = /[a][e-i]/g;
    
        if (text.match(expression)) {
            console.log("typed a-c :: " +  text);
        } else {
            console.log("Not get accepted!");
        }
        event.preventDefault();
    }

    handlechanage(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <h1> Hello from Login Component 1 </h1>
                <SecondLogin name="secondLogin" />

                <form onSubmit={this.loginFunction}>
                    <input type="input" value={this.state.value} onChange={this.handlechanage} />
                    <input type="submit" value="Click here!" />
                </form>

                <h1>Hello from Login Component 2</h1>
            </div >
        );
    }

}



