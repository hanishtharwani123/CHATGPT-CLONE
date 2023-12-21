import React from "react";
import Main from "./components/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/dashboard" element={</>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
