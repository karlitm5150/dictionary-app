import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);
let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
    setResults(response.data[0]);
    }
    
    function handlePexelsResponse(response) {
        console.log(response.data);
        setPhotos(response.data.photos);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey =
        "563492ad6f91700001000001be57ed05f7b0452d896d6a4913e5bd02";
        let pexelsApiUrl =
        `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
                <h1>What would you like to look up?</h1>
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
            <Photos photos={photos} />
        </div>
    );    
    } else {
        load();
        return "Loading...";
    }

    
}