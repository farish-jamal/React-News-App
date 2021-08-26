import React, { Component } from "react";
import Newsitem from "../Newsitem";
import './News.css'

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">BBC CHINDI - Top Headlines</h2>
        <div className="news__items">
          <Newsitem title="mytitle" description="mydescription" />
          <Newsitem title="mytitle" description="mydescription" />
          <Newsitem title="mytitle" description="mydescription" />
        </div>
      </div>
    );
  }
}
