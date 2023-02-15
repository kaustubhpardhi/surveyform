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
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
      <Routes>
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
