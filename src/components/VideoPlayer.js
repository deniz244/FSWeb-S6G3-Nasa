import React from "react";

export default function VideoPlayer(props) {
  const { apod } = props;

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={apod.url}
        title={apod.title}
        allowFullScreen
      ></iframe>
    </div>
  );
}
