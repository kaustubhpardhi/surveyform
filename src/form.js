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
  // const [selectedZone, setSelectedZone] = useState("");
  // const [selectedWard, setSelectedWard] = useState("");
  // const [selectedArea, setSelectedArea] = useState("");
  // const [wardOptions, setWardOptions] = useState([]);
  // const [areaOptions, setAreaOptions] = useState([]);
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
  // const zones = {
  //   1: {
  //     wards: {
  //       1: [
  //         "Nayi Basti Lallapura",
  //         "Bhimnagar",
  //         "Vikas Nagar",
  //         "Shivhari Mandir",
  //         "Siddarth Pooram",
  //         "Nayi Basti Mohan Ram Mandir",
  //         "Ekta Vihar",
  //       ],
  //       2: [
  //         "Maliyana",
  //         "Islam Nagar",
  //         "Sanjay Colony",
  //         "Jaswant Sugar Mill",
  //         "Dakshin Bhag",
  //         "Holi Chowk",
  //         "Jaswant Nagar",
  //         "Maliyana Road Islam Nagar",
  //         "Devpark",
  //         "Maliyana Bagpat Road",
  //         "Shantikunj",
  //         "Shakti Nagar",
  //         "Nandani Kunj",
  //         "Ganga Colony",
  //       ],
  //       3: ["Bhagwat Pura", "Laxmanpuri", "Horam Nagar", "Ganesh Puri"],
  //       4: [
  //         "Mayur Vihar",
  //         "Ansal Colony Surya Dev Vihar",
  //         "E-Block Shastrinagar",
  //         "Surya Vihar",
  //         "Chanakyapuri",
  //         "Sai Nagar",
  //         "Sher Gadi",
  //         "Laxmi Vihar",
  //         "9-Cloud",
  //         "Golden Tower",
  //         "S2S Carnation",
  //         "Gyan Niketan",
  //         "Chandrakala Enclave",
  //         "Agrasen Vihar",
  //         "Ashok Vihar",
  //       ],
  //       5: ["Shivlokpuri", "Chowk Mohalla", "Sadanpuri", "Mehendi Mohalla", ""],
  //       6: ["Area 1", "Area 2", "Area 3"],
  //       7: ["Area 1", "Area 2", "Area 3"],
  //       8: ["Area 1", "Area 2", "Area 3"],
  //       9: ["Area 1", "Area 2", "Area 3"],
  //       10: ["Area 1", "Area 2", "Area 3"],
  //       11: ["Area 1", "Area 2", "Area 3"],
  //       12: ["Area 1", "Area 2", "Area 3"],
  //       13: ["Area 1", "Area 2", "Area 3"],
  //       14: ["Area 1", "Area 2", "Area 3"],
  //       15: ["Area 1", "Area 2", "Area 3"],
  //       16: ["Area 1", "Area 2", "Area 3"],
  //       17: ["Area 1", "Area 2", "Area 3"],
  //       18: ["Area 1", "Area 2", "Area 3"],
  //       19: ["Area 1", "Area 2", "Area 3"],
  //       20: ["Area 1", "Area 2", "Area 3"],
  //       21: ["Area 1", "Area 2", "Area 3"],
  //       22: ["Area 1", "Area 2", "Area 3"],
  //       23: ["Area 1", "Area 2", "Area 3"],
  //       24: ["Area 1", "Area 2", "Area 3"],
  //       25: ["Area 1", "Area 2", "Area 3"],
  //       26: ["Area 1", "Area 2", "Area 3"],
  //       27: ["Area 1", "Area 2", "Area 3"],
  //       28: ["Area 1", "Area 2", "Area 3"],
  //       29: ["Area 1", "Area 2", "Area 3"],
  //       30: ["Area 1", "Area 2", "Area 3"],
  //     },
  //   },
  //   2: {
  //     wards: {
  //       31: ["Area 1", "Area 2", "Area 3"],
  //       32: ["Area 4", "Area 5", "Area 6"],
  //       33: ["Area 1", "Area 2", "Area 3"],
  //       34: ["Area 1", "Area 2", "Area 3"],
  //       35: ["Area 1", "Area 2", "Area 3"],
  //       36: ["Area 1", "Area 2", "Area 3"],
  //       37: ["Area 1", "Area 2", "Area 3"],
  //       38: ["Area 1", "Area 2", "Area 3"],
  //       39: ["Area 1", "Area 2", "Area 3"],
  //       40: ["Area 1", "Area 2", "Area 3"],
  //       41: ["Area 1", "Area 2", "Area 3"],
  //       42: ["Area 1", "Area 2", "Area 3"],
  //       43: ["Area 1", "Area 2", "Area 3"],
  //       44: ["Area 1", "Area 2", "Area 3"],
  //       45: ["Area 1", "Area 2", "Area 3"],
  //       46: ["Area 1", "Area 2", "Area 3"],
  //       47: ["Area 1", "Area 2", "Area 3"],
  //       48: ["Area 1", "Area 2", "Area 3"],
  //       49: ["Area 1", "Area 2", "Area 3"],
  //       50: ["Area 1", "Area 2", "Area 3"],
  //       51: ["Area 1", "Area 2", "Area 3"],
  //       52: ["Area 1", "Area 2", "Area 3"],
  //       53: ["Area 1", "Area 2", "Area 3"],
  //       54: ["Area 1", "Area 2", "Area 3"],
  //       55: ["Area 1", "Area 2", "Area 3"],
  //       56: ["Area 1", "Area 2", "Area 3"],
  //       57: ["Area 1", "Area 2", "Area 3"],
  //       58: ["Area 1", "Area 2", "Area 3"],
  //       59: ["Area 1", "Area 2", "Area 3"],
  //       60: ["Area 1", "Area 2", "Area 3"],
  //     },
  //   },
  //   3: {
  //     wards: {
  //       61: ["Area 1", "Area 2", "Area 3"],
  //       62: ["Area 4", "Area 5", "Area 6"],
  //       63: ["Area 1", "Area 2", "Area 3"],
  //       64: ["Area 1", "Area 2", "Area 3"],
  //       65: ["Area 1", "Area 2", "Area 3"],
  //       66: ["Area 1", "Area 2", "Area 3"],
  //       67: ["Area 1", "Area 2", "Area 3"],
  //       68: ["Area 1", "Area 2", "Area 3"],
  //       69: ["Area 1", "Area 2", "Area 3"],
  //       70: ["Area 1", "Area 2", "Area 3"],
  //       71: ["Area 1", "Area 2", "Area 3"],
  //       72: ["Area 1", "Area 2", "Area 3"],
  //       73: ["Area 1", "Area 2", "Area 3"],
  //       74: ["Area 1", "Area 2", "Area 3"],
  //       75: ["Area 1", "Area 2", "Area 3"],
  //       76: ["Area 1", "Area 2", "Area 3"],
  //       77: ["Area 1", "Area 2", "Area 3"],
  //       78: ["Area 1", "Area 2", "Area 3"],
  //       79: ["Area 1", "Area 2", "Area 3"],
  //       80: ["Area 1", "Area 2", "Area 3"],
  //       81: ["Area 1", "Area 2", "Area 3"],
  //       82: ["Area 1", "Area 2", "Area 3"],
  //       83: ["Area 1", "Area 2", "Area 3"],
  //       84: ["Area 1", "Area 2", "Area 3"],
  //       85: ["Area 1", "Area 2", "Area 3"],
  //       86: ["Area 1", "Area 2", "Area 3"],
  //       87: ["Area 1", "Area 2", "Area 3"],
  //       88: ["Area 1", "Area 2", "Area 3"],
  //       89: ["Area 1", "Area 2", "Area 3"],
  //       90: ["Area 1", "Area 2", "Area 3"],
  //     },
  //   },
  // };
  const zonelist = ["1", "2", "3", "4"];
  const licenselist = ["Yes", "No"];
  const handleImage = (event) => {
    const file = event.target.files[0];

    // Check if the selected file is an image file
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");

      // Reset the value of the file input to empty
      event.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result;
      setBase64(base64);
    };
  };

  console.log(base64);
  // const handleZoneChange = (e) => {
  //   const zoneId = e.target.value;
  //   setSelectedZone(zoneId);
  //   setSelectedWard("");
  //   setSelectedArea("");
  //   setWardOptions(Object.keys(zones[zoneId].wards));
  //   setAreaOptions([]);
  // };

  // const handleWardChange = (e) => {
  //   const wardId = e.target.value;
  //   setSelectedWard(wardId);
  //   setSelectedArea("");
  //   setAreaOptions(zones[selectedZone].wards[wardId]);
  // };

  // const handleAreaChange = (e) => {
  //   setSelectedArea(e.target.value);
  // };
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
              MEERUT NAGAR NIGAM MERCHANT DATABASE ONBOARDING
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
          {/* <FormControl>
            <FormLabel sx={{ mb: 1, color: "black" }} htmlFor="for">
              Select Zone
            </FormLabel>
            <Select
              id="city"
              placeholder="Choose"
              sx={{ width: "75%" }}
              color="third"
              size="small"
              defaultValue={0}
              value={selectedZone}
              onChange={handleZoneChange}
            >
              <MenuItem value={0} disabled>
                Choose
              </MenuItem>
              {Object.keys(zones).map((zoneId) => (
                <MenuItem value={zoneId} key={zoneId}>
                  Zone {zoneId}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {selectedZone && (
            <FormControl>
              <FormLabel sx={{ mb: 1, color: "black" }} htmlFor="for">
                Select Ward
              </FormLabel>
              <Select
                id="city"
                placeholder="Choose"
                sx={{ width: "75%" }}
                color="third"
                size="small"
                defaultValue={0}
                value={selectedWard}
                onChange={handleWardChange}
              >
                <MenuItem value={0} disabled>
                  Choose
                </MenuItem>
                {wardOptions.map((wardId) => (
                  <MenuItem value={wardId} key={wardId}>
                    Ward {wardId}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          {selectedWard && (
            <FormControl>
              <FormLabel sx={{ mb: 1, color: "black" }} htmlFor="for">
                Select Area
              </FormLabel>
              <Select
                id="city"
                placeholder="Choose"
                sx={{ width: "75%" }}
                color="third"
                size="small"
                defaultValue={0}
                value={selectedArea}
                onChange={handleAreaChange}
              >
                <MenuItem value={0} disabled>
                  Choose
                </MenuItem>
                {areaOptions.map((areaName) => (
                  <MenuItem value={areaName} key={areaName}>
                    {areaName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )} */}
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
