import {
  Typography,
  Box,
  Button,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState, memo } from "react";
import logo from "./meerut.jpg";
import FormInput from "./components/FormInput";
import axios from "axios";
import Footer from "./components/footer";
import bob from "./bob.webp";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Success from "./components/success";
import { useNavigate } from "react-router-dom";
import Form from "./form";
import Login from "./components/login";
import RequireAuth from "./components/RequireAuth";

function App() {
  useEffect(() => {
    // Set Cache-Control: no-store header
    const setNoStoreHeader = () => {
      const meta = document.createElement("meta");
      meta.httpEquiv = "Cache-Control";
      meta.content = "no-store";
      document.head.appendChild(meta);
    };

    // Set Pragma: no-cache header
    const setNoCacheHeader = () => {
      const meta = document.createElement("meta");
      meta.httpEquiv = "Pragma";
      meta.content = "no-cache";
      document.head.appendChild(meta);
    };

    setNoStoreHeader();
    setNoCacheHeader();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Form />

            // <RequireAuth>
            //   <Form />
            // </RequireAuth>
          }
        />
      </Routes>
      <Routes>
        <Route path="/success" element={<Success />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
