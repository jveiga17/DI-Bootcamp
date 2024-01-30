import React from "react";

const Book = ({ onSearch, onInputChange }) => {
    return (
        <div>
            <input type="text" placeholder="Search book..." onChange={onInputChange} />
            <button onClick={onSearch}>Search</button>
        </div>
    );
};

export default Book;