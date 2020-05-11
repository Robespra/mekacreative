import React from 'react'
import { Link } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions'
// import Header from '../components/header'
import Footer from '../components/footer'
import Form from '../components/form'
import Animated_Topo from '../images/animated_topography.svg'
let pathPrefix = `/`
export default () => (
<PageTransition>

<div className="body_full">
<img src={Animated_Topo} className="topo_img" alt="topo"/>



<div className="row expanded body_full">


<div className="small-12 medium-8 columns">
        <div className="row full-left-pannel">
        <div className="small-12"><Link to="/"><img className="logo_bp" src={require('../images/biscay_plain_logo.svg')} alt="biscay plain logo"/></Link></div>
            <div className="small-12 columns">
                <h2>Monthly picks for people interested in creativity</h2>
                <h5>Get 5 free articles and guides in your inbox every last Sunday morning of the month ☕</h5>
                    <Form/>
            </div>
        </div>
    </div>




    
    
    <div className="small-12 medium-4 columns align-self-middle publications">
    {/* <div className="circ">
            <img src={require('../images/animated_topography.svg')} alt="test" />
        </div> */}
        <div className="phone">
        
		<div className="screen">
        <div className="email_bar">
            <div className="email_bar_left">
                <span class="top_hour">09:45</span>
                <span class="top_email_ios_svg"><img src={require('../images/top_icon_email_ios.svg')} alt="top_email_ios_svg"/></span>
            </div>
            <div className="email_bar_right">
                <span class="top_network_svg"><img src={require('../images/top_icon_network.svg')} alt="top_icon_network"/></span>
                <span class="top_wifi_svg"><img src={require('../images/top_icon_wifi.svg')} alt="top_icon_wifi"/></span>
                <span class="top_batery_svg"><img src={require('../images/top_icon_batery.svg')} alt="top_icon_batery"/></span>
            </div>
            <div className="notch"></div>
            <div className="censor"></div>
            <div className="camera"></div>
            <div className="speaker"></div>
        </div>
			<div className="inner">
        
            
        <img className="logo_bp_inner_phone_logo" src={require('../images/biscay_plain_logo.svg')} alt="biscay plain logo"/>
        <h5 class="mtl">Your monthly creative picks</h5>
            <small>JUNE 2020</small>
        <div className="skills_underline_orange"></div>

        <p class="phone_inner_email_introduction mtl">A monthly collection of news and articles about 
        creativity. Subscribe here if you are not already 
            a member.</p>
        <div className="row">
            <div className="small-6 column topleftblock">
                <div className="callout_publications">
                    <div className="tag_container"><img className="tag_topleftblock" src={require('../images/tag_topleftblock.svg')} alt="tag_topleftblock"/></div>
                    <div className="title_container"> 
                        <a href="http://digest.bps.org.uk/2006/03/be-creative-dont-even-think-about-it.html" target="_blank" rel="noopener" onclick="track('Click-see-article-solitude','Click-see-article-solitude')"><h3 className="h3_topleftblock">Be creative: Don't even think about it<span className="target_blank"></span></h3></a>
                        {/* <p>Not thinking about a problem for a while doesn’t just give you a fresh perspective, it also allows your more creative unconscious to get to work as it.</p> */}
                    </div>
                    <div className="source_container">     
                        Picked from digest.bps.org.uk
                    </div>   
                </div>
            </div>
            <div className="small-6 column toprightblock">
                <div className="callout_publications">
                    <div className="tag_container"><img className="tag_toprightblock" src={require('../images/tag_toprightblock.svg')} alt="tag_toprightblock"/></div>
                    <div className="title_container"> 
                        <a href="https://medium.com/@neilstevenson77/inside-the-brain-machine-neuroscience-changed-how-i-think-about-creativity-86f49503bbc8#.w9hy85syc" target="_blank" rel="noopener" onclick="track('Click-see-article-five','Click-see-article-five')"><h3 className="h3_toprightblock">What Makes a Genius?<span className="target_blank"></span></h3></a>
                        {/* <p>Inside the brain machine : neuroscience changed how I think about creativity</p> */}
                    </div> 
                    <div className="source_container">     
                        Picked from medium.com
                    </div>   
                </div>
            </div>

            <div className="small-6 column bottomleftblock">
                <div className="callout_publications">
                    <div className="tag_container"><img className="tag_bottomleftblock" src={require('../images/tag_bottomleftblock.svg')} alt="tag_bottomleftblock"/></div>
                    <div className="title_container"> 
                        <a href="http://blogs.scientificamerican.com/beautiful-minds/the-real-neuroscience-of-creativity/" target="_blank" rel="noopener" onclick="track('Click-see-article-five','Click-see-article-five')"><h3 className="h3_bottomleftblock">The real neuroscience of creativity<span className="target_blank"></span></h3></a>
                        {/* <p>Dr. Newberg’s main area of study was enlightenment: he’d been putting Buddhist monks and other spiritual leaders into the machine to see whether their moments of transcendence had a physiological basis. But right now, he was looking for patterns in the brains of creative people.</p> */}
                    </div>
                    <div className="source_container">      
                        Picked from scientificamerican.com
                    </div>
                </div>
            </div>
            <div className="small-6 column bottomrightblock">
                <div className="callout_publications">
                    <div className="tag_container"><img className="tag_bottomrightblock" src={require('../images/tag_bottomrightblock.svg')} alt="tag_bottomrightblock"/></div>
                    <div className="title_container"> 
                        <Link className="menu__item" to="/books/" onclick="track('Click-see-article-empathy','Click-see-article-empathy')"><h3 className="h3_bottomrightblock">Monthly book selection<span className="target_blank"></span></h3></Link>
                                    {/* <p>Our monthly creative reading recommendation.</p> */}
                    </div>
                    <div className="source_container">      
                        4 new books this week
                    </div>
                </div>
            </div>
            <div className="inner_footer mtxl mbxl">      
                        <p>Copyright 2020 uxpages.com biscaypla.in</p>
                        <p>unsubscribe from the list</p> <p>Browse older issues</p>
            </div>
            
        </div>
			</div>
		</div>
	</div>
        
        
        
    </div>

    <div className="footer-medium columns small-12 align-self-bottom">
                <div className="row align-center">
                    <div className="column small-3">
                        <small><Link className="menu__item" to="/contact/"><span className="menu__item-name">Get in touch</span></Link></small>
                    </div>
                    <div className="column small-3">
                        <small><Link className="menu__item" to="/submissions/"><span className="menu__item-name">Suggest your article</span></Link></small>
                    </div>
                    <div className="column small-3">
                        <small><Link className="menu__item" to="/legal/"><span className="menu__item-name">Privacy policy</span></Link></small>
                    </div>
                    <div className="column small-3">
                        <small>&copy; BiscayPlain 2011-2020</small>
                    </div>
                </div>
            </div>
 </div>
    

</div>
</PageTransition>
) 

