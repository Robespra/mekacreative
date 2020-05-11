import React from 'react'
import { Link } from "gatsby"
import Animated_Topo from '../images/animated_topography.svg'
export default () => (

  <div className="row">
        <div className="small-12"><Link to="/"><img className="logo_bp" src={require('../images/biscay_plain_logo.svg')} alt="biscay plain logo"/></Link></div>
        <img src={Animated_Topo} className="topo_img" alt="topo"/>
  </div>


)


