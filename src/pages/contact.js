import React from 'react'
import { Link } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions'
import Header from '../components/header'
import Footer from '../components/footer'
import Formdatatext from '../components/formtext'
import Animated_Topo from '../images/animated_topography.svg'
let pathPrefix = `/`
export default () => (
<PageTransition>
<Header/>
<div className="container">


<div className="row align-center padding10_bottom">
<h1>Contact</h1>


<div className="small-12 medium-8 columns">
  <Formdatatext/>
    </div>




    
    
    
    
 </div>
    

</div>
<Footer/>
</PageTransition>
) 
