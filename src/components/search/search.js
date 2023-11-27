import React from 'react';
import Input from '../input';
import Button from '../button'
import SearchIcon from '../svg/searchIcon';
import './search.scss'

const Search = props => {
    return (
        <div 
            className={`search-wrapper`}
        >
            <Input
                type="text"
                placeholder="Search for any topics,keywrods here..."
            />
            <Button 
                link 
                text={<SearchIcon />} 
            />
        </div>
    );
};

export default Search;

Search.defaultProps = {
    src: "https://picsum.photos/48",
    alt: "Avatar",
}