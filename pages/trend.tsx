import React, { useState, useEffect } from "react";
import SearchFormValues from "@/types/SearchForm";
import SearchTool from "@/components/SearchTool";
import DisplayTool from "@/components/DisplayTool";
import CSVData from "@/types/CSVData";
import TrendTool from "@/components/TrendTool";

const TrendAnalysis = () => {
  const initialFormValues: SearchFormValues = {
    keywords: "",
    selectedAccounts: [],
    startDate: "",
    endDate: "",
  };

  const [formValues, setFormValues] = useState<SearchFormValues>(initialFormValues);
  const [csvData, setCSVData] = useState<Record<string, CSVData[]>>({});
  const [showDisplay, setShowDisplay] = useState(false);

  const dataDirectory = "bankStatements";
  const fileNames = ["axis.csv", "hdfc.csv", "icici.csv"];

  const fetchCSVData = async () => {
    let selectedAccounts = formValues.selectedAccounts.map((account) => {
      const bankAccount = account.toLowerCase();
      return bankAccount.endsWith(" bank")
        ? bankAccount.replace(/\s+bank$/, "")
        : bankAccount;
    });
    const dataPromises = selectedAccounts.map(async (account) => {
      if (fileNames.includes(`${account}.csv`)) {
        const response = await fetch(`/${dataDirectory}/${account}.csv`);
        const csvText = await response.text();
        const csvArray = csvText
          .trim()
          .split("\n")
          .map((row) => {
            const [Date, Description, Debit, Credit, Balance] = row.split(",");
            return { Date, Description, Debit, Credit, Balance };
          });

        return { [account]: csvArray };
      }
      return { [account]: [] };
    });

    const data = await Promise.all(dataPromises);
    const csvDataFromPromise = Object.assign({}, ...data);
    setCSVData(csvDataFromPromise);
  };

  const handleSearch = async () => {
    await fetchCSVData();
    setShowDisplay(true);
  };

  useEffect(() => {
    const allData = Object.values(csvData).flat();
    setShowDisplay(allData.length > 0);
  }, [csvData]);

  return (
    <div className="search-form">
      <SearchTool
        formValues={formValues}
        setFormValues={setFormValues}
        handleSearch={handleSearch}
      />
      {showDisplay && (
        <TrendTool data={Object.values(csvData).flat()} keyword={formValues.keywords} startDate={formValues.startDate} endDate={formValues.endDate} />
      )}
    </div>
  );
};

export default TrendAnalysis;
