// src/components/FilterSection.jsx
import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const FilterSection = ({ onAddCompanyClick, sortOption, setSortOption }) => {
  const [city, setCity] = useState("Indore, Madhya Pradesh, IN");

  return (
    <div className="flex items-center justify-between p-4 bg-white border-b mt-4">
      <div className="flex items-center space-x-4 ml-[10%]">
        {/* Select City Dropdown */}
        <FormControl variant="outlined" size="small">
          <InputLabel>Select City</InputLabel>
          <Select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            label="Select City"
            className="w-[413px]"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "gray",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "gray",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "gray",
              },
            }}
          >
            <MenuItem value="Indore, Madhya Pradesh, IN">
              Indore, Madhya Pradesh, IN
            </MenuItem>
          </Select>
        </FormControl>

        {/* Find Company Button with Gradient and Icon */}
        <Button
  variant="contained"
  sx={{
    width: "146px",
    height: "37px",
    background: "linear-gradient(to right, #D100F3, #002BC5)", // Gradient Fix
    color: "white",
    marginLeft: "10px",
    textTransform: "uppercase",
    fontWeight: 500, // Semi-bold Fix
    padding: "0px 16px",
    minWidth: "unset", // Default MUI button width ko override karega
    "&:hover": {
      background: "linear-gradient(to right, #B000D1, #001FA3)", // Hover Fix
    },
  }}
>
  Find Company
</Button>

        {/* Add Company Button with Gradient */}
        <div className="ml-[400px]">
        <Button
  variant="contained"
  onClick={onAddCompanyClick}
  sx={{
    width: "149px",
    height: "37px",
    background: "linear-gradient(to right, #D100F3, #002BC5)", // Gradient Fix
    color: "white",
    marginRight: "50px",
    textTransform: "uppercase",
    fontWeight: 500, // Semi-bold Fix
    padding: " 16px",
    minWidth: "unset", // Default MUI button width ko override karega
    "&:hover": {
      background: "linear-gradient(to right, #B000D1, #001FA3)", // Hover Fix
    },
  }}
>
  +Add Company
</Button>


        </div>
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center mr-[10%] h-[37px]">
        <FormControl variant="outlined" size="small">
          <InputLabel>Sort</InputLabel>

          <Select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            label="Sort"
            
            displayEmpty
            className="w-24 h-[37px] "
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "gray",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "gray",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "gray",
              },
            }}
          >
            <MenuItem value="NAME">NAME</MenuItem>
            <MenuItem value="RATING">RATING</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default FilterSection;
