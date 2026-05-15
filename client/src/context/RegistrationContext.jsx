import React, { createContext, useState, useContext } from 'react';

const RegistrationContext = createContext();

export const useRegistration = () => useContext(RegistrationContext);

export const RegistrationProvider = ({ children }) => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);

  const openRegistrationModal = (tripData) => {
    setSelectedTrip(tripData);
    setIsRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
    setSelectedTrip(null);
  };

  return (
    <RegistrationContext.Provider 
      value={{ 
        isRegistrationModalOpen, 
        openRegistrationModal, 
        closeRegistrationModal,
        selectedTrip
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};
