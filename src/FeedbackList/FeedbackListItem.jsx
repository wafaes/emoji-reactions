import React from "react";

const FeedbackItem = ({ emoji, message, onClick }) => {
  return (
    <span
      onClick={onClick}
      style={{
        fontSize: "2rem",
        margin: "0 10px",
        cursor: "pointer",
      }}
      title={message}
    >
      {emoji}
    </span>
  );
};

export default FeedbackItem;
