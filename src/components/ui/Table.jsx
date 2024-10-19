import React, { useState, useEffect } from "react";
import _ from "lodash";

const Table = ({
  data,
  columns,
  itemsPerPage,
  setItemsPerPage,
  totalPages,
  currentPage,
  setcurrentPage,
}) => {
  const [numbers, setNumbers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = data.filter((item) =>
      Object.values(item).some((value) =>
        value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [data, searchTerm, itemsPerPage]);

  const handleChangePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setcurrentPage(newPage);
    }
  };

  const handleChangeItemsPerPage = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
  };

  useEffect(() => {
    const numbersArray = [];
    for (let i = 1; i <= totalPages; i++) {
      numbersArray.push(i);
    }
    setNumbers(numbersArray);
  }, [totalPages]);

  const getNestedPropertyValue = (obj, key) => {
    return _.get(obj, key, "");
  };

  return (
    <div className="max-w-full mx-auto p-4 bg-white text-sm">
      <div className="flex flex-row justify-between items-center">
        <div>
          <input
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded mb-4"
          />
        </div>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-[#F8FAFC]">
            {columns.map((column) => (
              <th key={column.key} className="p-2 border-b text-left">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 && (
            <tr>
              <td colSpan={columns.length + 1} className="text-center py-4">
                <p className="text-red-500">No Results Found</p>
              </td>
            </tr>
          )}
          {filteredData.map((item, index) => (
            <tr key={index} className="hover:bg-[#cfdef8]">
              {columns
                .filter((column) => !column.isCheckbox)
                .map((column) => (
                  <td key={column.key} className="p-2 border-b">
                    {column.editCell
                      ? column.editCell(item)
                      : getNestedPropertyValue(item, column.key) || "-"}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full mt-4 flex justify-between items-center gap-4">
        {/* Page count on the left */}
        <div className="flex-1">
          <span className="text-sm text-gray-600">{`Page ${currentPage} of ${totalPages}`}</span>
        </div>

        {/* Page numbers in the center */}
        <div className="flex justify-center gap-2">
          {numbers.map((page, index) => {
            return (
              <button
                key={index}
                className={`${
                  currentPage === page
                    ? "bg-[#2563EB] text-white"
                    : "bg-[#F8FAFC] text-black"
                } px-3 py-1 border rounded text-sm`}
                onClick={() => handleChangePage(page)}
              >
                {page}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 flex-1 justify-end">
          <button
            onClick={() => handleChangePage(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex flex-row items-center gap-2 px-3 py-1 border rounded bg-[#F8FAFC] text-sm text-black disabled:opacity-50"
          >
            <span> &#8249;</span> <p>Previous</p>
          </button>

          <button
            onClick={() => handleChangePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex flex-row items-center gap-2 px-3 py-1 border rounded bg-[#F8FAFC] text-sm text-black disabled:opacity-50"
          >
            <p>Next</p>
            <span> &#8250;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
