// src/components/CompanyCard.jsx
import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const CompanyCard = ({ company, onDetailClick }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow mt-4 rounded-lg">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-200 flex items-center justify-center text-2xl font-bold rounded">
          {company.logo}
        </div>
        <div>
          <h2 className="text-lg font-bold">{company.name}</h2>
          <p className="text-gray-500 flex items-center">📍 {company.address}</p>
          <div className="flex items-center space-x-1">
            <span>{company.rating.toFixed(1)}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={
                    i < Math.floor(company.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span>({company.reviews} Reviews)</span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className="text-gray-500 text-sm mb-4">Founded on {company.founded}</p>
        <Button
          variant="contained"
          className="!bg-gray-800 text-white mt-2"
          onClick={() => onDetailClick(company.id)}
        >
          DETAIL REVIEW
        </Button>
      </div>
    </div>
  );
};

export default CompanyCard;