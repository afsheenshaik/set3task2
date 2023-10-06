import { Component } from "react";

export class C1 extends Component{
    
    constructor(props) {
        super(props);
        this.state={role:"Doctor",name:""}
    }
    handleClick=()=>{
        this.setState({
            role:"Engineer"
        })
    }
    handleChange=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    render() {
        return(
            <div>
                <h1>Nav {this.props.age}</h1>
                <h1>Nav {this.state.role}</h1>
                <button onClick={this.handleClick}>Change state</button>
                <input placeholder="enter ur name" onChange={this.handleChange}/>
                <p>name:{this.state.name}</p>
            </div>
        )
    }
}