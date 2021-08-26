import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        let {title, description} = this.props;
        return (
            <div>
                <div className="card mx-4 my-4" style={{width: "20rem", cursor: "pointer"}}>
                    <img src="https://ichef.bbci.co.uk/news/1024/branded_news/FF37/production/_120253356_p09t87st.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                 </div>
</div>
                )
    }
}
