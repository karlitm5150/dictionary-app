import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
let [keyword, setKeyword] = useState("");
let [results, setResults] = useState(null);

    function handleResponse(response) {
    setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
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
            <Results results={results} />
        </div>
    );
}