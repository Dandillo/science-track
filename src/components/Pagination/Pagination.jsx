﻿import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage,className }) => {
  const handlePageChange = (e) => {
    const newPage = parseInt(e.target.id);
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  };
  const handlePrevPage = () => {
    const newPage = currentPage - 1;
    if (newPage > 0) {
      setCurrentPage(newPage);
    }
  };
  const handleNextPage = () => {
    const newPage = currentPage + 1;
    console.log(totalPages, currentPage);
    if (newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  return (
    <div className={`flex items-center justify-center mt-4 ${className}`}>
      <nav className="relative z-0 inline-flex rounded-md shadow-sm">
        <button
          disabled={currentPage === 1}
          onClick={handlePrevPage}
          className=" border-transparent border font-bold hover:border-gray-300 relative inline-flex items-center px-2 py-2 rounded-l-md  text-[36px] text-sm text-darkGrayColor hover:bg-gray-50"
        >
          &lt;
        </button>
        <div className=" border-gray-300">
          <div className="grid grid-flow-col gap-1">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                onClick={handlePageChange}
                key={index + 1}
                id={index + 1}
                className={
                  currentPage === index + 1
                    ? "px-3 py-2 border border-gray-300 text-sm  text-darkGrayColor text-[36px]  font-bold"
                    : "text-darkGrayColor border-transparent border hover:border-gray-900 relative inline-flex items-center px-3 py-2  font-bold text-sm  text-[32px]"
                }
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        <button
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
          className="text-darkGrayColor  border-transparent border hover:border-gray-300 relative inline-flex items-center px-2 py-2 rounded-r-md font-bold text-sm text-[36px] hover:bg-gray-50"
        >
          &gt;
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
