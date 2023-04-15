import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=3e9982abaf574078b2aed66269f6b9b8"
        let data = await fetch(url);
        let objNewsData = await data.json()
        this.setState({ articles: objNewsData.articles });
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
            </div>
        )
    }
}

export default News
