// src/pages/Home.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FilterSection from "../components/FilterSection";
import CompanyList from "../components/CompanyList";
import AddCompanyModal from "../components/AddCompanyModal";

const Home = ({ companies, setCompanies }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("NAME");
  const [openAddModal, setOpenAddModal] = useState(false);

  const handleAddCompany = (newCompany) => {
    setCompanies([
      ...companies,
      {
        id: companies.length + 1,
        ...newCompany,
        rating: 0,
        reviews: 0,
        reviewsData: [],
      },
    ]);
  };

  const filteredCompanies = companies
    .filter((company) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "NAME") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "RATING") {
        return b.rating - a.rating;
      }
      return 0;
    });

  return (
    <div className="">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterSection
        sortOption={sortOption}
        setSortOption={setSortOption}
        onAddCompanyClick={() => setOpenAddModal(true)}
      />
      <CompanyList
        companies={filteredCompanies}
        onDetailClick={(id) => navigate(`/company/${id}`)}
      />
      <AddCompanyModal
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
        onAddCompany={handleAddCompany}
      />
    </div>
  );
};

export default Home;