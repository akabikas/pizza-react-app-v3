import React, { useState } from 'react';
import axios from 'axios';
import "../assets/css/OrderPage.css";
import logo from '../assets/img/pizza.png';
import OrderConfirmationModal from "../components/Modal";


import emailjs from 'emailjs-com';
emailjs.init('NnQS5BEsBSDf-T5Q6');
function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [crust, setCrust] = useState("")
  const [time, setTime] = useState('');


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

  const handleRadioboxChange = event => {
    const { value } = event.target;
    setCrust(value);
  };

  const handleCheckboxChange = event => {
    const { value } = event.target;
    if (ingredients.includes(value)) {
      setIngredients(ingredients.filter(item => item !== value));
    } else {
      setIngredients([...ingredients, value]);
    }
  };

  const handleSubmit = event => {
  
    setTime(Date().toLocaleString())
    event.preventDefault();
    sendEmail(email, firstName, lastName);
    axios.post(`http://localhost:8000/orders`,
      {
        firstName,
        lastName,
        address,
        email,
        phone,
        ingredients,
        crust,
        time
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

  //adding a favourite order
  const addFavourite = () => {
    axios.post(`http://localhost:8000/favourites`,
      {
        firstName,
        lastName,
        address,
        email,
        phone,
        ingredients,
        crust
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  return (
    <>
      {isSubmitted && <OrderConfirmationModal onClickOption={handleClose} />}
      <div className='container order-page'>
        <h1>Quick Order</h1>
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
              <label>
                Phone number
                <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
              </label>
            </fieldset>
            <fieldset>
              <label className='ingredients'>
                Crust
                
                <div className='list'>
                <input className='checkbox' type="radio" value="Classic" checked={crust.includes('Classic')} onChange={handleRadioboxChange} />
                Classic</div>
                
                <div className='list'><input className='checkbox' type="radio" value="Stuffed" checked={crust.includes('Stuffed')} onChange={handleRadioboxChange} />
                  Stuffed</div>
               
                <div className='list'><input className='checkbox' type="radio" value="Pan" checked={crust.includes('Pan')} onChange={handleRadioboxChange} />
                  Pan</div>
              </label>
            </fieldset>
            <fieldset>
              <label className='ingredients'>
                Ingredients
                <div className='list'>
                  <input className='checkbox' type="checkbox" value="Mozzarela" checked={ingredients.includes('Mozzarela')} onChange={handleCheckboxChange} />
                  <span>Mozzarela</span>
                </div>
                <div className='list'>
                  <input className='checkbox' type="checkbox" value="Tomatoes" checked={ingredients.includes('Tomatoes')} onChange={handleCheckboxChange} />
                  <span>Tomatoes</span>
                </div>
                <div className='list'>
                  <input className='checkbox' type="checkbox" value="Peperoni" checked={ingredients.includes('Peperoni')} onChange={handleCheckboxChange} />
                  <span>Peperoni</span>
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
          <button onClick={addFavourite} className='OrderNowButton'>Add to favourites</button>
        </div>
        <div className='pizza-image col-6'>
          <img src={logo} ></img>
        </div>
      </div>
    </>
  );
}

export default Form;
