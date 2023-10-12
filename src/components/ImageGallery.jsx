/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

import { useState } from "react";

function Image({ src, onRemove }) {
  function handleRemove() {
    onRemove(src);
  }

  return (
    <div className="image">
      <img src={src} alt="gallery" />
      <button className="remove" onClick={handleRemove}>
        X
      </button>
    </div>
  );
}

export function ImageGallery({ links }) {
  const [gallery, setGallery] = useState(links);

  function handleRemove(src) {
    setGallery((prevGallery) => prevGallery.filter((link) => link !== src));
  }

  return (
    <div>
      {/* Implement here the Image Gallery using <Image /> component */}
      {gallery.map((link, index) => (
        <Image key={index} src={link} onRemove={handleRemove} />
      ))}
    </div>
  );
}
