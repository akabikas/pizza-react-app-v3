import axios from 'axios';
import React, { useState, useEffect } from 'react';

const PizzaTable = () => {
  
  const [pizzas, setPizzas] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:8000/favourites')
    .then(function(response) {
      console.log(response.data);
      setPizzas(response.data)
   }).catch(function(error) {
      console.log(error.response.data);
   });
    }, [])
  

  
  

  const [selectedPizza, setSelectedPizza] = useState(null);

  const handleSelectPizza = (pizza) => {
    setSelectedPizza(pizza);
  };

  const handleQuickOrder = () => {
    alert(`You have ordered a ${selectedPizza.name} pizza for $${selectedPizza.price}.`);
  };

  return (
    <div className='container'>
      <h2>Favourites</h2>
      <table>
        <thead>
          <tr>
            <th>Toppings</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map((pizza) => (
            <tr>
              <td>{pizza.ingredients.map ((ingredient) => (
                  <tr>
                    <td>
                      {ingredient}
                    </td>
                  </tr>
              ))}
              </td>
              <td>$10</td>
              <td>
                <button className='OrderNowButton' onClick={() => handleSelectPizza(pizza)}>Order</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedPizza && (
        <div>
          <h3>Selected Pizza: {selectedPizza.name}</h3>
          <p>Price: ${selectedPizza.price}</p>
          <button className='OrderNowButton' onClick={handleQuickOrder}>Quick Order</button>
        </div>
      )}
    </div>
  );
};

export default PizzaTable;