import React, { Component } from "react";
import './components/Newsitem.css'

export default class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div>
        <div
          className="card mx-4 my-4"
          style={{ width: "31rem", cursor: "pointer",boxShadow:"4px 4px 6px #2222"}}
        >
          <img
            src={imgUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "30vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
