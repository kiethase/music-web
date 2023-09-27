import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import { Relaxing, Home } from "./pages";

function App() {
  document.onclick = () => applyCursorRippleEffect(event);

    // Hiệu ứng click giọt nước lan trong website
    function applyCursorRippleEffect(e) {
      const ripple = document.createElement("div");
  
      ripple.className = "ripple";
      document.body.appendChild(ripple);
  
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
  
      ripple.style.animation = "ripple-effect .4s  linear";
      ripple.onanimationend = () => document.body.removeChild(ripple);
    }
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
