import React, {useEffect, useState} from "react";
import Newsitem from "../Newsitem";
import "./News.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // document.title = `${capitalizeFirstLetter(
  //   props.category
  // )} - News Chindi`;
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
    
  const updateNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=44be3fd01e074d3dacbc1f86b2c6b510&page=${page}&pageSize=${props.pageSize}`;
    setLoading({ loading: true });
    let data = await fetch(url);
    props.setProgress(40)
    let parsedData = await data.json();
    props.setProgress(70)
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100)
  }

  useEffect(() => {
   updateNews()
  },[])


  const fetchMoreData = async () => {

    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=44be3fd01e074d3dacbc1f86b2c6b510&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };
    return (
      <div className="container my-3 text-center">
        <h1 className="text-center" style={{marginTop: "70px"}}>
          NEWS CHINDI - Top {capitalizeFirstLetter(props.category)}{" "}
          Headlines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="news__items">
            {articles.map((element) => {
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
News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News
