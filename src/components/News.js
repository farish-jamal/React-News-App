import React, {useEffect, useState} from "react";
import Newsitem from "../Newsitem";
import "./News.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  // const [page, setPage] = useState(1)
  // eslint-disable-next-line
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
    
  const updateNews = async () => {
    props.setProgress(10)
    const url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/${props.country}.json`
    setLoading({ loading: true });
    let data = await fetch(url);
    props.setProgress(40)
    let parsedData = await data.json();
    props.setProgress(70)
    // console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100)
  }

  useEffect(() => {
    // document.title = `${capitalizeFirstLetter(props.category)} - News Chindi`;
   updateNews()
   // eslint-disable-next-line
  },[])


  // const fetchMoreData = async () => {
  //   const url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/${props.country}.json`
  //   setPage(page+1)
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   setArticles(articles.concat(parsedData.articles))
  //   setTotalResults(parsedData.totalResults)
  // };
    return (
      <div className="container my-3 text-center">
        <h1 className="text-center" style={{marginTop: "70px"}}>
          NEWS AAJTAK - Top {capitalizeFirstLetter(props.category)}{" "}
          Headlines
        </h1>
        {loading && <Spinner />}
        {/* <InfiniteScroll
          dataLength={articles.length}
          // next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        > */}
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
        {/* </InfiniteScroll> */}
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
