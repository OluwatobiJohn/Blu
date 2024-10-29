import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";

const Table = ({
  data,
  columns,
  itemsPerPage,
  setItemsPerPage,
  currentPage,
  setcurrentPage,
  selectedRows,
  setSelectedRows,
}) => {
  const [numbers, setNumbers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const hasCheckboxColumn = columns.some((column) => column.isCheckbox);

  const tableRef = useRef(null);
  const paginationClicked = useRef(false);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  useEffect(() => {
    const filtered = data.filter((item) =>
      Object.values(item).some((value) =>
        value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [data, searchTerm]);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleChangePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setcurrentPage(newPage);
      paginationClicked.current = true;
    }
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

  const toggleSelectAll = (isChecked) => {
    if (isChecked) {
      const allRowIds = filteredData.map((item) => item.id);
      setSelectedRows(allRowIds);
    } else {
      setSelectedRows([]);
    }
  };

  const toggleRowSelection = (id) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(id)
        ? prevSelectedRows.filter((rowId) => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };

  useEffect(() => {
    if (paginationClicked.current && tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      paginationClicked.current = false; // Reset after scrolling
    }
  }, [currentPage]);

  return (
    <div ref={tableRef} className="max-w-full mx-auto p-4 bg-white text-sm">
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
              <th key={column.key} className="px-2 py-5 border-b text-left">
                {column.isCheckbox ? (
                  <input
                    type="checkbox"
                    checked={
                      selectedRows.length === filteredData.length &&
                      filteredData.length > 0
                    }
                    onChange={(e) => toggleSelectAll(e.target.checked)}
                  />
                ) : (
                  column.header
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length === 0 && (
            <tr>
              <td colSpan={columns.length + 1} className="text-center py-4">
                <p className="text-red-500">No Results Found</p>
              </td>
            </tr>
          )}
          {paginatedData.map((item, index) => (
            <tr key={index} className="hover:bg-[#cfdef8]">
              {hasCheckboxColumn && (
                <td className="p-2 border-b">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(item.id)}
                    onChange={() => toggleRowSelection(item.id)}
                  />
                </td>
              )}
              {columns.map((column) => (
                <td key={column.key} className="py-5 px-2 border-b">
                  {column.key === "serialNumber"
                    ? (currentPage - 1) * itemsPerPage + index + 1
                    : column.editCell
                    ? column.editCell(item)
                    : getNestedPropertyValue(item, column.key) || "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="w-screen md:w-full mt-4 flex justify-between items-center gap-4">
        <div className="flex-1">
          <span className="text-sm text-gray-600">{`Page ${currentPage} of ${totalPages}`}</span>
        </div>

        <div className="flex justify-center gap-2">
          {numbers.map((page, index) => {
            return (
              <button
                key={index}
                className={`max-w-1 flex justify-center border-none ${
                  currentPage === page
                    ? "bg-[#FFECE5] text-[#EA0000]"
                    : "text-black"
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
            <span>&larr;</span> <p>Previous</p>
          </button>

          <button
            onClick={() => handleChangePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex flex-row items-center gap-2 px-3 py-1 border rounded bg-[#F8FAFC] text-sm text-black disabled:opacity-50"
          >
            <p>Next</p>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
