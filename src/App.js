import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./layout/Navbar.jsx";
import JokeList from "./components/JokeList.jsx";
import SearchForm from "./components/SearchForm.jsx";

import "./main.scss";

function App() {
  const [searchTerm, setSearchTerm] = useState("init_");
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    if (searchTerm !== "init_")
      axios({
        method: "get",
        url: "https://icanhazdadjoke.com/search",
        headers: {
          Accept: "application/json",
        },
        params: {
          term: searchTerm,
        },
      }).then((response) => {
        console.log(response.data.results);
        setJokes(response.data.results);
      });
  }, [searchTerm]);

  return (
    <>
      <Navbar />
      <div className="container">
        <SearchForm handleSearchTerm={(input)=>setSearchTerm(input)} />
        <JokeList jokes={jokes}></JokeList>
      </div>
    </>
  );
}

export default App;
