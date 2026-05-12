import React, { createContext, useContext, useState } from 'react';

const FeedbackContext = createContext();

export const useFeedback = () => {
  return useContext(FeedbackContext);
};

export const FeedbackProvider = ({ children }) => {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const openFeedbackModal = () => setIsFeedbackModalOpen(true);
  const closeFeedbackModal = () => setIsFeedbackModalOpen(false);

  return (
    <FeedbackContext.Provider value={{ isFeedbackModalOpen, openFeedbackModal, closeFeedbackModal }}>
      {children}
    </FeedbackContext.Provider>
  );
};
