import React, { useState } from 'react';

const Favouritestabs = ({ name, price }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={toggleFavorite} className='OrderNowButton'>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default Favouritestabs;