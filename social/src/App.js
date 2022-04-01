import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Explorer from "./pages/Explorer";
import Feed from "./pages/Feed";
import NotFound from "./pages/NotFound";

import { UserContext } from "./auth";
import Login from "./pages/Login";

const App = () => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
