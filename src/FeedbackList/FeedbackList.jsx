import React from "react";
import FeedbackItem from "./FeedbackListItem";

const FeedbackList = ({ emojis, onFeedbackSelect}) => {
  return (
    <div>
      {emojis.map((item, index) => (
        <FeedbackItem
          key={index}
          emoji={item.emoji}
          message={item.message}
          onClick={() => onFeedbackSelect(item)}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
