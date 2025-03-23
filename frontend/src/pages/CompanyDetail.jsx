// src/pages/CompanyDetail.jsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ReviewList from "../components/ReviewList";
import AddReviewModal from "../components/AddReviewModal";
import Header from "../components/Header";

const CompanyDetail = ({
  companies,
  onAddReview,
  searchQuery,
  setSearchQuery,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const company = companies.find((c) => c.id === parseInt(id));
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [sortOption, setSortOption] = useState("DATE");

  if (!company) {
    return <div>Company not found</div>;
  }

  const [reviews, setReviews] = useState(company.reviewsData || []);

  const handleAddReview = (newReview) => {
    const updatedReviews = [
      ...reviews,
      {
        ...newReview,
        id: reviews.length + 1,
        date: new Date().toISOString(),
        likes: 0,
      },
    ];
    setReviews(updatedReviews);
    onAddReview(company.id, updatedReviews);
  };

  const handleLikeReview = (reviewId) => {
    const updatedReviews = reviews.map((review) =>
      review.id === reviewId ? { ...review, likes: review.likes + 1 } : review
    );
    setReviews(updatedReviews);
    onAddReview(company.id, updatedReviews);
  };

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : 0;

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="p-4">
        {/* Reduced card size */}
        <div className="bg-white p-2 m-2 w-full rounded-lg shadow">
          <div className="flex items-center space-x-3">
            {/* Reduced logo size */}
            <div className="w-12 h-12 bg-gray-200 flex items-center justify-center text-xl font-bold rounded">
              {company.logo}
            </div>
            <div className="flex-1">
              {/* Reduced font size for company name */}
              <h2 className="text-xl font-bold">{company.name}</h2>
              <p className="text-gray-500 text-sm flex items-center">
                📍 {company.address}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <span className="text-sm">{averageRating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={
                          i < Math.floor(averageRating)
                            ? "text-yellow-400 w-5 h-5"
                            : "text-gray-300 w-5 h-5"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm">({reviews.length} Reviews)</span>
                </div>
                {/* Grouped Founded Date and Add Review Button */}
                <div className="flex flex-col items-end ">
                  <p className="text-gray-500 text-sm mb-4 -mt-10">
                    Founded on {company.founded}
                  </p>
                  <button
                    className="bg-gradient-to-r from-[#D100F3] to-[#002BC5] text-white text-sm px-3 py-1 rounded-lg"
                    onClick={() => setOpenReviewModal(true)}
                  >
                    + Add Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ReviewList
          reviews={reviews}
          sortOption={sortOption}
          setSortOption={setSortOption}
          onAddReviewClick={() => setOpenReviewModal(true)}
          onLike={handleLikeReview}
        />

        <AddReviewModal
          open={openReviewModal}
          onClose={() => setOpenReviewModal(false)}
          onAddReview={handleAddReview}
        />
      </div>
    </>
  );
};

export default CompanyDetail;


