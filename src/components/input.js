import React, { Component } from 'react'
import axios from 'axios';

export default class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            msg: [],
            newm: true
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.newm !== this.props.newm){
            console.log("UPDATE")
            const url = "http://localhost:7000/get"
            axios.get(url)
                .then((data)=>{
                    const d = data.data["message"]
                    console.log("after update:")
                    console.log(d)

                    var my1 = new Set(this.state.msg.map((e)=>{
                        return e.id
                    }))

                    var my2 = new Set(d.map((e)=>{
                        return e.id
                    }))
                    const result = [...my2].filter(x => {
                        return !my1.has(x)
                    })
                    const push = d.filter(x => x.id === result[0] )

                    this.setState((prev)=>{
                        return{
                            msg: [...prev.msg, ...push],
                            newm:this.props.newm
                        }
                    })
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
    }
    componentDidMount(){
            const url = "http://localhost:7000/get"
            axios.get(url)
                .then((data)=>{
                    const d = data.data["message"]
                    console.log(d)

                    this.setState((prev)=>{
                        return{
                            msg: [ ...d, ...prev.msg],
                            newm:this.props.newm
                        }
                    })
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
    render() {
        const messages = this.state.msg.map((e) => {
            return <p key={e.id}>{e.m}</p>
        })
        return (
            <div style={{padding:"2%"}}>
                <div style={{"height":"200px",overflowY:"scroll", padding:"1%"}}>
                    {messages}
                </div>
            </div>
        )
    }
}
