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

  return (
    <div className="App">
      <DatePicker setDate={setDate} />
      {!Object.keys(apod).length && <p>Yükleniyor...</p>}
      {error && <p>Network Error: {error}</p>}
      {Object.keys(apod).length && !error && <View dataProp={apod} />}
    </div>
  );
}

export default App;
