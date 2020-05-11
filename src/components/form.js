import React from 'react'
import { Link } from 'gatsby'
import Formjs from './formData'

const Form = () => (

    <form action="https://formspree.io/mnbblykm" name="contactForm" id="contactForm" method="post" className=" row topBefore padding5_top">
        <div className="small-7 medium-4 columns textfield_submit">
            <input id="email" className="unsent" type="email" name="Email" placeholder="Leave your e-mail..." required/>
        </div>
        <div className="small-5 medium-3 columns btn_submit">
            <input id='send-button' className="submitBtn" type="submit" value="Subscribe"/>
        </div>
        <div className="small-12 columns no-spam">
            <small>No spam, no fuss. Unsubscribe anytime. <Link to="/legal/">Privacy policy</Link></small>
        </div>
    </form>
      
 
    )
export default Form
