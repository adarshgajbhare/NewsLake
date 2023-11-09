import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import NewsItems from './newsItems.css';
<style>
    @import url('https://fonts.googleapis.com/css2?family=Phudu:wght@300&family=Poppins:wght@400;500;600;700&display=swap');
</style>
export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general',
    }

    static propTypes = {
        name: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor() {
        super();

        this.state = {
            articles: [],
            loading: true,
            page: 1,
            country: ""
        }
    }
    async componentDidUpdate(prevProps) {
        if (this.props.country !== prevProps.country) {
            await this.componentDidMount(this.props.country);
        }
    }
    //   f6fe91ece8e241309b14406306ae92f8 - new 
    // old  ====    f6fe91ece8e241309b14406306ae92f8 
    async componentDidMount() {

        let ApiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f6fe91ece8e241309b14406306ae92f8&pageSize=${this.props.pageSize}`
        let data = await fetch(ApiUrl)
        let parseData = await data.json()
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults })
    }

    // Handling the Previous and Next Buttons
    handlePrev = async () => {
        let ApiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a29b19ae2d98456eae2e338fed0ade12&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(ApiUrl)
        let parseData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles
        })
    }
    handleNext = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        } else {
            let ApiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f6fe91ece8e241309b14406306ae92f8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            let data = await fetch(ApiUrl)
            let parseData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles
            })
        }
    }



    render() {
        const { articles } = this.state;

        // Check if articles is undefined or empty
        // if (!articles || articles.length === 0) {
        //     return (
        //         <div className='container box my-3'>
        //             <p>No articles available</p>
        //         </div>
        //     );
        // }
        return (

            <div className='container box my-3'>

                <div className="row" >
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imgUrl={!element.urlToImage ? element.urlToImage = "data:image/png;base64,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" : element.urlToImage} url={element.url} />
                        </div>
                    })}

                    <div className="conatainer d-flex justify-content-between lastbtn">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrev}> &larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} id="next" type="button" className="btn btn-dark next" onClick={this.handleNext}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default News