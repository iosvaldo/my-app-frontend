import React from 'react'
import Appointments from './Appointments'
import haircolor from '../Images/Hair_color.jpg'
import mensHaircut from '../Images/mens_haircut.jpg'
import manicure from '../Images/manicure.jpg'
import pedicure from '../Images/pedicure.jpg'
import haircut from '../Images/haircut.jpg'
import scissors from '../Images/scissors.jpg'

function Services() {

  return (
<div>
    <div>
        <img className="image" src={scissors} alt="image of scissors"/>
    </div>
    <div class="gallery">
     <a target="_blank" > 
        <img src={haircolor} alt="image of woman flicking her bright pink hair" width="600" height="400"/>
    </a>
    <div class="desc"><h5>Hair Color</h5>
    Transform your hair with our cruelty-free hair color treatments
    </div>
    <button className="button-1">Book Appointment</button>
</div>

<div class="gallery">
    <a target="_blank" href="img_forest.jpg">
        <img src={haircut} alt="Woman getting a haircut" width="600" height="400"/>
    </a>
    <div class="desc"><h5>Haircut</h5>
        Includes shampoo, scalp massage and blowdry</div>
    <button className="button-1">Book Appointment</button>
</div>

<div class="gallery">
    <a target="_blank" href="img_lights.jpg">
        <img src={manicure} alt="Woman getting a manicure" width="600" height="400"/>
    </a>
    <div class="desc"><h5>Manicure</h5>
        Manicure perfect for any occasion</div>
    <button className="button-1">Book Appointment</button>
</div>

<div class="gallery">
    <a target="_blank" href="img_mountains.jpg">
        <img src={pedicure} alt="Woman with painted toenails" width="600" height="400"/>
    </a>
    <div class="desc"><h5>Pedicure</h5>
        Includes a CBD foot massage</div>
    <button className="button-1">Book Appointment</button>
</div>

<div class="gallery">
    <a target="_blank" href="img_mountains.jpg">
        <img src={mensHaircut} alt="Man at barber shop" width="600" height="400"/>
    </a>
    <div class="desc"><h5>Men's Haircut</h5>
        Clean, cut, shave</div>
    <button className="button-1">Book Appointment</button>
</div>

</div>
  )
}

export default Services