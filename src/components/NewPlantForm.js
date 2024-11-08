import React, { useState } from "react";

function NewPlantForm({ handleAddPlant }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Only add the plant if all fields are filled
    if (name && price && image) {
      const newPlant = {
        id: Date.now(), // Generate a unique ID for the plant
        name,
        price,
        image
      };

      // Call the handleAddPlant function passed from the parent component
      handleAddPlant(newPlant);

      // Clear form fields after adding
      setName('');
      setPrice('');
      setImage('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder="Plant name" />
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
        <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
