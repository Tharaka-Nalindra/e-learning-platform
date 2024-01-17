// ItemSelectionPage.js
import React, { useState, useEffect } from 'react';

const ItemSelectionPage = ({ onSelect }) => {
  const [selectedItems, setSelectedItems] = useState(0);

  const handleSelect = (count) => {
    setSelectedItems(count);
  };

  useEffect(() => {
    onSelect(selectedItems);
  }, [selectedItems, onSelect]);

  return (
    <div>
      <h2>Select Items</h2>
      <button onClick={() => handleSelect(5)}>Select 5 items</button>
      <button onClick={() => handleSelect(8)}>Select 8 items</button>
      <button onClick={() => handleSelect(10)}>Select 10 items</button>
      {selectedItems === 5 && <button onClick={() => handleSelect(0)}>Tik</button>}
    </div>
  );
};

export default ItemSelectionPage;
