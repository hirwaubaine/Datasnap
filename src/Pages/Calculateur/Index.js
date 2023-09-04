import React, { useState } from 'react'
import SideMenu from '../../Components/SideMenu/Index'
import Form from '../../Form'

function Calculateur() {
  const [responses, setResponses] = useState('');

  const handleInputChange = (event) => {
    setResponses(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const responseList = responses.split(',').map((response) => response.trim());
    console.log(responseList); // You can do whatever you want with the list of responses
  };

  return (
    <div className='SideMenuAndPageContent'>
      <SideMenu/>  
      <div className='PageContent'>
        <Form/>
        {/* <form onSubmit={handleSubmit}>
        <label htmlFor="responses">Enter 3 responses (comma-separated):</label>
        <textarea
          id="responses"
          name="responses"
          value={responses}
          onChange={handleInputChange}
          rows={3}
          cols={40}
        />
        <button type="submit">Submit</button>
      </form> */}
      </div> 
      
    </div>
  )
}

export default Calculateur