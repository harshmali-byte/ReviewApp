import { Button } from "@mui/material";
import ReviewCard from "./ReviewCard";

const ReviewList = ({ reviews, sortOption, setSortOption, onAddReviewClick, onLike }) => {
  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortOption === "DATE") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortOption === "RATING") {
      return b.rating - a.rating;
    }
    return 0;
  });

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Reviews</h3>
        <div className="flex items-center space-x-2">
       
         
        </div>
      </div>
      {sortedReviews.map((review) => (
        <ReviewCard key={review.id} review={review} onLike={onLike} />
      ))}
    </div>
  );
};

export default ReviewList;


