import React from "react";

const SelectedFeedbackDisplay = ({ feedback }) => {
  if (!feedback) {
    return <p>Please select an emoji to leave feedback.</p>;
  }

  return (
    <p>
      Your Feedback: {feedback.emoji} - "{feedback.message}"
    </p>
  );
};

export default SelectedFeedbackDisplay;
