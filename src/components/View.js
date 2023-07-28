import React from "react";
import VideoPlayer from "./VideoPlayer";
import ImageViewer from "./ImageViewer";

export default function View(props) {
  const { dataProp: apod } = props;
  return (
    <div>
      <h1>{apod.title}</h1>
      <span>{apod.date}</span>
      <p>{apod.explanation}</p>
      {apod.media_type === "video" && <VideoPlayer apod={apod} />}
      {apod.media_type === "image" && <ImageViewer apod={apod} />}
    </div>
  );
}
