import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import View from "./components/View";
import DatePicker from "./components/DatePicker";

const url =
  "https://api.nasa.gov/planetary/apod?api_key=IRJeAq9AyTTWD6exc7voehI8iAyoniavLesbLUzJ";

function App() {
  const [apod, setApod] = useState({});

  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "IRJeAq9AyTTWD6exc7voehI8iAyoniavLesbLUzJ",
          date: date,
          thumbs: true,
        },
      })
      .then((res) => {
        setApod(res.data);
        setError(null);
      })
      .catch(function (error) {
        console.log(error);
        setError(error.message);
      });
  }, [date]);

  const viewerBg = {
    backgroundImage: `url(${
      apod.media_type === "image" ? apod.url : apod.thumbnail_url
    })`,
    backgroundSize: "cover",
    //filter: "blur(5px)",
  };

  /*style={viewerBg}*/

  return (
    <div className="App">
      {!Object.keys(apod).length && <p className="loading">Yükleniyor...</p>}
      {error && <p className="loading">Network Error: {error}</p>}

      <div className="row header">
        <div className="title">
          <h1>Spacetagram</h1>
          <p>Brought to you by NASA's Astronomy Photo Of The Day (APOD) API</p>
        </div>
        <div className="date-picker">
          <DatePicker date={date} setDate={setDate} />
        </div>
      </div>

      {Object.keys(apod).length && !error && <View dataProp={apod} />}
    </div>
  );
}

export default App;
