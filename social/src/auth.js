import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const AuthContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  return (
    <UserContext.Provider value={{ currentUser: currentUser, setCurrentUser: setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
