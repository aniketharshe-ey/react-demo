import React from "react";
import { Row } from "react-bootstrap";
import Card from "./Card";
import { useRecipe } from "../Hooks/useRecipe";

const RecipeList = () => {
  const { filteredData, handleCusineChange } = useRecipe();

  return (
    <>
      <div className="text-left mt-3">
        <label className="">Cusine:</label>
        <select className="ms-4" onChange={handleCusineChange}>
          <option value="">Select</option>
          <option value="american">American</option>
          <option value="asian">Asian</option>
          <option value="british">British</option>
          <option value="chinese">Chinese</option>
        </select>
      </div>

      <Row className="mt-3">
        <h5>List</h5>
        {filteredData.length === 0 && "No records found."}
      </Row>
      <div className="flex-container">
        {filteredData.map((item, index) => {
          return <Card {...item} key={index} />;
        })}
      </div>
    </>
  );
};

export default RecipeList;
