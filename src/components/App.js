import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from './components/header';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick} />
      <ShoppingList items={itemData} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
    </div>
  );
}

export default App;
