import React from "react";
import VideoPlayer from "./VideoPlayer";
import ImageViewer from "./ImageViewer";

export default function View(props) {
  const { dataProp: apod } = props;

  return (
    <div>
      <div className="mainText">
        <h2>{apod.title}</h2>
        <span>{apod.date}</span>
        <p>{apod.explanation}</p>
      </div>

      <div className="mediaContainer">
        {apod.media_type === "video" && <VideoPlayer apod={apod} />}
        {apod.media_type === "image" && <ImageViewer apod={apod} />}
      </div>
    </div>
  );
}
