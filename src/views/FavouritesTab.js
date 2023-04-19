import React, { useState } from 'react';

const Favouritestabs = ({ name, price }) => {
  const [isFavorite, setIsFavorite] = useState(false);


  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <button type="submit" className='OrderNowButton'> Add to favourites
</button>
    </div>
  );
};

export default Favouritestabs;