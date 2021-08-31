import React, { Component } from "react";
import Newsitem from "../Newsitem";
import "./News.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - News Chindi`;
  }
  async updateNews() {
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=44be3fd01e074d3dacbc1f86b2c6b510&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(40)
    let parsedData = await data.json();
    this.props.setProgress(70)
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    console.log(this.state.page);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=44be3fd01e074d3dacbc1f86b2c6b510&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };
  render() {
    return (
      <div className="container my-3 text-center">
        <h1 className="text-center" style={{marginTop: "70px"}}>
          NEWS CHINDI - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="news__items">
            {this.state.articles.map((element) => {
              return (
                <Newsitem
                  key={element.url}
                  title={
                    element.title
                      ? element.title.slice(0, 60)
                      : "Sorry title is unavailable. Click on read more for full story and keep yourself updated."
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 100)
                      : "Sorry description is  unavailable. Click on read more for full story and keep yourself updated."
                  }
                  imgUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://www.borderbank.com.au/wp-content/uploads/2016/11/Web_NoticeTile.jpg"
                  }
                  newsUrl={element.url}
                  author={element.author ? element.author : "Unknown"}
                  date={element.publishedAt ? element.publishedAt : "Unknown"}
                  source={element.source.name}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
