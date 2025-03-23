// src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CompanyDetail from "./pages/CompanyDetail";

function App() {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "Graffersid Web and App Development",
      logo: "G",
      address: "816, Shekhar Central, Manorama Ganj, AB road, New Palasia, Indore (M.P.)",
      rating: 4.5,
      reviews: 41,
      founded: "01-01-2016",
      reviewsData: [],
    },
    {
      id: 2,
      name: "Code Tech Company",
      logo: "<CT>",
      address: "414, Kanha Apartment, Bhawarkua, Indore (M.P.)",
      rating: 4.5,
      reviews: 0,
      founded: "01-01-2016",
      reviewsData: [],
    },
    {
      id: 3,
      name: "Innogenet Pvt. Ltd.",
      logo: "💡",
      address: "910, Shekhar Central, Manorama Ganj, AB road, New Palasia, Indore (M.P.)",
      rating: 4.5,
      reviews: 0,
      founded: "01-01-2016",
      reviewsData: [],
    },
  ]);

  const handleAddReview = (companyId, updatedReviews) => {
    setCompanies(
      companies.map((company) =>
        company.id === companyId
          ? {
              ...company,
              reviewsData: updatedReviews,
              reviews: updatedReviews.length,
              rating:
                updatedReviews.length > 0
                  ? updatedReviews.reduce((sum, r) => sum + r.rating, 0) /
                    updatedReviews.length
                  : 0,
            }
          : company
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route
          path="/"
          element={<Home companies={companies} setCompanies={setCompanies} />}
        />
        <Route
          path="/company/:id"
          element={
            <CompanyDetail companies={companies} onAddReview={handleAddReview} />
          }
        />
      </Routes>
    </div>
  );
}

export default App; 