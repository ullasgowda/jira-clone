import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./components/common/Layout/AppLayout";

import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
