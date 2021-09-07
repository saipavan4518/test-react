import React, { Component } from 'react'
import axios from "axios";

import Input from './input';

export default class Messages extends Component {
    constructor(){
        super();
        this.state = {
            message : "",
            newm: true
        }
        this.onChange = this.onChange.bind(this)
        this.onclick = this.onclick.bind(this)
    }
    onChange(e){
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
    }
    onclick(e){
        const url = "http://localhost:4000/post"
        const data = {
            "msg": this.state.message
        }
        axios.post(url, data)
            .then((data)=>{
                console.log(data)
                this.setState(prevState =>{
                    return {
                        ...prevState,
                        message:"",
                        newm:!prevState.newm
                    }
                })
            })
            .catch((error)=>{
                console.log(error)
            })

    }
    render() {
        return (
            <div>
                <div style={{display:"flex", margin:"2% 0% 2% 0%", height:"80px", justifyContent:"space-evenly", alignItems:"center", padding:"2%"}}>
                    <input style={{height:"20px", width:"70%", marginRight:"1%"}} type="text" name="message" value={this.state.message} placeholder="Enter Message" onChange={this.onChange}/>
                    <button style={{height:"40px", width:"30%"}} onClick={this.onclick}>Submit</button>
                </div>
                <div>
                    <Input newm = {this.state.newm} />
                </div>
            </div>
        )
    }
}
