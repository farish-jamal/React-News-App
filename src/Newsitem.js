import React, { Component } from "react";
import './components/Newsitem.css'

export default class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div
          className="card mx-4 my-4"
          style={{ width: "31rem", cursor: "pointer", boxShadow: "4px 4px 6px #2222" }}
        >
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>
              {source}
            </span>
          <img
            src={imgUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "30vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
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
