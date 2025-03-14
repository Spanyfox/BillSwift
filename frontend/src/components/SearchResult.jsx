import React from "react";

const SearchResult = ({ result }) => {
  const handleClick = () => {
    alert(`You clicked ${result?.itemCode}`);
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      className="p-3 hover:bg-[#efefef] font-semibold text-[13px] cursor-pointer focus:outline-none focus:bg-[#e0e0e0]"
    >
      {result?.itemCode || "No Item Code"}
    </div>
  );
};

export default SearchResult;
