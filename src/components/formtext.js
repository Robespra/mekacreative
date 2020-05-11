import React from 'react'
import { Link } from 'gatsby'
import Formjs from './formDatatext'

const Formtext = () => (

    <form action="https://formspree.io/mnbblykm" name="contactForm" id="contactForm" method="post" className=" row topBefore padding5_top">
        <input id="email" className="unsent" type="email" name="Email" placeholder="Leave your e-mail..." required/>
        <input id="text" type="text" name="message" />
        <input id='send-button' className="submitBtn" type="submit" value="Subscribe"/>
    </form>
      
 
    )
export default Formtext
