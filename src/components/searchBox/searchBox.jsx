import React from "react";
import "./searchBox.css";

export const SearchBox = (props) => {
    const { placeholder, handleChange } = props;
    return (
        <div>
            <input class="search" type="search" placeholder={placeholder} onChange={handleChange} />
        </div>
    );
};
