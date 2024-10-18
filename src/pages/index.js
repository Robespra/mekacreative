import React from 'react'
import { Link } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions'
// import Header from '../components/header'
import Footer from '../components/footer'
import Form from '../components/form'
import FeatherIcon from '../components/FeatherIcon'
import Fade from 'react-reveal/Fade'
import MekaLogo from '../images/mekacreative_logo.svg';
import wireframeshighfi from '../images/wireframes_high_fi.svg';
import landingAi from '../images/landing_ai.svg';
import bgTriangle from '../images/bg_triangle.svg';
import landingpersoradar from '../images/landing_perso_radar.svg';
import landingpersoprogress from '../images/landing_perso_progress.svg';
import bgsquareround from '../images/bg_square_round.svg';
import patternbluebg from '../images/pattern_blue_bg.svg';
import bgtriangleround from '../images/bg_triangle_round.svg';
import trowbpic from '../images/trowb_pic.png';
import patternpinkbgdetail1 from '../images/pattern_pink_bg_detail1.svg';
import landingillustrguideparadoxe from '../images/landing_illustr_guide_paradoxe.svg';
import mekaprosample from '../images/meka_pro_sample.png';
import landingillustrguideempathy from '../images/landing_illustr_guide_empathy.svg';
import landingillustrguidesolitude from '../images/landing_illustr_guide_solitude.svg';
import socialtwitter from '../images/social_twitter.svg';
import sociallinkedin from '../images/social_linkedin.svg';

let pathPrefix = `/`
export default () => (
<PageTransition>
<div>
    <div className="meka_hero">
        <nav className="top-bar topbar-responsive">
            <div className="top-bar-title">
                <h1 className="hidden-h1">meka creative</h1>
                <a
                href="https://www.mekacreative.io"
                onclick="track('Click-logo-top','Click-logo-top')"
                rel="canonical"
                >
                <div className="icon-svg svgicon-meka_logo_app">
                <img className="" src={MekaLogo} alt="Meka Creative Logo" />
                </div>
                </a>
            </div>
            <div id="topbar-responsive" className="topbar-responsive-links">
                <div className="top-bar-right">
                    <ul className="menu simple vertical medium-horizontal">
                        {/* <li><a href="#">Sign-in</a></li> */}
                        <li><Link to="/contact/">
                            <button
                            type="button"
                            className="button hollow topbar-responsive-button"
                            state={{
                                modal: true
                              }}
                            onclick="track('Click-landing-mekapro-modal','Click-landing-mekapro-modal')"
                            >
                            Login
                        </button>
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="row">
            <div className="column small-12 medium-7">
                <div className="row">
                    <div className="column small-12">
                        <h2 className="h2_hero">Welcome to your creative hiring assistant 👋</h2>
                    </div>
                    <div className="column small-12">
                        <h3 className="h3_hero">Artifical intelligence for creative profiles sourcing and recruiting</h3>
                    </div>
                    <div className="column small-12">
                        <div className="row">
                            <div className="column small-6 medium-5">
                            <Link className="button" to="/contact/" state={{
                                modal: true
                              }}>Start your free trial</Link>
                            </div>
                            <div className="column small-6">
                            <Link className="hollow button" to="/contact/" state={{
                                modal: true
                              }}>See live demo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column small-12 medium-5 hero-img">
                <img className="" src={wireframeshighfi} alt="Meka Creative Logo" />
            </div>
        </div>
        <div className="row align-bottom text-center bottom_hero">
        {/* <div className="columns"><a className="item category_bottom" onclick="track('Click-item-category-bottom-art','Click-item-category-bottom-art')">
            <FeatherIcon name="svgicon-paint-palette"/>
            <label>art/design</label></a></div>
        <div className="columns"><a className="item category_bottom" onclick="track('Click-item-category-bottom-business','Click-item-category-bottom-business')">
            <FeatherIcon name="svgicon-drink-coffee"/>
            <label>business</label></a></div>
        <div className="columns"><a className="item category_bottom" onclick="track('Click-item-category-bottom-coding','Click-item-category-bottom-coding')">
            <FeatherIcon name="svgicon-notebook-2"/>
            <label>coding</label></a></div>
        <div className="columns"><a className="item category_bottom" onclick="track('Click-item-category-bottom-music','Click-item-category-bottom-music')">
            <FeatherIcon name="svgicon-music-note"/>
            <label>music</label></a></div>
        <div className="columns"><a className="item category_bottom" onclick="track('Click-item-category-bottom-cooking','Click-item-category-bottom-cooking')">
            <FeatherIcon name="svgicon-chef-hat"/>
            <label>cooking</label></a></div> */}
        <svg className="white_angle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,192L1440,128L1440,320L0,320Z"></path></svg>
        </div>

    </div>

    <div className="row svg_container">
        <div className="icon-svg bg_triangle_round1">
            <FeatherIcon name="bg_triangle_round"/>
        </div>
        <div className="row align-center">
            <div className="column small-11 medium-12">
                <h2 className="landing_quote">
                Creativity is an innate quality that can be trained like any other
                skill
                </h2>
                <h4>
                <a
                data-open="exampleModal1"
                onclick="track('Click-landing-statement-modal','Click-landing-statement-modal')"
                >
                Take a closer look to our manifesto
                </a>
                </h4>
                <div className="icon-svg bg_round1">
                <FeatherIcon name="bg_round"/>
                </div>
                <div className="reveal landing_modal" id="exampleModal1" data-reveal>
                    <div className="icon-svg meka_logo_app">
                        <FeatherIcon name="meka_logo_app"/>
                    </div>
                    <h2 className="padding5_top">We believe that…</h2>
                    <p className="lead"></p>
                    <ul>
                        <li>Creativity isn’t just the domain for artists</li>
                        <li>
                        Creativity is a set of skills, dispositions and capacities that
                        can be developed : learning to be creative is akin to learning a
                        sport
                        </li>
                        <li>
                        We are naturally creative and as we grow up we learn to be
                        uncreative
                        </li>
                        <li>
                        Creativity allows us to continue to grow and develop as a society
                        - promoving creativity in the world would be a catalyst for social
                        change{" "}
                        </li>
                        <p />
                        <h2 className="padding5_top">We are committed to…</h2>
                        <p className="lead"></p>
                        <li>
                        Help people discovering who they truly are and unlock their
                        potential
                        </li>{" "}
                        <p />
                    </ul>
                    <button
                    className="close-button"
                    data-close
                    aria-label="Close modal"
                    type="button"
                    >
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
            </div>
        </div>
        <div className="row align-center padding10_top">
            <div className="column small-11 large-5">
                <div className="column align-self-top card landing_box_shadow">
                <Fade left>
                    <div className="card-section">
                        <div className="icon-svg landing_ai">
                            <img className="" src={landingAi} alt="Meka Creative Logo" />
                        </div>
                        <h3 className="red_h">Human Driven Artificial Intelligence</h3>
                        <p>
                        mēkā converts big data into useful data. We use Machine Learning
                        Algorithms to create comparison statistic models based on the
                        inputs of the most creative profiles in their specific domains.
                        </p>
                    </div>
                </Fade>
                </div>
                <div className="icon-svg bg_triangle1">
                    <img className="" src={bgTriangle} alt="Meka Creative Logo" />
                </div>
                <Fade right>
                    <div className="column align-self-bottom card margin20_top landing_box_shadow">
                    <div className="card-section">
                        <div className="icon-svg landing_perso_radar">
                            <img className="" src={landingpersoradar} alt="Meka Creative Logo" />
                        </div>
                        <h3 className="red_h">Creative Personality Radar</h3>
                        <p>
                        Discover what makes an applicant unique. Psychometrics &amp; big data
                        objectively assess creative potentials.
                        </p>
                    </div>
                    </div>
                </Fade>
            </div>
            <div className="column small-11 large-5 align-self-middle">
                <Fade left>
                    <div className="column align-self-middle card landing_box_shadow"
                    >
                    <div className="card-section">
                        <div className="icon-svg landing_perso_progress">
                            <img className="" src={landingpersoprogress} alt="Meka Creative Logo" />
                        </div>
                        <h3 className="red_h">Hiring campaigns</h3>
                        <p>
                        mēkā will provide personalized content &amp; hints to run your hiring campaigns
                        </p>
                    </div>
                    </div>
                </Fade>
                <div className="icon-svg bg_triangle_round">
                    <img className="" src={bgtriangleround} alt="Meka Creative Logo" />
                </div>
            </div>
        </div>
    </div>
    <div className="icon-svg bg_square_round1">
        <img className="" src={bgsquareround} alt="Meka Creative Logo" />
    </div>
    <div className="row align-center">
        <div className="icon-svg pattern_blue_bg">
            <img className="" src={patternbluebg} alt="Meka Creative Logo" />
        </div>
        <div className="column small-11 medium-12 padding10_bottom">
            <div className="padding10_both">
                <h3 className="landing_quote text-left">
                “Creativity and problem-solving are becoming the key to success in the
                new market world”
                </h3>
                <div className="row align-right ">
                    <div className="small-1 columns ">
                        <img className="" src={trowbpic} alt="Meka Creative Logo" />
                    </div>
                    <div className="small-5 columns ">
                        <h5>Tacy Trowbridge (@tacytrow)</h5>
                        <h6>Lead for world wide education team at Adobe</h6>
                    </div>
                </div>
            </div>
            <h3 className="text-center show-for-medium">hiring managers agree</h3>
            <div className="small-11 columns align-self-bottom show-for-medium">
                <div className="row small-up-2 medium-up-4">
                    <div className=" columns align-center">
                        <div className="card-section relative">
                            <div className="icon-svg pattern_pink_bg_detail1">
                                <img className="" src={patternpinkbgdetail1} alt="Meka Creative Logo" />
                            </div>
                            <h2>86%</h2>
                        </div>
                        <div className="card-section">
                            <p className="lead">
                            Creativity is becoming an essential skill for employment in any
                            type of business
                            </p>
                        </div>
                    </div>
                    <div className="columns align-center">
                        <div className="card-section relative">
                            <div className="icon-svg pattern_pink_bg_detail1">
                                <img className="" src={patternpinkbgdetail1} alt="Meka Creative Logo" />
                            </div>
                            <h2>94%</h2>
                        </div>
                        <div className="card-section">
                            <p className="lead">
                            Creativity is key when evaluating candidates{" "}
                            </p>
                        </div>
                    </div>
                    <div className=" columns align-center">
                        <div className="card-section relative">
                            <div className="icon-svg pattern_pink_bg_detail1">
                                <img className="" src={patternpinkbgdetail1} alt="Meka Creative Logo" />
                            </div>
                            <h2>52%</h2>
                        </div>
                        <div className="card-section">
                            <p className="lead">
                            Business Development &amp; Sales are functions that benefit most
                            from creative skills
                            </p>
                        </div>
                    </div>
                    <div className="columns align-center">
                        <div className="card-section relative">
                            <div className="icon-svg pattern_pink_bg_detail1">
                                <img className="" src={patternpinkbgdetail1} alt="Meka Creative Logo" />
                            </div>
                            <h2>8/10</h2>
                        </div>
                        <div className="card-section">
                            <p className="lead">Creativity is important to success</p>
                        </div>
                    </div>
                </div>
                <p className="text-right">source : Adobe Creative Candidate Study</p>
            </div>
        </div>
    </div>
    <div className="row padding10_top">
        <div className="column small-12 medium-5 relative">
            <div className="blue_h_container">
                <span className="label">launch 2021</span>
                <h6 className="blue_h">Features</h6>
            </div>
            <div
            data-position="left"
            data-offset={25}
            className="icon-svg meka_pro_labtop notViewed animBlock"
            >
                <img className="" src={mekaprosample} alt="Meka Creative Logo" />
            </div>
        </div>
        <div className="column small-12 medium-7">
            <ul className="tool">
                <li>
                    <h6>
                    Be creative with creativity : setup creative profiles for various
                    areas including multi-disciplinary profiles
                    </h6>
                </li>
                <li>
                    <h6>Save time using the pre-interview tool</h6>
                </li>
                <li>
                    <h6>
                    Get support to merge in-demand skills along with your
                    technical/specialist skills
                    </h6>
                </li>
                <li>
                    <h6>Keep your profiles and candidates in one place</h6>
                </li>
                <li>
                    <h6>
                    HR Consulting : offer your client the option to create their own
                    profile
                    </h6>
                </li>
                <li>
                    <h5>
                    Help promoving creativity in the world for social change :{" "}
                    <bold>
                    part of the fee paid by your company goes to creative education
                    foundations worldwide.
                    </bold>
                    </h5>
                </li>
            </ul>
        </div>
        <div className="icon-svg bg_round2">
            <FeatherIcon name="bg_round"/>
        </div>
    </div>
    <div
    className="reveal landing_modal text-center"
    id="exampleModal2"
    data-reveal
    >
        <div className="icon-svg svgicon-meka_logo_app_pro_modal">
            <FeatherIcon name="svgicon-meka_logo_app_pro"/>
        </div>
        <h3 className="lead_pro_modal">
        <bold>hiring creativity</bold>{" "}
        </h3>
        <div id="newsletterform_pro padding10_top">
            <p className="small">
            Sign up to get notified when we launch. No spam, no fuss. Uninscribe
            anytime.
            </p>
                <div className="row align-center">
                    <div className="small-11 large-8 small-centered columns">
                        <form
                        action="newsletter_sign_up_send_pro.php"
                        method="post"
                        id="newsletter_pro"
                        name="newsletter_pro"
                        >
                        <input
                        type="email"
                        name="signup-email_pro"
                        id="signup-email_pro"
                        defaultValue
                        placeholder="email@email.com"
                        autofocus
                        />
                        </form>
                    </div>
                    <div className="nwslttr_loading_pro" id="response_pro"></div>
                    <div className="small-11 large-8 small-centered columns">
                        <input
                        type="submit"
                        defaultValue="Notify me"
                        name="signup-button_pro"
                        id="signup-button_pro"
                        className="button primary expanded"
                        onclick="track('Click-sign-up-pro','Click-sign-up-pro')"
                        />
                    </div>
                    <div id="response_pro">
                    </div>
            </div>
            <button
            className="close-button"
            data-close
            aria-label="Close modal"
            type="button"
            >
            <span aria-hidden="true">×</span>
            </button>
        </div>
        <div className="row align-center margin5_top">
            <div className="small-12 small-centered columns">
                {/* <a
                className="button primary large"
                data-open="exampleModal2"
                onclick="track('Click-landing-mekapro-modal','Click-landing-mekapro-modal')"
                >
                Join the pre-launch waiting list now
                </a> */}
            </div>
        </div>
    </div>
    <div className="icon-svg bg_triangle2">
        <FeatherIcon name="bg_triangle"/>
    </div>
    <div className="row expanded align-center padding10_both">
        <div className="column small-12 text-center">
            <h2 className="red_h padding5_bottom">Creativity guides</h2>
        </div>
        <div className="column medium-3 small-11">
            <a
            href="blog/articles/the_five_paradoxes_of_creativity"
            className="card landing_box_shadow guides"
            >
            <div className="card-image">
                <span className="label alert card-tag">#theory</span>
                <img className="" src={landingillustrguideparadoxe} alt="Meka Creative Logo" />

            </div>
            <div className="card-section">
                <h3 className="article-title">The Five Paradoxes of Creativity</h3>
                <p className="article-summary">
                Understand creativity means discerning the different paradoxes that
                compose it.
                </p>
                <p className="article-link">
                Read
                </p>
            </div>
            </a>
        </div>
        <div className="column medium-3 small-11">
            <a
            href="blog/articles/empathy_and_creativity"
            className="card landing_box_shadow guides"
            >
            <div className="card-image">
                <span className="label alert card-tag">#theory</span>
                <img className="" src={landingillustrguideempathy} alt="Meka Creative Logo" />

            </div>
            <div className="card-section">
                <h3 className="article-title">Empathy and creativity</h3>

                <p className="article-summary">
                The basis of human links and of artistic communication.
                </p>
                <p className="article-link">
                Read
                </p>
            </div>
            </a>
        </div>
        <div className="column medium-3 small-11">
            <a
            href="blog/articles/can_solitude_stimulate_creativity"
            className="card landing_box_shadow guides"
            >
            <div className="card-image">
            <span className="label alert card-tag">#theory</span>
            <img className="" src={landingillustrguidesolitude} alt="Meka Creative Logo" />

            </div>
            <div className="card-section">
            <h3 className="article-title">Can solitude stimulate creativity?</h3>
            <p className="article-summary">
            Looking for concentration in the midst of the social media area.
            </p>
            <p className="article-link">
                Learn
                </p>
            </div>
            </a>
        </div>
    </div>


    <div className="index_twitter_bg_setup gradient-bg">
        <div className="row align-center padding5_both">
            <div className="column small-12 text-center">
                <h2 className="red_h padding5_bottom">Seek and hire creative candidates</h2>
            </div>
            <div className="index_twitter_bg"></div>
                <div className="small-12 medium-6 medium-pull-6 columns card text-center landing_box_shadow">
                    <div className="card-section">
                    <div className="card-section">
                    <div className="row align-center padding5_both">
                    <div className="small-12 medium-6">
                    <div className="icon-svg social_twitter">
                        <img className="icon-svg social_twitter" src={socialtwitter} alt="Meka Creative Logo" />
                    </div>
                    </div>
                    <div className="small-12 medium-6">
                    <div className="icon-svg social_linkedin">
                        <img className="" src={sociallinkedin} alt="Meka Creative Logo" />
                    </div>
                    </div>
                    </div>
                    </div>
                    <h3>Spread the word !</h3>
                    <p>
                    We are just kicking off this project, and we love what we do. Spread
                    creativity by sharing this page. Thank you.
                    </p>
                    </div>
                    <div className="card-section">
                        <div className="button-hover-reveal-wrapper">
                        <label>Spread the world !</label>
                        <a
                        href="https://twitter.com/share"
                        data-url="https://www.mekacreative.io"
                        data-via="hacedor_el"
                        data-text="meka is a chat bot using artificial intelligence to help train and develop your creativity"
                        data-related="meka - explore creativity"
                        data-count="vertical"
                        className="button-hover-reveal twitter"
                        >
                        Tweeter
                        </a>
                        <a
                        href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.mekacreative.io&title=mekacreative&summary=meka is a chat bot using artificial intelligence to help train and develop your creativity&source=source"
                        className="button-hover-reveal linkedin"
                            >
                            LinkedIn
                            </a>
                            </div>
                        </div>
                    </div>
        </div>
    </div>
    <div className="footer">
        <div className="row">
            <div className="small-8 columns">
                <div className="logo hide-for-small-only">
                <div className="icon-svg svgicon-meka_logo_app">
                <FeatherIcon name="svgicon-meka_logo_app"/>
                </div>
                </div>
                <p className="footer-links">
                <a>Features</a>
                <a>Pricing</a>
                <a>Enterprise</a>
                <a>Help Center</a>
                <a>Security</a>
                <a>Login</a>
                <a>Privacy</a>
                <a
                href="static/about"
                onclick="track('Click-footer-about','Click-footer-about')"
                >
                About us
                </a>
                <a
                href="blog/blog"
                onclick="track('Click-footer-blog','Click-footer-blog')"
                >
                Blog
                </a>
                <a
                href="static/contact"
                onclick="track('Click-footer-contact','Click-footer-contact')"
                >
                Contact us
                </a>
                <a
                href="static/legal"
                onclick="track('Click-footer-legal','Click-footer-legal')"
                >
                Terms of Service
                </a>
                </p>
                <ul className="inline-list social">
                <a onclick="track('Click-footer-social-fb','Click-footer-social-fb')">
                <i className="fi-social-facebook"/>
                </a>
                <a onclick="track('Click-footer-social-twitter','Click-footer-social-twitter')">
                <i className="fi-social-twitter"/>
                </a>
                <a onclick="track('Click-footer-social-linkedin','Click-footer-social-linkedin')">
                <i className="fi-social-linkedin"/>
                </a>
                <a onclick="track('Click-footer-social-github','Click-footer-social-github')">
                <i className="fi-social-github"/>
                </a>
                </ul>
                <p className="copywrite">©2021 mekacreative.io</p>
            </div>
            <div className="small-4 columns">
                <div className="logo_footer">
        <div className="icon-svg svgicon-meka_logo_app">
            <img className="" src={MekaLogo} alt="Meka Creative Logo" />
        </div>
        </div>
            </div>
        </div>
    </div>

</div>
</PageTransition>
)
