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
  const userData = JSON.parse(localStorage.getItem("user"));
  const surveyorId = userData ? userData.surveyorId : null;
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
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [wardOptions, setWardOptions] = useState([]);
  const [areaOptions, setAreaOptions] = useState([]);
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
  ];
  const zones = {
    "Head Quarter 1": {
      wards: {
        3: ["Bhagvat Pura", "Ganesh Puri", "Horam Nager"],
        34: [
          "Agrawal Colony",
          "Ambedkar Nagar",
          "Balmiki Nagar",
          "Prem Vihar",
          "R. K. Puram",
          "Sai Puram",
          "Shiv Shakti Nagar",
          "Shiv Shakti Nagar - Poorvi Delhi Road",
          "Tajpal Enclav",
        ],
        36: [
          "Budhera Jahid Pur",
          "Humayun Nagar",
          "Jamuna Nagar Model Colony",
          "Rasul Nagar A-1 Colony",
        ],
        39: [
          "Brahm Puri",
          "Krishan Puri",
          "Mata Ka Baag",
          "Padav Delhi Gate",
          "Sardar Patel Ganj",
          "Shiv Shanker Puri",
        ],
        43: ["Bhram Puri", "Gautam Nagar"],
        47: [
          "Budhana Gate",
          "Purva Ahiran",
          "Purva Zadeed Shahpeer",
          "Shah Peer Gate",
          "Zahidyaan Zahidyaan",
        ],
        48: [
          "DWARIKA PURI",
          "Luv-Kush Coloney",
          "Madhav Puram-Sector-1",
          "Madhav Puram-Sector-2",
          "Madhav Puram-Sector-3",
          "Madhav Puram-Sector-4",
          "Pratap Vihar Colony",
          "Saraswati Lok",
        ],
        49: [
          "Baghpat Gate",
          "Baghshah Radka",
          "Kamboh Gate",
          "Kotla",
          "Purva Mahaveer",
          "Valley Bazar",
        ],
        54: [
          "Dwarika Puri",
          "Hari Nagar",
          "Jatan",
          "Karm Ali",
          "Khist Pazan",
          "Mahajan Para",
          "Mukarrab Hussain",
          "Poorva Ilahi Baksh",
        ],
        55: [
          "Chaman Colony",
          "Fatehulla Pur",
          "Itefaq Nagar",
          "Noor Garden",
          "PAHLWAN NAGAR",
          "Shokat Colony",
        ],
        56: [
          "Afzalu Raheem",
          "Bani Saray",
          "Mehmood Nagar",
          "Padam Pura",
          "Pilokhari Road",
          "Prahlad Nagar",
          "Saddiqu Nagar",
        ],
        62: ["Indra Nagar-I", "Indra Nagar-II"],
        64: [
          "Dev Nagar",
          "Lajpat Rai Market",
          "North Soti Ganj",
          "Patel Nagar Colony",
          "Saray Khair Nagar",
          "South Soti Ganj",
          "Uttari Patel Nagar",
        ],
        65: ["Bazar Kher Nagar", "Kher Nagar Gate", "Kothy Atanas"],
        66: [
          "Naugaza",
          "Purva Abdul Vali",
          "Purva Nihal Singh",
          "Saray Behlim",
          "Shah Ghasa",
        ],
        69: [
          "Anaaj Mandi",
          "Bajaja",
          "Chaa Mamran",
          "Chata Ali Raza",
          "Daal Mandi",
          "Dalam Pada",
          "Gujjari Bazar",
          "Holi Mohalla",
          "Ishvear Puri",
          "Kabari Bazar",
          "Kagzi Bazar",
          "Kanoon Goyan",
          "Kucha Nil",
          "Lala Ka Bazar",
          "Malwye Chowk",
          "Mufti Wara",
          "Sarafa",
          "Sarai Lal Das",
          "Shah Khaki",
          "Thater Wara",
        ],
        70: [
          "Chata Anant Ram",
          "Darud Gran",
          "Mehmood Ul Haq Road",
          "Nakkar Chiyan",
          "Padiyan",
          "Sabun Gran",
          "Shah Hantyan",
          "Smile Nagar",
          "Tirgran",
          "Toapchi Wara",
        ],
        71: [
          "Azad Nagar",
          "Dariya Ganj Dariya",
          "Purva Peer Baskh",
          "South Ishlamabad",
        ],
        72: [
          "Azad Road Gola Kuva",
          "Azad Road Sadak Garh",
          "Azad Road Sadak Hapur",
          "Bunkar Nager",
          "Luhar Pur",
          "Purvi Ishlamabad",
          "Ram Nagar",
          "State Bank Hapur Road",
          "Vikash Puri",
        ],
        74: [
          "Purva Ahamad Nager",
          "Purva Faiyaz Ali",
          "Purva Hafiz Hamied Hussain",
          "Purvi Fatha Nager",
          "Purwa Karamat Ali",
          "Shakti Nagar",
        ],
        75: [
          "Ali Bagh Colony",
          "Friends Colony",
          "Gulmarg Garden",
          "Islam Nagar",
          "Madina Colony",
          "New Shandar Colony",
          "Rihan Garden",
          "S.M COLONY/CITY GARDEN",
          "Samar Gardan Islam Nagar",
          "Samar Garden",
          "Shahjahan Colony",
          "SHAHZAD COLONY",
          "Ujjawal Garden",
        ],
        76: [
          "Eidgaha Golden Colony",
          "Paschimi Khushhal Nagar",
          "Shyam Nagar New",
          "Tara Puri Khushal Nagar",
          "Umar Garden",
        ],
        77: ["Lakhi Pura"],
        78: [
          "Batwara",
          "Beeru Chah",
          "Chah Shor",
          "Chippi Wara",
          "Jattiwara",
          "Khandak",
          "Krishan Pada",
          "Mori Pada",
          "Pada Mal",
          "Raijad Gan",
          "Sarai Jeena",
          "Subash Bazar",
          "Swami Para",
          "Veddhavada",
        ],
        79: ["Hapur Road-Umar Nagar", "Kidvai Nagar"],
        8: [
          "Bhagwati Kunj",
          "Era Gardenia Estate",
          "Lisari",
          "Nangla Sher Khan {Jain Pur}",
          "Noor Nagar",
        ],
        81: [
          "Eidgaha Colony",
          "Mumtaj Nagar",
          "NEW SAMAR COLONY",
          "Samar Colony",
          "Samar Colony D-Block",
          "Tara Puri",
          "Tara Puri Abrar Nagar",
        ],
        82: ["Fatehullahpur Road", "Hapur Road (Ashiyana Colony)"],
        83: ["Fatehullahpur Road"],
        84: ["Fatehullahpur Road"],
        85: [
          "Rasul Nagar",
          "Rasul Nagar (Haqimudden Colony)",
          "Zakir Hussain Colony",
        ],
        86: ["Zakir Hussain Colony"],
        87: ["Zakir Hussain Colony"],
        88: [
          "Eidghah Goldan",
          "Mazeed Nagar",
          "Shalimar Garden",
          "Shayam Nagar",
        ],
        89: ["Gulzar Ibrahim", "Miya Mohd. Nagar", "Rashid Nagar"],
        90: ["Alvi Nagar", "Firoj Nagar", "Shakoor Nagar"],
      },
    },
    "Kankar Khera 1": {
      wards: {
        1: ["Kankar Khera1", "New Basti", "Shiv Hari Mandir"],
        3: ["Bhagvat Pura", "Ganesh Puri", "Horam Nager"],
        10: [
          "Acchronda",
          "Bral Partapur",
          "Gangol Road",
          "Kahsi",
          "Katai Meel (Shiv Nagar)",
        ],
        11: ["Chauhan Puri New Basti", "Devta Puram", "Shiv Puram"],
        12: [
          "Chaman Vihar",
          "Jawahar Nagar",
          "Melfort City",
          "Nihal State",
          "Shobha Pur",
          "Shri Ram Vihar",
          "Surya City",
          "Varnika State",
          "Vikas Garden",
          "Yogi Puram",
        ],
        15: [
          "Maifyer Colony Baghpat Road",
          "Multan Nagar",
          "Pushp Vihar",
          "Ratan Nagar",
          "Rishi Nagar",
          "Shak Pura",
        ],
        19: [
          "Daabka",
          "Dayam Pur",
          "Ganesh Vatika",
          "Ikhlash Nagar Daabka",
          "Lakhvaya Rasool Pur",
          "Murlipur Gulab",
          "Rama Garden",
          "Sai Dham",
          "Silver City",
        ],
        2: [
          "Maliiyana Shanti Kunj",
          "Maliyana",
          "Maliyana Bagpat Road",
          "Maliyana (Jasvant Nagar)",
          "Maliyana Gagan Kunj",
          "Maliyana Road",
          "Sanjay Colony",
        ],
        21: [
          "Arya Nagar",
          "Defance Plaza",
          "Defence Enclave A Bock",
          "Defence Enclave B Block",
          "Defence Enclave -C Block",
          "Jagdish Puram",
          "Mangal Puri",
          "Model Town",
          "Ram Nagar",
          "Sher Building Sardhana Road",
          "Sunder Nagar",
          "Tulshi Calony",
        ],
        22: [
          "Era City",
          "Gagan Enclave",
          "Gagan Vihar",
          "Gokul Vihar",
          "Gola Badh",
          "Hardev Nagar",
          "Nand Vihar",
          "Sangam Vihar",
          "Sarasvati Vihar/ Vikas Colony",
          "Shanti Kunj",
          "Shivram Puram",
          "Triupati Enclave",
        ],
        23: [
          "Bada Bazaar",
          "Badam Mandi",
          "Chota Bazar",
          "Govind Puri",
          "Jawahar Puri",
          "Patel Puri",
          "Prem Puri",
          "Subhash Puri",
        ],
        25: [
          "Anoop Nagar",
          "Bannu Miyan Colony",
          "Faajal Pur",
          "Khateek Pura",
          "Krishna Colony",
          "Nai Basti Faajal Pur",
          "New Sainik Vihar",
          "Surya Colony",
          "Tej Vihar",
        ],
        27: [
          "Mukarrab Pur Palahda",
          "Anand Lok&Balvant Enclave",
          "Balwant Enclave",
          "KIRTI NAGAR",
          "Mukkarabpur Palhera",
          "Pallav Puram 1 (Block C-D)",
          "Pallav Puram 1 (Ch)",
          "Pallav Puram 1 (Cl)",
          "Pallav Puram 1 (Dh)",
          "Pallav Puram 1 (Lig & Mig)",
          "Pallav Puram 1 (N- Block)",
          "Pallav Puram 1B",
          "Pallav Puram Phase 1 (G-Block)",
          "Pallav Puram Sfs (A,E & F) Block",
          "Pallavpuram Phase 1",
          "Royal Park Colony",
          "Sheel Kunj Colony",
          "Vijayta Appartment",
        ],
        28: [
          "Dr. Ambedkar Collony",
          "Indira  Colony",
          "Partapur Industrial Area",
          "Purvi Rithani",
          "Rijhani",
          "West Rithani (Phase 2)",
        ],
        30: [
          "ANSAL COURTYARD(APPARTMENT)",
          "ANSAL TOWN",
          "Bharat Vihar",
          "Dev Nagar",
          "Durga Colony",
          "DURGA FARM",
          "Golden Avenue Iii",
          "Golden Avenue Market Rookree Road",
          "Golden Avenue-1",
          "Golden Avenue-Ii",
          "Green Park Colony",
          "Modipuram",
          "N.C.COLONY, Modi Puram, MEERUT",
          "Pusp Vihar",
          "Queens Land Park Colony",
          "Roshanpur Daurli",
          "ROSHNI KUNJ",
          "Shiv Nagar",
          "Subhash Colony",
          "Suncity Calony",
        ],
        31: [
          "Garden View",
          "Kanchanpur Ghopla",
          "Panchwati (Shatabdi Nagar)",
          "Raj Kamal Enclave (Purvi Rithani)",
          "Shatabdi Nagar",
          "Vrindavan Enclave",
        ],
        35: [
          "Beri Pura",
          "Delhi Road",
          "Gupta Colony",
          "Hafizabad Mevla",
          "Indira Puram",
          "Kamla Nagar",
          "Nandan Naga",
          "Panjabi Pura Ii T.P",
          "Punjabi Pura",
          "Punjabi Pura 1 (Shambhu Nagar",
          "Raghukul Vihar",
          "Sant Vihar",
          "Shambhu Nagar",
          "T.P Nagar",
          "Uttam Nagar",
        ],
        38: [
          "Godwin Colony Greenwood City",
          "Khadoli",
          "Lavkush Puram",
          "Pathaan Pura",
          "Pavti",
          "Wander City(By Pass Delhi Road)",
        ],
        40: [
          "Anushri Enclave Colony",
          "Bukhar Pura",
          "Ch. Bheem Singh Nagar",
          "Dantal Jatoli",
          "Gayatri Green",
          "Hari Lok Colony",
          "Hari Nagar",
          "Jatoli",
          "Kishan Kunj",
          "Nateshpuram",
          "New Friends Colony",
          "North Sardhana",
          "North Sardhana Road",
          "Officers Colony",
          "Omnagar",
          "Phool Singh Nagar",
          "Raj Nagar",
          "Sant Vihar",
          "Satyam Vihar",
          "Sec-6 Shraddha Puri",
          "Sec-9 Shraddha Puri",
          "Sec-C Shraddha Puri Block 1",
          "Shardapuri E-1 Block",
          "Shauraj Vatika",
          "Shraddha Puri, Sec-1",
          "Shraddha Puri,Sector-4",
          "Shradhha Puri Sector-3",
          "Shradhha Puri, Sector-7",
          "Shradhha Puri,Sector-2,Mda Market",
          "Shradhhapuri Sector-L1",
          "Uttari Sardhana Road",
        ],
        41: [
          "510 Colony",
          "Ark City",
          "Ashok Nagar",
          "Badrish Puram",
          "Badrish Puram City Super Market",
          "Bhagwati Kunj",
          "Dev Nagar Khirva Road",
          "Dream City",
          "EUROPEAN ESTATE",
          "Ganpati Enclave",
          "Ganpati Vihar",
          "Garden City",
          "Gayatri Heights",
          "Gulmohar Enclave",
          "Hind Nagar (Nagla Tashi)",
          "Jaat Colony",
          "Khirva Road",
          "Lakshmi Vihar",
          "Laxmi Nagar (Nangla Tahsi)",
          "Nangla Tasi",
          "Narendra Nagar",
          "Neel Kanth Enclave Colony",
          "Omolik Enclave Khirva Road",
          "SAINIK Colony",
          "Sainik Vihar A Block",
          "Sainik Vihar B",
          "Shraddha Puri 2-A",
          "Shraddha Puri II (B-Block)",
          "Shraddha Puri Ii (C-Block)",
          "Shraddha Puri Ii (E-Block)",
          "Shradhappuri-Ii (D-Block)",
          "Vaishno Dham",
        ],
        42: [
          "Anand Puri",
          "Bhati Pura",
          "Dashmesh Nagar",
          "Devpuri",
          "Jain Nagar",
          "Madhuban Colony",
          "New Dev Puri",
          "Purva Din Daya",
          "Purva Jugal Kishor",
          "Railway Road",
          "Ronak Pura",
        ],
        5: [
          "Chowk",
          "Jassu",
          "Mathinaya",
          "Mehandi",
          "Nai Govindpuri",
          "Sadan Puri",
          "Shiv Lok Puri",
          "Shivlok Nai Basti",
        ],
        51: [
          "Chandralok",
          "Jwala Nagar (Sabun Godam)",
          "Kalindi",
          "Kishan Pura",
          "Nawal Vihar",
          "Sabun Godam",
          "Suman Puri",
        ],
        57: [
          "Akshar Dham Colony",
          "Appu Enclave",
          "Bhagwati Complex",
          "Bhavya Palace (Pallav Puram-Ii)",
          "Block Q Pallav Puram Phase 2",
          "Chauhan Market Pallav Puram-Ii",
          "Greater Appu Enclave",
          "Greater Pallav Puram",
          "Meelange Mall Pallav Puram Ii",
          "Narayan Colony",
          "Om Plaza",
          "Pallav Puram (S) 2",
          "Pallav Puram 2 (L & Lm Block)",
          "Pallav Puram 2 (Pm)",
          "Pallav Puram Phase-2",
          "Pallav Puram Phase-2 Block-Pmm",
          "Pallav Tawers(Pallav Puram 2)",
          "Pallavpuram-2 Kotpal Nursingh Home",
          "Pallavpuram-2 (K And R Block)",
          "Pallavpuram2 (P-Block)",
          "Pallavpuram2 Pews",
          "Shiv Dham Colony Roorke Road",
          "Swastik Plaza Pallav Puram Ii",
          "Uday Park (Pallav Puram-2)",
        ],
        6: [
          "Ankur Colony Behind Surya Place",
          "DEFENCE GARDEN DELHI ROAD, MEERUT",
          "Delhi Road (Mohkam Pur)",
          "Dev Lok",
          "Dungrawali",
          "Gyatri Estate Extention Bypass Delhi Road",
          "Kunda",
          "Kunda Industrial",
          "Major DhyanChan Nagar",
          "Mangat Puram",
          "Mansarover Garden",
          "Mohkampur",
          "Shayam Ji Enclave Extension Vishva Enclave",
          "Shusant City",
          "Shyamji Enclave",
          "Sundra Putha",
          "Supertek Palm Green",
          "Surya Palace",
          "Surya Puram",
          "Udhyog Puram",
          "Vedvyas Puri",
          "Vishva Enclave",
        ],
        68: [
          "Kesar Ganj",
          "Makbara Abbu",
          "Makbara Diggi",
          "Makbara Ghoshyan",
          "Purwa Hafij, Abdul Karim",
        ],
        7: [
          "Aman Vihar",
          "Anand Niketan",
          "Dogra Basti",
          "Ekta Nagar",
          "Gangotri Colony",
          "Ganpati Enclave",
          "Godwin Colony",
          "Green City",
          "HARI APPARTMENT",
          "Indra Lok Colony Pac",
          "Indraprasth Estate",
          "Isha Apartment",
          "Kaushalya Nagar",
          "Kaveri Colony",
          "Konark Colony",
          "Krishna Nagar",
          "New Ekta Nagar",
          "New Friends Colony",
          "Parivahan Puram",
          "Pasific Height",
          "Pilna Sofipur",
          "Raj Kamal Park",
          "Rajan Kunj",
          "Santi Nagar",
          "Santi Niketan",
          "Sunrise Inclave",
          "Tirupati And Ganpati Colony",
          "TIRUPATI HEIGHTS APPARTMENT",
          "Vivek Vihar",
          "Vrandavan Colony",
        ],
        9: [
          "Army Colony",
          "Army Colony-II",
          "Ashok Puri Meerut Up",
          "Kaasam Pur",
          "Lala Mohammadpur",
          "Laxmi Nagar",
          "Lord Budha Nagar (Ambedkar Nagar)",
          "Nand Puri",
          "New Ashok Puri",
          "New Nand Puri",
          "Riyaz Colony",
          "Sadhu Nagar",
          "Shakya Puri",
          "Tikaram Colony",
        ],
      },
    },
    "Shastri Nagar 1": {
      wards: {
        13: [
          "Ambadekar Medical College Road",
          "Bhopal Vihar",
          "Damoder Colony",
          "GYAN KUNJ COLONY",
          "Honey Golf Greens",
          "Jai Bheem Nagar Nomin Gesu Pur",
          "Jai Bhim Nagar",
          "Mitra Lock Colony, Madical College Road",
          "Moti Pryag",
          "Prem Prayag Collony",
          "Som Dutt City",
          "Uttarakhand Jai Bheem Nagar",
        ],
        14: [
          "Jagrati Vihar Sec-7",
          "Jagrati Vihar Sec-8",
          "Kaliya Gadhi",
          "Kirti Palace",
          "Lakhmi Vihar",
        ],
        16: [
          "Aurangshahpur Diggi",
          "Chungi Victoria Park",
          "Janak Puri",
          "Jasrampura",
          "Mangal Panday Nagar 2",
          "Ram Garhi",
          "Sports Colony",
          "University Road",
          "Victoriya Gardan Colony",
        ],
        17: [
          "Ahmad Pura",
          "Bazar",
          "Coral Spring",
          "Court",
          "Gadhi",
          "Ganga Sagar",
          "Ganga Sagar Block-D",
          "Global City Abdulla Pur",
          "Handiya",
          "Jahangee",
          "Khalsa",
          "Khirnee",
          "Nai Basti",
          "Raisna",
          "Shipra Vihar",
        ],
        18: [
          "Durga Puram Sarai Kazi",
          "Hanuman Vihar",
          "Harvansh Vihar",
          "Jagrati Vihar Sec-6",
          "Jagrati Vihar Sec-9",
          "Kunj Bihar",
          "Raj Nagar Rajeev Puram",
          "Rajeev Puram",
          "Rajvansh Vihar",
          "Sarai Kazi",
          "Som Dutt City",
          "Somdutt Vihar",
          "Takshila Colony",
          "Tej Vihar",
          "Vaishno Dham Sarai Kazi",
        ],
        20: [
          "Aazad Nagar",
          "Abdul Hameed Ganj (A.W.H.O ) Colony",
          "Difence Colony",
          "Diggi",
          "Khatikana",
          "Marwari",
          "Minakshi Puram",
          "Mo. Gyahara",
          "Nai Mandi",
          "New Minakshi Puram",
          "Raksha Puram",
          "Sai Plaza",
          "Uncha Mohalla",
        ],
        24: [
          "Kasheru Baksar",
          "Krishna Gardan",
          "Lal Park Colony",
          "Nehru Nagar",
          "P.N.T Colony",
          "P.R Enclave",
          "Panchwati",
          "Radha Garden Colony",
          "Rajander Puram",
          "Tirupati Garden",
          "Yashoda Kunj",
        ],
        26: [
          "Geeta Colony Garh Road",
          "Kuti",
          "Shastri Nagar Block-A",
          "Shastri Nagar D- Block",
          "Shastri Nagar F- Block",
          "Shastri Nagar G- Block",
          "Shastri Nagar H- Block",
          "Shastri Nagar Sec-6",
          "Shastri Nagar Sector-1",
          "Shastri Nagar Sector-7",
          "Tej Garhi",
        ],
        29: [
          "Bagicha Md. Husain",
          "Hapur Road",
          "Purva Ha.Azaz Ali",
          "Purvi Muftiyan",
          "Purwa Shekh Lal",
          "Sarai Mufti Yan",
          "Shubash Nagar",
        ],
        32: [
          "Civil Line",
          "Hiddle Clloney",
          "Maan Sarover",
          "Police Line",
          "Saket",
          "Saket Enclave",
          "Saket Kunj",
          "Sharma Nagar",
          "Sports Stadium",
        ],
        33: [
          "Ghosi Pur Ghosi Pur",
          "Kaji Pur",
          "Lohiya Nagar K-Block",
          "Lohiya Nagar Pocket-Cp",
          "Ram Manohar Lohiya Nagar Block L, I",
        ],
        37: [
          "C-Block Ganga Nagar",
          "Ganga Dham Colony",
          "GANGA GARDEN",
          "Ganga Nagar",
          "Ganga Nagar B Block",
          "Ganga Nagar Block - G P",
          "Ganga Nagar Block D",
          "Ganga Nagar Block G",
          "Ganga Nagar F- Block",
          "Ganga Nagar Ha-Block",
          "Ganga Nagar H-Block",
          "Ganga Nagar Hp-Block",
          "Ganga Nagar I-Block",
          "Ganga Nagar J- Block",
          "Ganga Nagar K-Block",
          "Ganga Nagar L-Block",
          "Ganga Nagar M-Block",
          "Ganga Nagar N-Block",
          "Ganga Nagar O-Block",
          "Greater Ganga",
          "Panache Project",
          "Paradise Appartment, Ganga Nagar",
          "R.P.G Tower",
        ],
        4: [
          "Agrasen Vihar",
          "Anshal Road Shergadhi",
          "Chanakya Puri",
          "Chandra Kala Enclave",
          "Cloud-9 Tower",
          "Goldan Tower",
          "Gyan Lok",
          "Gyan Niketan",
          "Hans Vihar Rama Puram",
          "Laxmi Vihar",
          "Mayapuri",
          "Mayur Vihar",
          "PHASE-2 Mayur Vihar 2",
          "Rama Puram Colony Shergadhi",
          "Ratan Kunj",
          "S-2-S Carnation",
          "SAI COLONEY",
          "Sai Nagar",
          "Shastri Nagar E-Block",
          "Shastri Nagar I-Block",
          "Sher Garhi",
          "Survodaya Vihar",
        ],
        44: [
          "Court Compound",
          "Mohan Puri",
          "New Hanuman Puri",
          "Purani Mohan Puri",
          "Shiv Puri",
          "Shivaji Road",
        ],
        45: [
          "Dwarika Towar (Jagrati Vihar Sec-5)",
          "Jagrati Vihar Sec-1",
          "Jagrati Vihar Sec-2",
          "Jagrati Vihar Sec-3",
          "Jagrati Vihar Sec-4",
          "Jagrati Vihar Sec-5",
          "Shastri Nagar Block-B",
          "Shastri Nagar C- Block",
        ],
        46: [
          "Basant Vihar",
          "J B Block Pandav Nagar",
          "J-A Block Pandav Nagar",
          "J-Block Pandav Nagar",
          "New Arya Nagar",
          "New Prabhat Nagar",
          "Pandav Nagar",
          "Sanjay Nagar Yadgar Pur",
          "Yadgar Pur",
        ],
        50: [
          "G-Pocket Pandav Nagar",
          "Nagala Battu",
          "Pandav Nagar B- Block",
          "Pandav Nagar C-Block",
          "Pandav Nagar D-Block",
          "Pandav Nagar E-Block",
          "Pandav Nagar F-Block",
          "Pandav Nagar G-Block",
          "Pandav Nagar Sec-A",
          "Prabhat Nagar",
          "Pragati Nagar",
          "Sarvodya Colony",
          "Surya Nagar",
        ],
        52: [
          "Adarsh Nagar",
          "Azad Cloth Market",
          "Baugam Biraj Road",
          "Bhopal Singh Road",
          "College Road",
          "Jawahar Ouarter",
          "Kalyani",
          "Karoli Road",
          "Nehru Road",
          "P. L Sharma Road",
          "Telephon Exechange",
          "Tilak Road",
          "Vijay Nagar",
          "Western Cutchery Road",
        ],
        53: [
          "Neel Ki Kothi",
          "Shastri Nagar Sec-3",
          "Shastri Nagar Sec-4",
          "Shastri Nagar Sec-5",
          "Shastri Nagar Sector-2",
          "Vidhya Nagar",
        ],
        58: [
          "Arya Nagar",
          "Banshi Pura",
          "Budh Vihar",
          "Devi Nagar",
          "Gandhi Nagar",
          "Hanuman Puri",
          "Laxmi Nagar",
          "Saraswati mandir",
          "Suraj Kund Road",
        ],
        59: [
          "Janta Nagar Garh Road",
          "Jay Devi Nagar Lalsingh Nagar",
          "Kalyan Nagar",
          "Lalsingh Nagar",
          "Meera Enclave",
          "Murari Puram",
          "Panchsheel Colony",
          "Samrat Palac",
          "Shiv Sarovar",
          "State Bank Colony",
          "Vaishaily Colony",
        ],
        60: ["Nehru Nagar", "PHOOL BAAG COLONY"],
        61: [
          "J-Block Sastri Nagar",
          "L-Block",
          "Old-K-Block Shastri Nagar",
          "Sec-13 Shastri Nagar",
          "Shastri Nagar Sector-11",
          "Shastri Nagar Sector-8",
          "Shastri Nagar Sector-9",
        ],
        63: [
          "L-Block-1",
          "Ashok Vihar",
          "Bank Colony",
          "Pravesh Vihar",
          "Rama Puram",
          "Sardar Patel Nagar",
          "Shastri Nagar K-1",
          "Shastri Nagar K-2",
          "Shastri Nagar K-Block",
          "Vasundhara Colony",
        ],
        67: [
          "Chaitanaya puram",
          "Durga Nagar",
          "Kailash Puri",
          "Madho Nagar",
          "Nauchandi Campund",
          "Nauchandi Ghar Road",
          "Panchwati Colony",
          "Rajendra Nagar",
          "Ram Baag",
        ],
        73: [
          "Bhawani Nagar",
          "Manzoor Nagar",
          "Shastri Nagar Sector-12",
          "Shastri Nagar Set 10",
          "Zaidi Nagar",
          "Zaidi Nagar,Manzoor Nagar",
        ],
        80: ["Kareem Nagar"],
      },
    },
  };
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
  const handleZoneChange = (e) => {
    const zoneId = e.target.value;
    setSelectedZone(zoneId);
    setSelectedWard("");
    setSelectedArea("");
    setWardOptions(Object.keys(zones[zoneId].wards));
    setAreaOptions([]);
  };

  const handleWardChange = (e) => {
    const wardId = e.target.value;
    setSelectedWard(wardId);
    setSelectedArea("");
    setAreaOptions(zones[selectedZone].wards[wardId]);
  };

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
  };
  const handleForm = async (event) => {
    event.preventDefault();
    // if (!surveyorId) {
    //   return alert("Surveyor ID Not Found");
    // }
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
      selectedZone,
      selectedArea,
      selectedWard,
      license,
      fse,
      latlong,
      base64,
      surveyorId,
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
          <FormControl>
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
                  {zoneId}
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
          )}
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
          {/* <FormControl>
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
          </FormControl> */}

          {/* <FormInput
            value={ward}
            onChange={setWard}
            label="Ward No. 1-90"
            id="name"
            placeholder=""
            type="text"
            disabled={false}
            required={true}
          /> */}
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
