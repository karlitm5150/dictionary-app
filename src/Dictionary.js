import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
    setResults(response.data[0]);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
      return (
        <div className="Dictionary">
            <section>
            <form onSubmit={handleSubmit} className="search-form">
                <div className="row">
                    <div className="col-9">
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
            <div className="hint">
                suggested words: sunset, flower, beach, forest, donut...
            </div>
            </section>
            <Results results={results} />
        </div>
    );    
    } else {
        load();
        return "Loading...";
    }

    
}