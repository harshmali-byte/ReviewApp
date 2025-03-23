// src/components/AddCompanyModal.jsx
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const AddCompanyModal = ({ open, onClose, onAddCompany }) => {
  const [companyData, setCompanyData] = useState({
    name: "",
    address: "",
    founded: "",
    city: "",
  });

  const handleChange = (e) => {
    setCompanyData({ ...companyData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onAddCompany(companyData);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: "12px",
          position: "relative",
          overflow: "hidden",
          width: "400px", // Set a fixed width to match the image
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow
        },
      }}
    >
      {/* Circular Decorations */}
      <div className="absolute top-0 left-0">
      <div className="w-24 h-24 bg-gradient-to-r from-[#D100F3] to-[#002BC5] rounded-full  -translate-x-8 -translate-y-8"></div>
      <div className="w-16 h-16  bg-gradient-to-r from-[#D100F3] to-[#002BC5]    rounded-full opacity-70 -translate-x-4 -translate-y-12"></div>
       </div>
      <div className="justify-end flex p-1 py-2 px-2">
        <ClearOutlinedIcon  onClick={onClose} className="cursor-pointer"/>
      </div>

      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold", pt: 4 }}>
        Add Company
      </DialogTitle>
      <DialogContent sx={{ pt: 1 }}>
        <TextField
          margin="dense"
          label="Company name"
          name="name"
          fullWidth
          value={companyData.name}
          onChange={handleChange}
          placeholder="Enter..."
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
              },
              "&:hover fieldset": {
                borderColor: "gray",
              },
              "&.Mui-focused fieldset": {
                borderColor: "gray",
              },
            },
          }}
        />
        <TextField
          margin="dense"
          label="Location"
          name="address"
          fullWidth
          value={companyData.address}
          onChange={handleChange}
          placeholder="Select Location"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <LocationOnIcon sx={{ color: "gray" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
              },
              "&:hover fieldset": {
                borderColor: "gray",
              },
              "&.Mui-focused fieldset": {
                borderColor: "gray",
              },
            },
          }}
        />
        <TextField
          margin="dense"
          label="Founded on"
          name="founded"
          fullWidth
          value={companyData.founded}
          onChange={handleChange}
          placeholder="DD/MM/YYYY"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CalendarTodayIcon sx={{ color: "gray" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
              },
              "&:hover fieldset": {
                borderColor: "gray",
              },
              "&.Mui-focused fieldset": {
                borderColor: "gray",
              },
            },
          }}
        />
        <TextField
          margin="dense"
          label="City"
          name="city"
          fullWidth
          value={companyData.city}
          onChange={handleChange}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
              },
              "&:hover fieldset": {
                borderColor: "gray",
              },
              "&.Mui-focused fieldset": {
                borderColor: "gray",
              },
            },
          }}
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", pb: 2, pr: 2 }}>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            background: "linear-gradient(to right, #D100F3, #002BC5)", // Correct gradient syntax
            color: "white",
            textTransform: "uppercase",
            borderRadius: "8px",
            padding: "6px 16px",
            "&:hover": {
              backgroundColor: "#7C3AED", // Slightly darker purple on hover
            },
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCompanyModal;