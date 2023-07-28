import React from "react";

export default function ImageViewer(props) {
  const { apod } = props;

  return (
    <div>
      <img src={apod.hdurl} alt={apod.title} />
    </div>
  );
}
