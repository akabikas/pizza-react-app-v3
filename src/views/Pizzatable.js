import React, { useState } from 'react';

const PizzaTable = () => {

  
  const [pizzas, setPizzas] = useState([
    { name: 'Pepperoni', price: 10 },
    { name: 'Margherita', price: 8 },
    { name: 'Vegetarian', price: 9 },
  ]);

  const [selectedPizza, setSelectedPizza] = useState(null);

  const handleSelectPizza = (pizza) => {
    setSelectedPizza(pizza);
  };

  const handleQuickOrder = () => {
    alert(`You have ordered a ${selectedPizza.name} pizza for $${selectedPizza.price}.`);
  };

  return (
    <div>
      <h2>Pizza Menu</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quick Order</th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map((pizza, index) => (
            <tr key={index}>
              <td>{pizza.name}</td>
              <td>${pizza.price}</td>
              <td>
                <button onClick={() => handleSelectPizza(pizza)}>Order</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedPizza && (
        <div>
          <h3>Selected Pizza: {selectedPizza.name}</h3>
          <p>Price: ${selectedPizza.price}</p>
          <button onClick={handleQuickOrder}>Quick Order</button>
        </div>
      )}
    </div>
  );
};

export default PizzaTable;