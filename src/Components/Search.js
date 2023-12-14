import React, { useEffect, useState } from "react";
import { Button, Row, Spinner } from "react-bootstrap";
import { useRecipe } from "../Hooks/useRecipe";

const Search = () => {
  const { isLoading, setIsLoading, filteredData, handleSearch } = useRecipe();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (filteredData.length > 0) {
      setIsLoading(false);
    }
  }, [filteredData]);

  return (
    <Row className="mt-3">
      <input
        type="text"
        className="w-50"
        onChange={handleInputChange}
        value={inputValue}
      />
      <Button
        className="w-25 ms-4"
        variant="primary"
        onClick={() => handleSearch(inputValue)}
      >
        Search
      </Button>
      {isLoading && (
        <Spinner animation="border" role="status" className="ms-3">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </Row>
  );
};

export default Search;
