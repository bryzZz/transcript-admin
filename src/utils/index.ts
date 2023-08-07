import * as XLSX from "xlsx-js-style";

export const exportToSpreadsheet = (
  data: [string[], string[]],
  fileName: string,
) => {
  const wb = XLSX.utils.book_new();

  const transformedData = data.map((row) =>
    row.map((cell) => ({
      v: cell,
      t: "s",
      s: { alignment: { wrapText: true } },
    })),
  );

  const ws = XLSX.utils.aoa_to_sheet(transformedData);
  XLSX.utils.book_append_sheet(wb, ws, "readme demo");

  XLSX.writeFile(wb, `${fileName}.xlsx`);
};
