import React, { useState } from 'react';
import "../assets/css/OrderPage.css";

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
  };

  return (
    <>
      <div className='container order-page'>
        <h1>Order Page</h1>
        <form onSubmit={handleSubmit}>
          <label>
            First Name
            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
          </label>
          <br />
          <label>
            Last Name
            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
          </label>
          <br />
          <label>
            Address
            <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
          </label>
          <br />
          <label>
            Email
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Ingredients
            <br />
            <input type="checkbox" value="Cheese" checked={ingredients.includes('Cheese')} onChange={handleCheckboxChange} />
            <span>Cheese</span>
            <br />
            <input type="checkbox" value="Tomatoes" checked={ingredients.includes('Tomatoes')} onChange={handleCheckboxChange} />
            <span>Tomatoes</span>
            <br />
            <input type="checkbox" value="Peppers" checked={ingredients.includes('Peppers')} onChange={handleCheckboxChange} />
            <span>Peppers</span>
            <br />
            <input type="checkbox" value="Mush
        rooms" checked={ingredients.includes('Mushrooms')} onChange={handleCheckboxChange} />
            <span>Mushrooms</span>
          </label>
          <br />
          <button type="submit">Order Now</button>
        </form>
      </div>
    </>
  );
}

export default Form;
