import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
function SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <p>Find Your Recipie!!</p>
      <input
        className='input'
        type='text'
        placeholder='Search'
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
}
function MainContent({ recipes }) {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearch = (searchTerm) => {
    const filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  const RecipeList = filteredRecipes.map((recipe) => (
    <div className='Recipe-List' id={recipe.id} key={recipe.id}>
      <h3>{recipe.name}</h3>
      <p>{recipe.procedure}</p>
    </div>
  ));
  return (
    <>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      {RecipeList}
      <Footer />
    </>
  );
}

export default MainContent;
