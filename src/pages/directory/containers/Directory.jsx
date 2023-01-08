import React, { useState, useEffect } from "react";
import airtableService from "../../../services/airtableService";

const Directory = () => {
  const [data, setData] = useState();
  const getRecords = async () => {
    const companies = await airtableService.getCompanies();
    setData(companies);
  };

  useEffect(() => {
    getRecords();
  });

  return (
    <div>
      <h1>Directory</h1>
      <div>
        {data &&
          data.map((company, index) => (
            <div key={index}>{company.fields.Company}</div>
          ))}
      </div>
    </div>
  );
};

export default Directory;
