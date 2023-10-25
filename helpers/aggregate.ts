import CSVData from "@/types/CSVData";

const aggregateData = (filteredData: CSVData[]): AggregatedData[] => {
  // Implement your aggregation logic here
  // Example: Aggregate based on the Description field

  const aggregatedData: AggregatedData[] = [];

  filteredData.forEach((row) => {
    const { Description, Debit, Credit } = row;

    // Find if an entry with the same description exists in the aggregatedData array
    const existingEntry = aggregatedData.find(
      (aggregatedItem) => aggregatedItem.Description === Description
    );

    if (existingEntry) {
      // If an entry with the same description exists, update the totals
      existingEntry.TotalDebit += parseFloat(Debit) || 0;
      existingEntry.TotalCredit += parseFloat(Credit) || 0;
    } else {
      // If not, create a new entry
      aggregatedData.push({
        Description,
        TotalDebit: parseFloat(Debit) || 0,
        TotalCredit: parseFloat(Credit) || 0,
      });
    }
  });

  return aggregatedData;
};

interface AggregatedData {
  Description: string;
  TotalDebit: number;
  TotalCredit: number;
}

export default aggregateData;
