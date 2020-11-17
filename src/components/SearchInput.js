import React from 'react';

//class based component because eventually state will be used for user input
class SearchInput extends React.Component{
    render() {
        return(
            <div className="ui segment">
                <form className="ui form" action="">
                    <div className="field">
                        <div className="ui massive icon input">
                            <input type="text" placeholder="search" />
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;