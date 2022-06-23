import React from 'react'
// import Appointments from './Appointments'
import haircolor from '../Images/Hair_color.jpg'
import mensHaircut from '../Images/mens_haircut.jpg'
import manicure from '../Images/manicure.jpg'
import pedicure from '../Images/pedicure.jpg'
import haircut_img from '../Images/haircut_img.jpg'
import scissors from '../Images/scissors2.jpg'

function Services({haircut}) {

  return (
<div className="main-services">
    
    <div class="gallery">
     <a href="/" target="_blank" > 
        <img src={haircolor} alt="woman flicking pink hair" width="600" height="400"/>
    </a>
    <div class="desc"><h5>Color Treatment</h5>
    Cruelty-free hair color treatments
    </div>
    <a href='/form'className="button-1" >Book Appointment</a>
   
</div>

<div class="gallery">
    <a target="_blank" href="img_forest.jpg">
        <img src={haircut_img} alt="Woman getting a haircut" width="600" height="400"/>
    </a>
    <div class="desc"><h5>Haircut</h5>
        Includes shampoo, scalp massage and blowdry</div>
        <a href='/form'className="button-1" >Book Appointment</a>
  
</div>

<div class="gallery">
    <a target="_blank" href="img_lights.jpg">
        <img src={manicure} alt="Woman getting a manicure" width="600" height="400"/>
    </a>
    <div class="desc"><h5>Manicure</h5>
        Manicure perfect for any occasion</div>
        <a href='/form'className="button-1" >Book Appointment</a>
    
</div>

<div class="gallery">
    <a target="_blank" href="img_mountains.jpg">
        <img src={pedicure} alt="Woman with painted toenails" width="600" height="400"/>
    </a>
    <div class="desc"><h5>Pedicure</h5>
    We provide amazing CBD foot massage</div>
        <a href='/form'className="button-1" >Book Appointment</a>
   
</div>

<div class="gallery">
    <a target="_blank" href="img_mountains.jpg">
        <img src={mensHaircut} alt="Man at barber shop" width="600" height="400"/>
    </a>
    <div class="desc"><h5>Men's Haircut</h5>
        Clean cuts shaves, and detailing</div>
        <a href='/form'className="button-1" >Book Appointment</a>
  
</div>
<div>
    <img className="image" src={scissors} alt="scissors"/>
</div>

</div>
  )
}

export default Services
