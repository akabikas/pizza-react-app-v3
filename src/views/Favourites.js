import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PizzaTable from './Pizzatable';

const Favourites = () => {

  
  useEffect(() =>{
    axios.get('http://localhost:8000/favourites')
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
            <PizzaTable pizzas= {pizza} title="Favourite orders"/>
        </div>
    )
    };

export default Favourites;