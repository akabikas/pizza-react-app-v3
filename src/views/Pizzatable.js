import React, { useState, useEffect } from 'react';

const PizzaTable = (props) => {

  const [selectedPizza, setSelectedPizza] = useState(null);
  console.log(props)

  const handleSelectPizza = (props) => {
    setSelectedPizza(props);
  };

  const handleQuickOrder = () => {
    alert(`You have ordered a ${selectedPizza.id} pizza for $${selectedPizza.price}.`);
  };

  return (
    <div className='container'>
      <h2 style={{marginTop: '50px'}}>{props.title}</h2>
      <table className='orderTable'>
        <thead>
          <tr>
            <th>Order</th>
            <th>Crust type</th>
            <th>Toppings</th>
            <th>Price</th>
            <th>Date and Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
         
        {props.pizzas.map((pizza, index) => (
            <tr key={index}>
               <td>Order #
                  {pizza.id}
              </td>
              <td>{pizza.crust}</td>
              <td >{pizza.ingredients.map ((ingredient) => (
                  <tr>
                    <td>
                      {ingredient}
                    </td>
                  </tr>
                ))}
              </td>
              <td>$10</td>
              <td>
                {pizza.time}
              </td>
              <td>
                <button className='OrderNowButton' value={pizza} onClick={() => handleSelectPizza(pizza)}>Order</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedPizza && (
        <div>
          <h2></h2>
          <h3>Selected Pizza: {selectedPizza.id}</h3>
          <p>Price: ${selectedPizza.price}</p>
          <button className='OrderNowButton' onClick={handleQuickOrder}>Quick Order</button>
        </div>
      )}
    </div>
  );
};

export default PizzaTable;