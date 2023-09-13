import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import { Relaxing, Home } from "./pages";
function App() {
  return (
    <>
      <AppProvider>
        <Routes>
          <Route path="/" exc element={<Home />} />
          <Route path="/relaxing" exc element={<Relaxing />} />
        </Routes>
      </AppProvider>
    </>
  );
}

export default App;
