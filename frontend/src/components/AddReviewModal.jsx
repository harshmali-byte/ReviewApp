// src/components/AddReviewModal.jsx
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Rating,
  Typography,
} from "@mui/material";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';


const AddReviewModal = ({ open, onClose, onAddReview }) => {
  const [newReview, setNewReview] = useState({
    fullName: "",
    subject: "",
    text: "",
    rating: 0,
  });

  const handleSubmit = () => {
    onAddReview(newReview);
    setNewReview({ fullName: "", subject: "", text: "", rating: 0 });
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
          width: "400px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
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
        Add Review
      </DialogTitle>
      <DialogContent sx={{ pt: 1 }}>
        <TextField
          margin="dense"
          label="Full Name"
          name="fullName"
          fullWidth
          value={newReview.fullName}
          onChange={(e) =>
            setNewReview({ ...newReview, fullName: e.target.value })
          }
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
          label="Subject"
          name="subject"
          fullWidth
          value={newReview.subject}
          onChange={(e) =>
            setNewReview({ ...newReview, subject: e.target.value })
          }
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
          label="Enter your Review"
          placeholder="Description"
          name="text"
          fullWidth
          multiline
          rows={4}
          value={newReview.text}
          onChange={(e) =>
            setNewReview({ ...newReview, text: e.target.value })
          }
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
        <div className="flex items-center space-x-2 mt-2">
          <Rating
            name="rating"
            value={newReview.rating}
            onChange={(e, newValue) =>
              setNewReview({ ...newReview, rating: newValue })
            }
          />
          <Typography variant="body2" color="textSecondary">
            {newReview.rating >= 4
              ? "Satisfied"
              : newReview.rating >= 3
              ? "Neutral"
              : newReview.rating > 0
              ? "Dissatisfied"
              : ""}
          </Typography>
        </div>
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

export default AddReviewModal;