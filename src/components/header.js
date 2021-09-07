import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div style={{
                "backgroundColor":"black", "color":"white", "width":"100%", "height":"100px", "marginTop":"-20px",
                 "display":"flex", "alignItems":"center","justifyContent":"center"}}>
                <p style={{textTransform:"uppercase",fontSize:"35px"}}>Messages</p>
            </div>
        )
    }
}
