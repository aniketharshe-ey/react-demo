import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Search from "./Components/Search";
import RecipeList from "./Components/RecipeList";

const Home = () => {
  return (
    <Container>
      <Header title="Recipes" />
      <Search />
      <RecipeList />
    </Container>
  );
};

export default Home;
