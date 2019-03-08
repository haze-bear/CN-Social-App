import React from 'react'
import * as rssParser from 'react-native-rss-parser';
 



class Trending extends React.Component {

    constructor() {
        super()
        this.state = {
            feed:[],
        }
    }
    
    x = () => {
        return fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
     console.log(rss.title);
     console.log(rss.items.length);
     this.setState({feed: rss.title})
    })
    };

    componentDidMount() {
        this.x()
    }

    render() {

        return (
            <div className="Trending">
                <div><h1><font color="#27B1BE">Trending</font></h1></div>
                <h1>{this.state.feed}</h1>
            </div>
        )
    }
}

export default Trending