import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import propTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        newsPerPage: 5,
        category: 'general'
    }
    static propTypes={
        country: propTypes.string,
        newsPerPage: propTypes.number,
        category: propTypes.string,
    }
    constructor() {
        super();
        document.body.style.backGround = 'black';
        this.state = {
            articles: [],
            isLoading:false,
            page:1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3e9982abaf574078b2aed66269f6b9b8&page=1&pageSize=${this.props.newsPerPage}`
        document.body.style.background = '#000';
        this.setState({isLoading:true});
        let data = await fetch(url);
        let objNewsData = await data.json();
        this.setState({ 
            articles: objNewsData.articles,
            totalResults : objNewsData.totalResults,
            isLoading : false
        });
        document.body.style.background = '#fff';
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3e9982abaf574078b2aed66269f6b9b8&page=${this.state.page - 1}&pageSize=${this.props.newsPerPage}`
        document.body.style.background = '#000';
        this.setState({isLoading:true});
        let data = await fetch(url);
        let objNewsData = await data.json();
        this.setState({ 
            articles: objNewsData.articles,
            page: this.state.page + 1,
            isLoading : false
        });
        this.setState({isLoading:false});
        document.body.style.background = '#fff';
    }
    handleNextClick = async () => {
        if( !(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.newsPerPage)) ){
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3e9982abaf574078b2aed66269f6b9b8&page=${ this.state.page + 1 }&pageSize=${this.props.newsPerPage}`
            document.body.style.background = '#000';
            this.setState({isLoading:true});
            let data = await fetch(url);
            let objNewsData = await data.json()
            this.setState({ 
                articles: objNewsData.articles,
                page: this.state.page + 1,
                isLoading: false
            });
            document.body.style.background = '#fff';
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>Top HeadLines</h2>
                <div className="d-flex justify-content-between my-3">
                    <button disabled={this.state.page<=1} className="btn btn-dark" type='button' onClick={this.handlePrevClick} >&larr; Previous</button>
                    <button  className="btn btn-dark" type='button' onClick={this.handleNextClick} >Next &rarr;</button>
                </div>
                {this.state.isLoading && <Spinner/>}
                <div className="row">
                    {!this.state.isLoading && this.state.articles.map((element) => {
                        return (
                            <div className="col-md-3" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        )
                    })}
                </div>
                
            </div>
        )
    }
}

export default News
