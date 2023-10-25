import CSVData from "@/types/CSVData";

export function filterData(
  data: CSVData[],
  keyword: string,
  startDate: string,
  endDate: string
): CSVData[] {
  const parseDate1 = (dateStr: string) => {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  const parseDate2 = (dateStr: string) => {
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day);
  };

  let filteredData = data.filter((row) => {
    const description = row.Description;
    return description.toLowerCase().includes(keyword.toLowerCase());
  });

  if (startDate && endDate) {
    const start = parseDate2(startDate);
    const end = parseDate2(endDate);

    filteredData = filteredData.filter((row) => {
      const rowDate = parseDate1(row.Date);
      return rowDate >= start && rowDate <= end;
    });
  }

  return filteredData;
}
