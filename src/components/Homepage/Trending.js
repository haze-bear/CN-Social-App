import React from 'react'
import * as rssParser from 'react-native-rss-parser';
 



class Trending extends React.Component {

    constructor() {
        super()
        this.state = {
            feed: [],
        }
    }
    
    x = () => {
        return fetch('https://news.google.com/news/rss')
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
        console.log(rss.title);
        console.log(rss.items[0].title);
        this.setState({feed: rss.items})
    })
    };

    componentDidMount() {
        this.x()
    }

    render() {
        // console.log(this.state.feed.items[0]);
        
        return (
            <div className="Trending">
                <div><h1><font color="#27B1BE">Trending</font></h1></div>
                {this.state.feed && this.state.feed.map(item => (
                    <div>
                        <a href={item.links[0].url} target="blank" ><h1>{item.title}</h1></a>
                        <br />
                    </div>
                ))}
            </div>
        )
    }
}

export default Trending