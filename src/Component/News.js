import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Investor's Business Daily"
            },
            "author": "Investor's Business Daily",
            "title": "Dow Jones Futures Fall On Boeing; JPMorgan, Bank Earnings Due After Bullish Market Rally | Investor's Business Daily - Investor's Business Daily",
            "description": null,
            "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-jpmorgan-earnings-boeing-737-woes-tesla-cuts-prices/",
            "urlToImage": null,
            "publishedAt": "2023-04-14T10:24:00Z",
            "content": null
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Emily Shapiro",
            "title": "Drake Bell, former Nickelodeon star, found safe after being reported missing - ABC News",
            "description": "The 36-year-old had been \"considered missing and endangered.\"",
            "url": "https://abcnews.go.com/US/drake-bell-former-nickelodeon-star-reported-missing-florida/story?id=98558676",
            "urlToImage": "https://s.abcnews.com/images/US/drake-bell-gty-ps-230413_1681399247166_hpMain_16x9_992.jpg",
            "publishedAt": "2023-04-14T09:33:07Z",
            "content": "Authorities in Daytona Beach, Florida, said former Nickelodeon star Drake Bell was found safe on Thursday after police alerted the public hours earlier that the actor was \"considered missing and enda… [+689 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tampa Bay Times"
            },
            "author": "John Romano",
            "title": "The Rays have a goofy dress code and a historic winning streak - Tampa Bay Times",
            "description": "John Romano | The fun continued in the clubhouse on Thursday after Tampa Bay beat Boston for a record-tying 13th consecutive victory.",
            "url": "https://www.tampabay.com/sports/rays/2023/04/13/brandon-lowe-jason-adam-kevin-kelly-taj-bradley/",
            "urlToImage": "https://www.tampabay.com/resizer/rKVqEKWJQGeZXDxVQQQWtDgBBYk=/1200x675/filters:focal(1185x825:1195x815)/cloudfront-us-east-1.images.arcpublishing.com/tbt/VK5B4XZQCVAZ5CDOV4PL3GVIAM.JPG",
            "publishedAt": "2023-04-14T09:19:39Z",
            "content": "ST. PETERSBURG Whadda ya say now, America?\r\nReady to embrace this nameless and spotless baseball team from Tampa Bay? Ready to admit theres something special happening in a clubhouse where everyone h… [+5041 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Coronation Has Caused “Tension At Home” For Prince Harry And Meghan Markle, Says Kinsey Schofield - TalkTV",
            "description": "The Duke of Sussex is to attend his father the King’s coronation, but the Duchess of Sussex will miss the historic occasion and stay in California with the c...",
            "url": "https://www.youtube.com/watch?v=Q-N70giH0xA",
            "urlToImage": "https://i.ytimg.com/vi/Q-N70giH0xA/maxresdefault.jpg",
            "publishedAt": "2023-04-14T09:06:06Z",
            "content": null
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Gustaf Kilander",
            "title": "Louisville shooting - live: Gunman to be tested for CTE as panicked bank worker 911 calls revealed - The Independent",
            "description": "Louisville shooting live updates",
            "url": "https://www.independent.co.uk/news/world/americas/crime/louisville-shooting-tommy-elliott-shooter-mom-911-call-b2319672.html",
            "urlToImage": "https://static.independent.co.uk/2023/04/11/09/Louisville%20shooting.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-04-14T08:00:00Z",
            "content": "A list of recent high-profile shootings in the US\r\nThe latest high-profile shooting in the United States happened Monday in\r\nLouisville, \r\nKentucky, when at least four people were killed at a downtow… [+3403 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Europe presses tough Taiwan stance after backlash against Macron comments - Reuters",
            "description": "European foreign policy officials on Friday urged China not to use force over Taiwan, taking a tough stance against Beijing's threats over the democratically governed island, after comments by French President Emmanuel Macron were perceived as weak.",
            "url": "https://www.reuters.com/world/eu-cannot-trust-china-unless-it-seeks-peace-ukraine-borrell-2023-04-14/",
            "urlToImage": "https://www.reuters.com/resizer/8JZJ93LblQeJzEmqrWS2vU5-pF8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FXR5SOEDRBK6ZEYFL4DYOTZAUA.jpg",
            "publishedAt": "2023-04-14T07:50:00Z",
            "content": "April 14 (Reuters) - European foreign policy officials on Friday urged China not to use force over Taiwan, taking a tough stance against Beijing's threats over the democratically governed island, aft… [+3937 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Hilary Whiteman",
            "title": "Cyclone Ilsa sets a new wind record as it smashes into Australia's western coast - CNN",
            "description": "Cyclone Ilsa smashed into a remote stretch of coast in Western Australia around midnight Thursday local time with wind speeds that broke previous records set more than 10 years ago in the same place.",
            "url": "https://www.cnn.com/2023/04/13/australia/cyclone-ilsa-new-speed-record-australia-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230413142903-02-map-weather-0413.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-04-14T07:10:00Z",
            "content": "Cyclone Ilsa smashed into a remote stretch of coast in Western Australia around midnight Thursday local time with wind speeds that broke previous records set more than 10 years ago in the same place.… [+4004 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Minecraft Legends Review - IGN",
            "description": "Minecraft Legends Reviewed by Justin Koreis on Xbox Series X, also available on Xbox One, PlayStation, PC, and Nintendo Switch.This Minecraft spin-off is an ...",
            "url": "https://www.youtube.com/watch?v=2DLiIKvFtrc",
            "urlToImage": "https://i.ytimg.com/vi/2DLiIKvFtrc/maxresdefault.jpg",
            "publishedAt": "2023-04-14T07:01:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "ESPN"
            },
            "author": null,
            "title": "Rudy Gobert Suggests He Probably Wasn't Healthy Enough To Play At Lakers, Status For Friday Uncertain - RealGM.com",
            "description": null,
            "url": "https://www.espn.com/nba/story/_/id/36181130/timberwolves-hobbled-rudy-gobert-put-punch-past",
            "urlToImage": null,
            "publishedAt": "2023-04-14T05:41:00Z",
            "content": null
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Joy Addison",
            "title": "NASA prepares to send 4 volunteers on a Mars mission, on Earth - Fox News",
            "description": "NASA is taking volunteers from outside of their program to test life on Mars. Volunteers will eat, sleep and exercise within the habitat for one year as they would on the red planet.",
            "url": "https://www.foxnews.com/us/nasa-prepares-send-4-volunteers-mars-mission-earth",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/Mars-habitat2.jpg",
            "publishedAt": "2023-04-14T05:17:00Z",
            "content": "HOUSTON Although we cant yet send people to Mars NASA is getting in some practice.\r\nIn June, four volunteers from outside of NASA with backgrounds in science and engineering will start a mission on M… [+2737 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Allie Griffin",
            "title": "Trump grilled for 7 hours in AG Letitia James' state fraud case - New York Post ",
            "description": "A lawyer for Trump’s business said the Republican presidential contender spent nearly all seven hours “describing in detail his extraordinary business success.”",
            "url": "https://nypost.com/2023/04/14/trump-grilled-for-7-hours-in-ny-ag-letitia-james-fraud-case/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/04/NYPICHPDPICT000009594431.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2023-04-14T04:52:00Z",
            "content": "Former President Donald Trump was grilled for nearly seven hours Thursday during his second deposition in the $250 million civil case brought against him by New York Attorney General Letitia James.\r\n… [+2325 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Kareem El Damanhoury,Joseph Ataman",
            "title": "Iran executions up 75% as Tehran seeks to 'instill fear' in protesters, rights groups say - CNN",
            "description": "Iran executed at least 582 people last year, a 75% increase on the previous year, according to human rights groups who say the rise reflects an effort by Tehran to \"instill fear\" among anti-regime protesters.",
            "url": "https://www.cnn.com/2023/04/14/middleeast/iran-execution-report-2022-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221012102908-04-iran-protests-100822.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-04-14T04:37:00Z",
            "content": "Iran executed at least 582 people last year, a 75% increase on the previous year, according to human rights groups who say the rise reflects an effort by Tehran to instill fear among anti-regime prot… [+3744 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Steve Contorno",
            "title": "Florida Gov. DeSantis signs 6-week abortion ban - CNN",
            "description": "Florida Gov. Ron DeSantis has signed a bill that would ban most abortions in the state after six weeks, according to a release from the governor's office late Thursday night.",
            "url": "https://www.cnn.com/2023/04/13/politics/florida-abortion-ban/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230413143207-florida-abortion-ban-0413.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-04-14T03:58:00Z",
            "content": "Florida Gov. Ron DeSantis has signed a bill that would ban most abortions in the state after six weeks, according to a release from the governors office late Thursday night.\r\nThe six-week ban would n… [+5111 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Gustaf Kilander",
            "title": "Bob Lee murder – news: San Francisco DA slams Elon Musk as suspect arrested in Cash App founder stabbing - The Independent",
            "description": "What happened to the founder of Cash App?",
            "url": "https://www.independent.co.uk/news/world/americas/crime/cash-app-murder-arrest-bob-lee-nima-momeni-b2319590.html",
            "urlToImage": "https://static.independent.co.uk/2023/04/06/12/ben%20lee.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-04-14T03:56:15Z",
            "content": "Sign up to our free US news bulletin sent straight to your inbox each weekday morning\r\nSign up to our free morning US email news bulletin\r\nTech executive Nima Momeni has been arrested in connection w… [+5050 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Guardsman arrested in leak of classified military documents - WGN News",
            "description": null,
            "url": "https://www.youtube.com/watch?v=R9EibnFCs6s",
            "urlToImage": null,
            "publishedAt": "2023-04-14T02:33:34Z",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Huileng Tan",
            "title": "Amazon CEO Andy Jassy's total compensation plunged last year to $1.3M - Business Insider",
            "description": "Jassy's much smaller compensation in 2022 was due to him not receiving any stock awards in 2022.",
            "url": "https://www.businessinsider.com/amazon-massive-pay-cut-ceo-andy-jassy-compensation-stock-awards-2023-4",
            "urlToImage": "https://i.insider.com/6438b040051ad10018c47fb7?width=1200&format=jpeg",
            "publishedAt": "2023-04-14T02:08:00Z",
            "content": "Amazon CEO Andy Jassy's total compensation plunged last year. \r\nJassy was paid $1.3 million in 2022, including a $317,500 base salary plus another $981,000 in 401(k) plan contributions and security c… [+2551 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Andrew Freedman, Rebecca Falconer",
            "title": "Fort Lauderdale hit by heavy rainfall, flooding in Florida dry season - Axios",
            "description": "\"This is a life threatening situation,\" the National Weather Service in Miami warned.",
            "url": "https://www.axios.com/2023/04/13/fort-lauderdale-historic-rainfall-flooding-dry-season",
            "urlToImage": "https://images.axios.com/kDjDOjPxsaXYLWAq0QS9N9wWBDM=/0x52:3000x1739/1366x768/2023/04/13/1681427181316.jpg",
            "publishedAt": "2023-04-14T01:48:55Z",
            "content": "Heavy rain has slammed South Florida, flooding cars and buildings including Fort Lauderdale-Hollywood International Airport, which remains closed through 9 a.m. ET Friday. \r\nThe big picture: Broward … [+3543 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Ryan Morik",
            "title": "Bud Light sponsors NFL Draft as beer brand faces backlash over Dylan Mulvaney partnership - Fox News",
            "description": "The NFL Draft will commence in two weeks, and its main sponsor is Bud Light, which has received backlash for its partnership with trans influencer Dylan Mulvaney.",
            "url": "https://www.foxnews.com/sports/bud-light-sponsors-nfl-draft-beer-brand-faces-backlash-dylan-mulvaney-partnership",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/DYLAN-MULVANEY-BUD-LIGHT.jpg",
            "publishedAt": "2023-04-14T00:42:00Z",
            "content": "The NFL Draft's main sponsor has been Bud Light, but the spotlight on the beer brand has never been hotter as it has caught flak over its partnership with Dylan Mulvaney.\r\nMulvaney is a transgender i… [+2880 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Peering Into the Abyss: Machine Learning Enhances M87 Black Hole Image - SciTechDaily",
            "description": "Machine learning reconstructs new image from EHT data. The image of the M87 black hole has been enhanced using a machine learning technique called PRIMO, providing a more accurate representation and allowing for improved determinations of its mass and physica…",
            "url": "https://scitechdaily.com/peering-into-the-abyss-machine-learning-enhances-m87-black-hole-image/",
            "urlToImage": "https://scitechdaily.com/images/Animated-M87-Black-Hole-Comparison.gif",
            "publishedAt": "2023-04-14T00:39:17Z",
            "content": "ByInstitute for Advanced StudyApril 13, 2023\r\nNew image of M87 supermassive black hole generated by the PRIMO algorithm using 2017 EHT data. Credit: Medeiros et al. 2023\r\nMachine learning reconstruct… [+10878 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Jihye Lee, Lim Hui Jie",
            "title": "Singapore tightens monetary policy; Asia markets rise as more data shows U.S. inflation cooling - CNBC",
            "description": "Asian markets trade higher as they see retail sales data out of Japan and Australia",
            "url": "https://www.cnbc.com/2023/04/14/asia-markets-rebound-after-more-data-points-to-cooling-us-inflation.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107225120-1681432078121-gettyimages-586291115-824d2d3f-1a81-45ae-9569-5cf0eeb8029b.jpeg?v=1681432182&w=1920&h=1080",
            "publishedAt": "2023-04-14T00:34:00Z",
            "content": "Asia-Pacific markets largely rose on Friday, following the moves of Wall Street as the U.S. producer price index signaled further signs of cooling inflation.\r\nThe March producer price index, a measur… [+1309 chars]"
        }
    ];
    constructor() {
        super();
        this.state = {
            articles: this.articles
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
            </div>
        )
    }
}

export default News
