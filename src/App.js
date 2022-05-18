import React from "react";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        Dictionary
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        Coded by Karli Thuen and is {" "}
        <a href="https://github.com/karlitm5150/dictionary-app">open sourced on Github</a>
      </footer>
      </div>
    </div>
  );
}
