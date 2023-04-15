import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            isLoading:false,
            page:1
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=3e9982abaf574078b2aed66269f6b9b8&page=1"
        let data = await fetch(url);
        let objNewsData = await data.json()
        this.setState({ 
            articles: objNewsData.articles,
            totalResults : objNewsData.totalResults
         });
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3e9982abaf574078b2aed66269f6b9b8&page=${this.state.page - 1}`
        let data = await fetch(url);
        let objNewsData = await data.json()
        this.setState({ 
            articles: objNewsData.articles,
            page: this.state.page + 1
         });
    }
    handleNextClick = async () => {
        if( this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3e9982abaf574078b2aed66269f6b9b8&page=${ this.state.page + 1 }`
            let data = await fetch(url);
            let objNewsData = await data.json()
            this.setState({ 
                articles: objNewsData.articles,
                page: this.state.page + 1
            });
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>Top HeadLines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-3" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        )
                    })}
                </div>
                <div className="d-flex justify-content-between my-3">
                    <button disabled={this.state.page<=1} className="btn btn-dark" type='button' onClick={this.handlePrevClick} >&larr; Previous</button>
                    <button  className="btn btn-dark" type='button' onClick={this.handleNextClick} >Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
