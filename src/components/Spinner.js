import React, { Component } from 'react';
import loading from "./loading.gif"
export default class Spinner extends Component {
    render() {
        return (
            <div>
            <img src={loading} alt="This is loading gif" className="my-5" style={{width: "40px"}}/>
            </div>
        )
    }
}