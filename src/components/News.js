import React, { Component } from "react";
import Newsitem from "../Newsitem";
import "./News.css";
import Spinner from "./Spinner";

export default class News extends Component {
  //https://newsapi.org/v2/top-headlines?country=in&apiKey=44be3fd01e074d3dacbc1f86b2c6b510
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=44be3fd01e074d3dacbc1f86b2c6b510&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading : true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading : false
    });
  }

  handlePreviousClick = async () => {
    console.log("clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=44be3fd01e074d3dacbc1f86b2c6b510&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading : false,
    });
  };
  handleNextClick = async () => {
    console.log("clicked");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=44be3fd01e074d3dacbc1f86b2c6b510&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading : true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading : false
      });
    }
  };
  render() {
    return (
      <div className="container my-3 text-center">
        <h1 className="text-center">NEWS CHINDI - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="news__items">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <Newsitem
                key={element.url}
                title={
                  element.title
                    ? element.title.slice(0, 60)
                    : "Sorry title is unavailable. Click on read more for full story"
                }
                description={
                  element.description
                    ? element.description.slice(0, 100)
                    : "Sorry description is  unavailable. Click on read more for full story"
                }
                imgUrl={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://www.borderbank.com.au/wp-content/uploads/2016/11/Web_NoticeTile.jpg"
                }
                newsUrl={element.url}
              />
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-primary"
            type="button"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            className="btn btn-primary"
            type="button"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
