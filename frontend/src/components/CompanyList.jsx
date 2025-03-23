// src/components/CompanyList.jsx
import CompanyCard from "./CompanyCard";

const CompanyList = ({ companies, onDetailClick }) => {
  return (
    <div className="p-4">
      <p className="text-gray-500">Result Found: {companies.length}</p>
      {companies.map((company) => (
        <CompanyCard
          key={company.id}
          company={company}
          onDetailClick={onDetailClick}
        />
      ))}
    </div>
  );
};

export default CompanyList;