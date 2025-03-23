// src/components/ReviewCard.jsx
import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const ReviewCard = ({ review, onLike }) => {
  return (
    <div className="bg-white p-4 ">
      
      <h4 className="font-bold">{review.fullName}</h4>
      <p className="text-gray-500">{review.subject}</p>
      <p>{review.text}</p>
      <div className="justify-end  flex  py-2 px-2 ">
      {/* <span>{review.rating}</span> */}
        <div className="justify-end flex  py-2 px-2 -mt-20">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default ReviewCard;







