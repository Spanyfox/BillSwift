import React, { useState } from "react";
import SlideBar from "../components/SlideBar";
import Search from "../components/Search";
import Table from "../components/Table";
import Button from "../components/Button";
import SearchResultsList from "../components/SearchResultsList";
import { useNavigate } from 'react-router-dom';
import AddItemsModal from "../components/AddItemsModal";

const InventoryPage = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGenerateBill = () => {
    navigate("/bill");
  };

  return (
    <div>
      <div className="flex">
        <SlideBar />
        <div className="w-[100%] flex flex-col items-center">
          <Search setResults={setResults} />
          <SearchResultsList results={results} />
          <Table />
          <div className="flex gap-6 self-end mt-10 mr-20">
            <Button name="Add Item" onClick={handleAddClick} />
            <Button name="Generate Bill" onClick={handleGenerateBill} />
          </div>
        </div>
      </div>
      <AddItemsModal isOpen={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default InventoryPage;