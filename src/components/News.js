import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import './newsItems.css';
import noimagefound from './noimagefound.png'

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    News.defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general',
    }

    News.propTypes = {
        name: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f6fe91ece8e241309b14406306ae92f8&pageSize=${props.pageSize}`;
                const data = await fetch(apiUrl);
                const parseData = await data.json();

                if (parseData.articles.length === 0) {
                    // If no data is returned, load default data from the JSON file
                    const defaultData = require('./defaultData.json');
                    setArticles(defaultData.articles);
                    setTotalResults(defaultData.totalResults);
                } else {
                    // Otherwise, set the fetched data
                    setArticles(parseData.articles);
                    setTotalResults(parseData.totalResults);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [props.country, props.category, props.pageSize]);


    const handlePrev = async () => {
        try {
            const apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a29b19ae2d98456eae2e338fed0ade12&page=${page - 1}&pageSize=${props.pageSize}`;
            const data = await fetch(apiUrl);
            const parseData = await data.json();
            setPage(page - 1);
            setArticles(parseData.articles);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleNext = async () => {
        try {
            if (page + 1 > Math.ceil(totalResults / props.pageSize)) {
                // Handle case when there are no more pages
            } else {
                const apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f6fe91ece8e241309b14406306ae92f8&page=${page + 1}&pageSize=${props.pageSize}`;
                const data = await fetch(apiUrl);
                const parseData = await data.json();
                setPage(page + 1);
                setArticles(parseData.articles);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (

        <div className='container box my-3'>

            <div className="row" >
                {articles && articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title} description={element.description} imgUrl={!element.urlToImage ? element.urlToImage = noimagefound : element.urlToImage} url={element.url} />
                    </div>
                })}

                <div className="conatainer d-flex justify-content-between lastbtn">
                    <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrev}> &larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} id="next" type="button" className="btn btn-dark next" onClick={handleNext}>Next &rarr;</button>
                </div>
            </div>
        </div>
    )
}
export default News