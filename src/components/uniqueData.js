import React from 'react';

const UniqueData = ({ selectedPageData }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Employee Full Data</h1>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">ID: {selectedPageData.id}</h2>
        <div className="mb-2">
          <span className="font-semibold">Name:</span> {selectedPageData.name}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Username:</span> {selectedPageData.username}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Email:</span> {selectedPageData.email}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Address:</span> {selectedPageData.address.street}, {selectedPageData.address.city}, {selectedPageData.address.zipcode}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Website:</span> {selectedPageData.website}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Website:</span> {selectedPageData.website}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Phone no :</span> {selectedPageData.phone}
        </div>

      </div>
    </div>
  );
};

export default UniqueData;
