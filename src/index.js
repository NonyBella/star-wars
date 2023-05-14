import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MovieDetail from "./components/MovieDetail"
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/movie/:id" element={<MovieDetail /> }/>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
