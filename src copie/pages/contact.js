import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import Formdatatext from '../components/formtext'
import FeatherIcon from '../components/FeatherIcon'

const ModalPage = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <Link to={closeTo}>
            Close
          </Link>
        ) : (
          <header>
            <h1>
              Website Title
            </h1>
          </header>
        )}

        <h2>Modal Page</h2>
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
                    <img src={require('../images/mekacreative_logo.svg')}/>
                </div>
                </a>
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
                              <Formdatatext/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column small-12 medium-5 hero-img">
                <img src={require('../images/wireframes_high_fi.svg')}/>
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
        <Link to="/">Go back to the homepage</Link>
      </div>
    )}
  </ModalRoutingContext.Consumer>
)

export default ModalPage