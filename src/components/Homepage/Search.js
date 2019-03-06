import React from 'react';
import './Search.css';

class Search extends React.Component {

    render() {
        return (
            <div className="searchCont">
                <div className="Search">
                    <span className="innerSearchCont"><i class="fas fa-search searchIcon"></i><input className="searchFriend" placeholder="Search friend" /></span>
                </div>
            </div>
        )
    }


}

export default Search