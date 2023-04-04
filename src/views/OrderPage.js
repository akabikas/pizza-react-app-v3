import React, { useState } from 'react';
import axios from 'axios';
import "../assets/css/OrderPage.css";
import logo from '../assets/img/pizza.png';
function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const handleCheckboxChange = event => {
    const { value } = event.target;
    if (ingredients.includes(value)) {
      setIngredients(ingredients.filter(item => item !== value));
    } else {
      setIngredients([...ingredients, value]);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Address:', address);
    console.log('Email:', email);
    console.log('Ingredients:', ingredients);

    axios.post(`http://localhost:8080/orders`,
     {'firstName': {firstName},
      'lastName': {lastName},
      'address': {address},
      'email':{email},
      'ingredients':{ingredients} });

  };

  return (
    <>
      <div className='container order-page'>
        <h1>Order Page</h1>
        <div className='order-form col-6'>


          <form onSubmit={handleSubmit}>
            <fieldset>
              <label>
                First Name
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
              </label>
            </fieldset>
            <fieldset>
              <label>
                Last Name
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
              </label>
            </fieldset>
            <fieldset>
              <label>
                Address
                <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
              </label>
            </fieldset>
            <fieldset>
              <label>
                Email
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
              </label>
            </fieldset>
            <fieldset>
              <label className='ingredients'>
                Ingredients
                <div className='list'>
                  <input className='checkbox' type="checkbox" value="Cheese" checked={ingredients.includes('Cheese')} onChange={handleCheckboxChange} />
                  <span>Cheese</span>
                </div>
                <div className='list'>
                  <input className='checkbox' type="checkbox" value="Tomatoes" checked={ingredients.includes('Tomatoes')} onChange={handleCheckboxChange} />
                  <span>Tomatoes</span>
                </div>
                <div className='list'>
                  <input className='checkbox' type="checkbox" value="Peppers" checked={ingredients.includes('Peppers')} onChange={handleCheckboxChange} />
                  <span>Peppers</span>
                </div>
                <div className='list'>
                  <input className='checkbox' type="checkbox" value="Mushrooms" checked={ingredients.includes('Mushrooms')} onChange={handleCheckboxChange} />
                  <span>Mushrooms</span>
                </div>
              </label>
            </fieldset>
            <br />
            <button type="submit" className='OrderNowButton'>Order Now</button>
          </form>
        </div>
        <div className='pizza-image col-6'>
          <img src={logo} ></img>
        </div>
      </div>
    </>
  );
}

export default Form;
