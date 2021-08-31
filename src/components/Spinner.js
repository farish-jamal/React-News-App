import React from 'react';
import loading from "./loading.gif"
const Spinner = () =>{
        return (
            <div>
            <img src={loading} alt="This is loading gif" className="my-5" style={{width: "40px"}}/>
            </div>
        )
}
export default Spinner