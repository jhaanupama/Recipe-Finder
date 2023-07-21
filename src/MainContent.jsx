import React from 'react';
import { useState } from 'react';
function SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
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
      <SearchBar onSearch={handleSearch} />
      {RecipeList}
    </>
  );
}

export default MainContent;
