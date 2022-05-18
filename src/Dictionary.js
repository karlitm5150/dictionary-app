import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
let [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`Searching  for ${keyword} definition`);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search} className="search-form">
                <div className="row">
                    <div className="col-6">
                    <input
                        type="search"
                        onChange={handleKeywordChange}
                        placeholder="Type a word..."
                        autoFocus="on"
                        autoComplete="off"
                        className="form-control shadow-sm"
                    />
                    </div>
                    <div className="col-3">
                    <input
                        type="submit"
                        value="Search"
                        className="form-control btn btn-primary shadow-sm"
                    />
                    </div>
                </div>
            </form>
        </div>
    );
}