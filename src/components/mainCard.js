import React from 'react';
import { useNavigate } from "react-router-dom";

const MainCard = ({ cardes, cardData, setCardData, setSelectedPageData }) => {
  const navigate = useNavigate();

  const removeCard = () => {
    const updatedData = cardData.filter(item => item.id !== cardes.id);
    setCardData(updatedData);
  };

  const navigateToUniqueData = () => {
    setSelectedPageData(cardes);
    navigate("/uniqueData");
  }; 

  return (
    <div onClick={()=>navigateToUniqueData(cardes)} className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-gray-100">
      <div className="text-lg font-semibold mb-4">
        <span>ID:</span> {cardes.id}
      </div>
      <div className="text-xl mb-2">{cardes.name}</div>
      <div className="mb-2">
        <span className="font-semibold text-gray-600">Username:</span> {cardes.username}
      </div>
      <div className="mb-2">
        <span className="font-semibold text-gray-600">Email:</span> {cardes.email}
      </div>
      <div className="mb-4">
        <span className="font-semibold text-gray-600">Contact No:</span> {cardes.phone}
      </div>
      <button onClick={(e) => { e.stopPropagation(); removeCard(); }} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">Remove</button>
    </div>
  );
};

export default MainCard;

