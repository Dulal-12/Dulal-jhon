import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';
import './Shipment.css';
const Shipment = () =>{
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
    const [loggedInUser , setLoggedInUser] = useContext(userContext);
    return (
    
      <form className = "ship-form" onSubmit={handleSubmit(onSubmit)}>
        
     
        <input name="name" ref={register({ required: true })} defaultValue = {loggedInUser.name} placeholder = "Your name" />
        {errors.name&& <span className = "error">Name is required</span>}
        
        <input name="email" ref={register({ required: true })} defaultValue = {loggedInUser.email} placeholder = "Your email" />
        {errors.email&& <span className = "error">Email is required</span>}

     <input name="address" ref={register({ required: true })} placeholder = "Your address" />
      {errors.address&& <span className = "error">Address is required</span>}

     <input name="phone" ref={register({ required: true })} placeholder = "Your phone" />
      {errors.phone&& <span className = "error">Phone is required</span>}
     
        <input type="submit" />
      </form>
    )
  };

export default Shipment;