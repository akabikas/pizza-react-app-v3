import React, { useState } from 'react';
import axios from 'axios';
import "../assets/css/OrderPage.css";
import logo from '../assets/img/pizza.png';
import OrderConfirmationModal from "../components/Modal";


import emailjs from 'emailjs-com';
import Favouritestabs from './FavouritesTab';
emailjs.init('NnQS5BEsBSDf-T5Q6');
function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const [isSubmitted, setSubmitStatus] = useState(false);



  // send email function and parameter setup for emailJS
  function sendEmail(email_to, first_name, last_name) {
    const templateParams = {
      to_email: email_to,
      first_name: first_name,
      last_name: last_name
    };

    emailjs.send('service_rvvtirp', 'template_4ytpafc', templateParams)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      }, (error) => {
        console.error('Email failed to send:', error);
      });
  }


  const handleClose = () => {
    setSubmitStatus(false);

  }
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
    sendEmail(email, firstName, lastName);
    axios.post(`http://localhost:8000/orders`,
      {
        firstName,
        lastName,
        address,
        email,
        ingredients
      })
      .catch(function (error) {
        if (!error.response) {
          // network error
          this.errorStatus = 'Error: Network Error';
        } else {
          this.errorStatus = error.response.data.message;
        }
      });


    setSubmitStatus(true)
  };

  return (
    <>
      {isSubmitted && <OrderConfirmationModal onClickOption={handleClose} />}
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
          <Favouritestabs />
        </div>
        <div className='pizza-image col-6'>
          <img src={logo} ></img>
        </div>
      </div>
    </>
  );
}

export default Form;
