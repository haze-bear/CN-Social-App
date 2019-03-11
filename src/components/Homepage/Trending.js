 import React from 'react'
import "./Trending.css";

class Trending extends React.Component {

    render() {
        return (
            <div className="TrendingContainer">
                <div><h1><font color="#27B1BE">Trending</font></h1></div>
                <div class="Trending">
                    <div class="wrapperTrend">
                        <header class="headerTrend">Avocado</header>
                        <article class="mainTrend">
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        </article>
                        <footer class="footerTrend">
                            <hr align="center" size="3" width="95%" color="#27B1BE" noshade />
                        </footer>
                        <header class="headerTrend">ReactJs</header>
                        <article class="mainTrend">
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        </article>
                        <footer class="footerTrend">
                            <hr align="center" size="3" width="95%" color="#27B1BE" noshade />
                        </footer>
                        <header class="headerTrend">Don't know</header>
                        <article class="mainTrend">
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        </article>
                        <footer class="footerTrend">
                            <hr align="center" size="3" width="95%" color="#27B1BE" noshade />
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}

export default Trending