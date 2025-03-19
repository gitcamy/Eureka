import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./MobileCards.css"; // Optional: Create a CSS file for styling

// const data = [
//   { id: 1, title: "Card 1", description: "This is the first card." },
//   { id: 2, title: "Card 2", description: "This is the second card." },
//   { id: 3, title: "Card 3", description: "This is the third card." },
// ];

function MobileCards({ title, data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    } else if (direction === "right") {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + data.length) % data.length
      );
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="mobile-card-container" {...handlers}>
      <div className="container">
        <h1 className="mobile-card-container-title">{title}</h1>
      </div>

      <div className="mobile-card">
        {data[currentIndex].isImage ? (
          <>
            {" "}
            <img
              alt={data[currentIndex].title}
              src={data[currentIndex].image}
              className="mobile-card-img"
            ></img>
          </>
        ) : (
          <>
            <div className="mobile-card-content">
              <h2 className="mobile-card-title">{data[currentIndex].title}</h2>
              <p>{data[currentIndex].description}</p>
            </div>
          </>
        )}
      </div>
      <div className="swipe-msg-box">
        <span>Swipe to find out &rarr;</span>
      </div>
    </div>
  );
}

export default MobileCards;
