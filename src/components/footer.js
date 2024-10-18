import React from 'react';
import { Link } from 'gatsby';
import Form from '../components/form'
import MekaLogo from '../images/mekacreative_logo.svg';


export default () => (
<footer>
	<div className="row align-left mtxl mbl">
			<div className="small-11 column">
			<Link to="/">
			<img className="" src={MekaLogo} alt="Meka Creative Logo" /></Link>
			</div>

					<div className="small-11 column ptm">
					<h2>Monthly picks for people interested in creativity</h2>
					</div>
	</div>
	<div className="row align-center mbl">
		<div className="column small-3">
			<small><Link className="menu__item" to="/contact/"><span className="menu__item-name text-align-center">Get in touch</span></Link></small>
		</div>
		<div className="column small-3">
			<small><Link className="menu__item" to="/submissions/"><span className="menu__item-name text-align-center">Suggest your article</span></Link></small>
		</div>
		<div className="column small-3">
			<small><Link className="menu__item" to="/legal/"><span className="menu__item-name text-align-center">Privacy policy</span></Link></small>
		</div>
	</div>

</footer>

)
