import React from "react";

export default function ImageViewer(props) {
  const { apod } = props;

  return (
    <div>
      <img src={apod.url} alt={apod.title} />
    </div>
  );
}
