import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const url =
  "https://api.nasa.gov/planetary/apod?api_key=IRJeAq9AyTTWD6exc7voehI8iAyoniavLesbLUzJ";

function App() {
  const [apod, setApod] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setApod(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h2>{apod.title}</h2>
      {apod === null ? "yükleniyor" : <img src={apod.url} alt="günün fotosu" />}

      <p>{apod.explanation}</p>
    </div>
  );
}

export default App;
