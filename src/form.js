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
import "./form.css";
import { Routes, Route } from "react-router-dom";
import Success from "./components/success";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const [ownerName, setOwnerName] = useState();
  const [shopOwnerName, setShopOwnerName] = useState();
  const [fhName, setFHName] = useState();
  const [qualification, setQualification] = useState("");
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [shopName, setShopName] = useState("");
  const [shopAddress, setShopAddress] = useState("");
  const [businessCategory, setBusinessCategory] = useState("");
  const [since, setSince] = useState("");
  const [employees, setEmployees] = useState("");
  const [size, setSize] = useState("");
  const [zone, setZone] = useState("");
  const [ward, setWard] = useState("");
  const [license, setLicense] = useState("");
  const [fse, setFse] = useState("");
  const [gender, setGender] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [base64, setBase64] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);
  console.log(latitude);
  console.log(longitude);
  console.log(gender);
  const genderlist = ["Male", "Female", "Prefer not to say"];
  const qualificationlist = [
    "10th",
    "12th",
    "Graduate",
    "Post Graduate",
    "Others",
  ];
  const occupationlist = [
    "Job",
    "Business",
    "Student",
    "Housewife",
    "Self Employed",
  ];
  const categorylist = [
    "Hotel Lodging and Guest House/Marriage Hall",
    "5 Star Hotels",
    "3 Star Hotels",
    "Maternity Home upto 20 Beds",
    "Maternity Home above 20 Beds",
    "Nursing Home upto 20 Beds",
    "Nursing Home above 20 Beds",
    "Private Hospital",
    "Pathology Lab",
    "X-Ray Clinic",
    "City Scan/MRI",
    "Ultrasound/Color Doppler/ECG Center",
    "Dental Clinic",
    "Private Clinic",
    "Finanace Company/Chit Fund",
    "Insurance Company(per branches)",
    "Bakery",
    "Ice Factory,Ice Cream Factory",
    "Ice Company",
    "Builders(registered)",
    "Country Liquor per Shop",
    "Foreign Liquor per Shop",
    "Bar/Beer Shop",
    "Model Shop",
    "Departmental Shop Grocery 10x10",
    "Departmental Shop Grocery Above 10x10",
    "Private Mobile Phone Tower",
    "Cable Centre",
    "Restaurant",
    "Animal License",
    "Jigsaw Machine",
    "Power Loom",
    "Flour Mill",
    "Latte Machine",
    "Oil Speller",
    "Auto Rickshaw 4 Seater",
    "Auto Ricshaw 7 Seater ",
    "Minibus",
    "Bus",
  ];
  const zonelist = ["1", "2", "3", "4"];
  const licenselist = ["Yes", "No"];
  const handleImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result;
      setBase64(base64);
    };
  };
  console.log(base64);

  const handleForm = async (event) => {
    event.preventDefault();
    if (!ownerName) {
      return alert("Owner Name Not Found");
    }
    if (!shopOwnerName) {
      return alert("Shop Owner Not Found");
    }
    if (!qualification) {
      return alert("Qualification Not Found");
    }
    if (!fhName) {
      return alert("Father/Husband Name Not Found");
    }
    if (!email) {
      return alert("Email Not Found");
    }
    if (!/^(\+\d{1,3}[- ]?)?\d{10}$/i.test(number)) {
      return alert("Please Provide a valid mobile number");
    }
    const latlong = `${latitude},${longitude}`;
    console.log(latlong);
    const postdata = {
      ownerName,
      shopOwnerName,
      fhName,
      gender,
      qualification,
      occupation,
      email,
      number,
      shopName,
      shopAddress,
      businessCategory,
      since,
      employees,
      size,
      zone,
      ward,
      license,
      fse,
      latlong,
      base64,
    };

    try {
      // Set loading to true
      setLoading(true);

      // Make the post request and wait for the response
      const response = await axios.post("/form/saveform", postdata);

      // Reset the form and navigate to the success page
      resetForm();
      navigate("/success");
    } catch (error) {
      console.log(error);
      alert("Form submission failed");
    } finally {
      // Set loading back to false after the response is received
      setLoading(false);
    }
  };
  const resetForm = () => {
    setOwnerName("");
    setShopOwnerName("");
    setFHName("");
    setQualification("");
    setOccupation("");
    setEmail("");
    setNumber("");
    setShopName("");
    setShopAddress("");
    setBusinessCategory("");
    setSince("");
    setEmployees("");
    setSize("");
    setZone("");
    setWard("");
    setLicense("");
    setFse("");
    setGender("");
  };
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10rem",
          height: "100%",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="App">
      <div className="header">
        <div className="sub">
          <img src={logo} alt="logo" className="logo"></img>

          <Box mb={2} className="logo-title">
            <Typography
              variant="h1"
              sx={{
                fontSize: "25px",
                fontWeight: "700",
                mt: 2,
                ml: 3,
                color: "green",
              }}
              gutterBottom
            >
              MEERUT NAGAR NIGAM MERCHANT DATABASE ONBORDING
            </Typography>
          </Box>
        </div>
        <div>
          <img src={bob} alt="bob" className="bob"></img>
        </div>
      </div>

      <Box
        component="form"
        onSubmit={handleForm}
        sx={{
          backgroundColor: "#fff",
          boxShadow: "rgb(90 114 123 / 11%) 0px 7px 30px 0px",
          px: 3,
          py: 2,
          ml: 2,
          mr: 2,
          borderRadius: "16px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr 1fr ", sm: "1fr 1fr" },
            gap: 1.2,
            mb: 2,
          }}
        >
          <FormInput
            value={ownerName}
            onChange={setOwnerName}
            label="Property Owner Name"
            id="name"
            placeholder=""
            type="text"
            disabled={false}
            required={true}
          />
          <FormInput
            value={shopOwnerName}
            onChange={setShopOwnerName}
            label="Shop Owner Name"
            id="name"
            placeholder=""
            type="text"
            disabled={false}
            required={true}
          />
          <FormInput
            value={fhName}
            onChange={setFHName}
            label="Father/Husband Name"
            id="name"
            placeholder=""
            type="text"
            disabled={false}
            required={true}
          />

          <FormControl>
            <FormLabel sx={{ mb: 1, color: "black" }} htmlFor="for">
              Gender
            </FormLabel>
            <Select
              id="city"
              placeholder="Choose"
              sx={{ width: "75%" }}
              color="third"
              size="small"
              defaultValue={0}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value={0} disabled>
                Choose
              </MenuItem>

              {genderlist.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel sx={{ mb: 1, color: "black" }} htmlFor="for">
              Qualification
            </FormLabel>
            <Select
              id="city"
              placeholder="Choose"
              sx={{ width: "75%" }}
              color="third"
              size="small"
              defaultValue={0}
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            >
              <MenuItem value={0} disabled>
                Choose
              </MenuItem>
              {qualificationlist.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel sx={{ mb: 1, color: "black" }} htmlFor="for">
              Occupation
            </FormLabel>
            <Select
              id="city"
              placeholder="Choose"
              sx={{ width: "75%" }}
              color="third"
              size="small"
              defaultValue={0}
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            >
              <MenuItem value={0} disabled>
                Choose
              </MenuItem>
              {occupationlist.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormInput
            value={email}
            onChange={setEmail}
            label="Email"
            id="name"
            placeholder=""
            type="text"
            disabled={false}
            required={true}
          />
          <FormInput
            value={number}
            onChange={setNumber}
            label="Mobile Number"
            id="mobile"
            placeholder="Enter your Number"
            type="number"
            disabled={false}
            required={true}
          />
          <FormInput
            value={shopName}
            onChange={setShopName}
            label="Shop/Trade Name"
            id="name"
            placeholder=""
            type="text"
            disabled={false}
            required={true}
          />
          <FormInput
            value={shopAddress}
            onChange={setShopAddress}
            label="Shop/Trade Address"
            id="name"
            placeholder=""
            type="text"
            disabled={false}
            required={true}
          />

          <div className="upload">
            <FormLabel sx={{ mb: 1, color: "black" }} htmlFor="for">
              Property Image
            </FormLabel>
            <div className="imageinput">
              <input onChange={(event) => handleImage(event)} type="file" />
            </div>
          </div>
          <FormControl>
            <FormLabel sx={{ mb: 1, color: "black" }} htmlFor="for">
              Business Category
            </FormLabel>
            <Select
              id="city"
              placeholder="Choose"
              sx={{ width: "75%" }}
              color="third"
              size="small"
              defaultValue={0}
              value={businessCategory}
              onChange={(e) => setBusinessCategory(e.target.value)}
            >
              <MenuItem value={0} disabled>
                Choose
              </MenuItem>
              {categorylist.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormInput
            value={since}
            onChange={setSince}
            label="Since"
            id="name"
            placeholder=""
            type="text"
            disabled={false}
            required={true}
          />
          <FormInput
            value={employees}
            onChange={setEmployees}
            label="How Many Employees ?"
            id="name"
            placeholder=""
            type="text"
            disabled={false}
            required={true}
          />
          <FormInput
            value={size}
            onChange={setSize}
            label="Size of Shop in Sq.ft"
            id="name"
            placeholder=""
            type="text"
            disabled={false}
            required={true}
          />
          <FormControl>
            <FormLabel sx={{ mb: 1, color: "black" }} htmlFor="for">
              Zone
            </FormLabel>
            <Select
              id="city"
              placeholder="Choose"
              sx={{ width: "75%" }}
              color="third"
              size="small"
              defaultValue={0}
              value={zone}
              onChange={(e) => setZone(e.target.value)}
            >
              <MenuItem value={0} disabled>
                Choose
              </MenuItem>
              {zonelist.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormInput
            value={ward}
            onChange={setWard}
            label="Ward No. 1-90"
            id="name"
            placeholder=""
            type="text"
            disabled={false}
            required={true}
          />
          <FormControl>
            <FormLabel sx={{ mb: 1, color: "black" }} htmlFor="for">
              License Available (existing license)
            </FormLabel>
            <Select
              id="city"
              placeholder="Choose"
              sx={{ width: "75%" }}
              color="third"
              size="small"
              defaultValue={0}
              value={license}
              onChange={(e) => setLicense(e.target.value)}
            >
              <MenuItem value={0} disabled>
                Choose
              </MenuItem>
              {licenselist.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormInput
            value={fse}
            onChange={setFse}
            label="FSE Code"
            id="name"
            placeholder=""
            type="text"
            disabled={false}
            required={true}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            sx={{
              mr: 2,
              textTransform: "capitalize",
              width: "120px",
              fontSize: "15px",
              fontFamily: "Montserrat",
              fontWeight: "600",
            }}
            type="submit"
            color="eighth"
            disableElevation
          >
            Submit
          </Button>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default Form;
