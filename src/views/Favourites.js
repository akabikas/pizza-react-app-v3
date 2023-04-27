import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PizzaTable from './Pizzatable';
import Sidebar from '../components/Sidebar';

const Favourites = () => {


  useEffect(() => {
    axios.get('http://localhost:8000/favourites')
      .then(function (response) {
        console.log(response.data);
        setPizza(response.data)
      }).catch(function (error) {
        console.log(error.response.data);
      });
  }, []);

  const [pizza, setPizza] = useState([])

  return (


    <div className='container-full'>
      <div className='row'>
        <div className='col-3'>
          <Sidebar />
        </div>
        <div className='col-9'>
          <PizzaTable pizzas={pizza} title="Favourite orders" />
        </div>
      </div>

    </div>
  )
};

export default Favourites;