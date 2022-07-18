
import React, {useState} from 'react';



function RegisterForm() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [npi, setNpi] = useState(null);

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "firstName"){
      setFirstName(value);
    }
    if(id === "lastName"){
      setLastName(value);
    }
    if(id === "npi"){
      setNpi(value);
    }
    if(id === "address"){
      setAddress(value);
    }
    if(id === "phoneNumber"){
      setPhoneNumber(value);
    }
    if(id === "email"){
      setEmail(value);
    }
  }

  // const handleSubmit = () => {
  //   return(<div>Thank you for registering with Availity. This is the info you have provided us: {firstName}, lastName, npi, address, email, phoneNumber</div>);
  // }      
    return(
        <form>
          <div>
            <label for="firstName">First Name: </label>
            <input type="text" id="firstName" value={firstName} onChange = {(e) => handleInputChange(e)} />
          </div>

          <div>
            <label for="lastName">Last Name: </label>
            <input type="text" id="lastName" value={lastName} onChange = {(e) => handleInputChange(e)} />
          </div>
          
          <div>
            <label for="npi">NPI Number: </label>
            <input type="text" id="npi" value={npi} onChange = {(e) => handleInputChange(e)} />
          </div>
          
          <div>
            <label for="address">Business Address: </label>
              <textarea value={address} id="adress" onChange = {(e) => handleInputChange(e)}></textarea>
          </div>
          
          <div>
            <label for="phoneNumber"> Telephone Number: 
              <input type="tel" id="phoneNumber" value={phoneNumber} onChange = {(e) => handleInputChange(e)} />
            </label>
          </div>
                
          <div>
            <label for="email"> Email Address: 
              <input type="email" id="email" value={email} onChange = {(e) => handleInputChange(e)} />
            </label>
          </div>

          <button type="submit">Register with Availity</button>
        </form>
      )

    
    }
  
    export default RegisterForm;
  
  