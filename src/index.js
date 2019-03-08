import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ProfilePage from './components/ProfilePage/ProfilePage';
import DirectMsg from './components/DirectMsg/DirectMsg';
import EditProfile from './components/EditProfile/EditProfile';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/profilepage" component={ProfilePage}/>
            <Route path="/directmsg" component={DirectMsg}/>
            <Route path="/editprofile" component={EditProfile}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
