import React, { useState } from "react";
import SearchFormValues from "@/types/SearchForm";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface SearchToolProps {
  formValues: SearchFormValues;
  setFormValues: React.Dispatch<React.SetStateAction<SearchFormValues>>;
  handleSearch: () => void;
}

const SearchTool = ({
  formValues,
  setFormValues,
  handleSearch,
}: SearchToolProps) => {
  const { keywords, selectedAccounts, startDate, endDate } = formValues;
  const [showValidationPopup, setShowValidationPopup] = useState(false);

  const handleKeywordsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, keywords: e.target.value });
  };

  const handleAccountChange = (account: string) => {
    if (selectedAccounts.includes(account)) {
      setFormValues({
        ...formValues,
        selectedAccounts: selectedAccounts.filter((acc) => acc !== account),
      });
    } else {
      setFormValues({
        ...formValues,
        selectedAccounts: [...selectedAccounts, account],
      });
    }
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, startDate: e.target.value });
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, endDate: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check if keywords and at least one bank account are selected
    if (keywords.trim() === "" || selectedAccounts.length === 0) {
      setShowValidationPopup(true);
    } else {
      setShowValidationPopup(false);
      handleSearch();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {showValidationPopup && (
        <div className="bg-red-100 text-red-600 p-2 rounded-md mb-4">
          Please enter keywords and select at least one bank account.
        </div>
      )}

      <form
        className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 p-4 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-normal mb-4">
          <Link href="/">
            <span className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </span>
          </Link>
          <h2 className="text-2xl font-semibold text-white ml-10">
            Search Bank Statements
          </h2>
        </div>

        <div className="mb-4">
          <label
            htmlFor="keywords"
            className="block text-white font-semibold mb-2"
          >
            Search Keywords:
          </label>
          <input
            type="text"
            id="keywords"
            className="w-full p-2 border rounded-lg"
            placeholder="Enter keywords (e.g., salary, marketing)"
            value={keywords}
            onChange={handleKeywordsChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-white font-semibold mb-2">
            Select Bank Accounts:
          </label>
          <div className="grid grid-cols-2 gap-2">
            {["Axis Bank", "HDFC Bank", "ICICI Bank"].map((account) => (
              <label key={account} className="flex items-center text-white">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedAccounts.includes(account)}
                  onChange={() => handleAccountChange(account)}
                />
                {account}
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="start-date"
              className="block text-white font-semibold mb-2"
            >
              Start Date:
            </label>
            <input
              type="date"
              id="start-date"
              className="w-full p-2 border rounded-lg"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="end-date"
              className="block text-white font-semibold mb-2"
            >
              End Date:
            </label>
            <input
              type="date"
              id="end-date"
              className="w-full p-2 border rounded-lg"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchTool;
