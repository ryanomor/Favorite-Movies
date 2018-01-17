import React from 'react';

const Ratings = ({ ratings, userRatings, handleSelect, selectedRating }) => {
  return (
    <div>
      <span>Select a rating:</span> {" "}
      <select value={selectedRating} onChange={handleSelect}>
      {["", ...ratings].map((rating, idx) => 
        <option key={idx} value={rating}>{rating}</option>
      )}
      </select>
    </div>
  );
};

export default Ratings;