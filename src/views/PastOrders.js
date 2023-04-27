import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PizzaTable from './Pizzatable';

const PastOrders = () => {

  
  useEffect(() =>{
    axios.get('http://localhost:8000/orders')
    .then(function(response) {
      console.log(response.data);
      setPizza(response.data)
   }).catch(function(error) {
      console.log(error.response.data);
   });
    }, []);

    const [pizza, setPizza] = useState([])

    return(
        <div>
            <PizzaTable pizzas= {pizza} title="Past orders"/>
        </div>
    )
    };

export default PastOrders;