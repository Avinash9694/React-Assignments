import React from 'react';
// import logo from './logo.svg';
import './App.css';

var arrowL = '<';
var arrowR = '>'
const appointmentDetails = {
  name: 'Alan Ford',
  AppointmentOn: new Date().toLocaleDateString(),
  time: '10:30 (8-02-2020)',
  Email: 'alan.form@email.nl',
  phone: +911234567890,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png',
  Status: 'inprogress',
  door: 'mark',
  description: 'Boltart Bosbessen',

}

function App() {

  return (
    <div className="site-container">
      <div className='details'>

        <div id='arrowl'>

          <p >{arrowL}</p>

          </div>
          

          <h1>{appointmentDetails.name}</h1>


          <div>

            <button id='btn'>print</button>

          </div>
          
        </div>


        <div className='customer-info'>

          <p><strong>Appointment on:    </strong>{appointmentDetails.AppointmentOn}</p>

          <p><strong>Email:      </strong>{appointmentDetails.Email}</p>

          <p><strong>phone:     </strong>{appointmentDetails.phone}</p>

        </div>


        <div className='order-info'>

          <div id='order-one'>

          <p><strong>status</strong></p><p><li>{appointmentDetails.Status}</li></p>

          </div>


          <div id='order-two'>

          <p><strong>Door</strong></p><p>{appointmentDetails.door}</p>

          </div>


          <div id='order-three'>

          <p><strong>Time</strong></p><p>{appointmentDetails.time}</p>

          </div>  

        </div>


        <div className='product-list'>

          <div>

          <input type='checkbox'></input>

          <img src = {appointmentDetails.profileImg}></img>

          </div>


          <div>

            <h3 id='text'>{appointmentDetails.description}</h3>

            <p id='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            <p id='arrowr'>{arrowR}</p>

          </div>
          
        </div>

      </div>
    
  );
}

export default App;
