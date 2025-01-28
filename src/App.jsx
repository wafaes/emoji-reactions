import React, { useState } from "react";
//import FeedbackList from "./FeedbackList/Feedbacklist.jsx";
import FeedbackList from "./FeedbackList/Feedbacklist.jsx";
import SelectedFeedbackDisplay from "./SelectedFeedbackDisplay/SelectedFeedbackDisplay.jsx";

const App = () => {
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const emojis = [
    { emoji: "😊", message: "Happy" },
    { emoji: "😐", message: "Neutral" },
    { emoji: "😢", message: "Sad" },
    { emoji: "🤔", message: "Thinking" },
  ];

  const handleFeedbackSelect = (feedback) => {
    setSelectedFeedback(feedback);
  };

  return (
    <div>
      <h1>How was your experience?</h1>
      <FeedbackList
        emojis={emojis}
        onFeedbackSelect={setSelectedFeedback}
/>
      <SelectedFeedbackDisplay feedback={selectedFeedback} />
    </div>
  );
};

export default App;
