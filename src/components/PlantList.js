import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  
  const [plants, setPlants] = useState([]);

  // Fetch plant data on component mount (GET request)
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch('http://localhost:6001/plants'); // Replace with your API endpoint
        const data = await response.json();
        setPlants(data);
      } catch (error) {
        console.error('Error fetching plant data:', error);
      }
    };

    fetchPlants();
  }, []);

  // Update plant data (PATCH request)
  const updatePlant = async (id) => {
    try {
      const response = await fetch(`http://localhost:6001/plants/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: "Updated Plant Name" }), // Example: updating name
      });

      if (response.ok) {
        const updatedPlant = await response.json();
        setPlants((prevPlants) =>
          prevPlants.map((plant) =>
            plant.id === id ? { ...plant, name: updatedPlant.name } : plant
          )
        );
      } else {
        console.error('Failed to update plant');
      }
    } catch (error) {
      console.error('Error updating plant:', error);
    }
  };

  return (
    <ul className="cards">
       {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} handleUpdate={updatePlant} />
        ))}
    </ul>
  );
}

export default PlantList;
