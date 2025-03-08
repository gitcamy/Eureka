import React, { useState } from "react";
import "./Cards.css";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
} from "@mui/material";

const StackedbenefitsCards = ({ data, title }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % data.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + data.length) % data.length);
  };

  const getCardStyle = (index) => {
    const diff = (index - currentCard + data.length) % data.length;
    const isActive = diff === 0;
    const isBehind = diff > 0;

    const verticalOffset = isActive ? 0 : isBehind ? -20 : 20;
    const horizontalOffset =
      diff === 0
        ? 0
        : diff === 1
        ? 75
        : diff === 2
        ? -90
        : diff === 3
        ? 0
        : -30;

    const isMobile = window.innerWidth <= 480;

    return {
      position: "absolute",
      top: `${verticalOffset}px`,
      left: `${horizontalOffset}px`,
      width: isMobile ? "70%" : "100%",
      height: isMobile ? 300 : 500,
      transform: isActive
        ? "scale(1)"
        : `scale(${0.95 - Math.abs(diff) * 0.05})`,
      opacity: isActive ? 1 : 0.8 - Math.abs(diff) * 0.2,
      zIndex: data.length - Math.abs(diff),
      transition: "all 0.3s ease-in-out",
      cursor: "pointer",
      backgroundColor: "#fff",
      borderRadius: "10px",
    };
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "16px",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        style={{ marginBottom: "3rem", fontFamily: "Big Caslon" }}
      >
        {title}
      </Typography>

      <div style={{ position: "relative", height: 600 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            style={{
              position: "absolute",
              left: 0,
              zIndex: 50,
            }}
            onClick={prevCard}
            className="card"
          >
            &#8249;
          </Button>

          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "500px",
              height: "100%",
            }}
          >
            {data.map((benefit, index) => (
              <>
                {benefit.isImage === false ? (
                  <>
                    <Card
                      key={index}
                      style={getCardStyle(index)}
                      onClick={() => setCurrentCard(index)}
                      elevation={3}
                      className="card"
                    >
                      <CardHeader
                        title={
                          <div style={{ textAlign: "center" }}>
                            <div
                              style={{
                                padding: "16px",
                                borderRadius: "50%",
                                width: "fit-content",
                                margin: "0 auto 16px",
                              }}
                            >
                              <i className={benefit.icon} />
                            </div>
                            <h3 className="cardTitle">{`${benefit.title}`}</h3>
                          </div>
                        }
                      />
                      <CardContent>
                        <div className="text-container">
                          <p>{benefit.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </>
                ) : (
                  <Card
                    key={index}
                    style={{ ...getCardStyle(index), border: "none" }}
                    onClick={() => setCurrentCard(index)}
                    elevation={3}
                    className="card"
                  >
                    <img
                      alt={benefit.description}
                      src={benefit.image}
                      key={benefit.title}
                      className="cardImage"
                    />
                  </Card>
                )}
              </>
            ))}
          </div>

          <Button
            variant="outlined"
            style={{ position: "absolute", right: 0, zIndex: 50 }}
            onClick={nextCard}
            className="card"
          >
            &#8250;
          </Button>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {data.map((_, index) => (
            <div
              key={index}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: index === currentCard ? "#1976d2" : "#e0e0e0",
                cursor: "pointer",
              }}
              onClick={() => setCurrentCard(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackedbenefitsCards;
