import React from 'react'
import {Link, IndexLink} from 'react-router'

class Nav extends React.Component{

	render(){
		return(
			<div>
				<h2>Nav bar</h2>
				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold',color:'red',textDecoration:'none'}}>Get Weather </IndexLink>
				<Link to="about" activeClassName="active" activeStyle={{fontWeight:'bold',color:'red',textDecoration:'none'}}>About </Link>
				<Link to="examples" activeClassName="active" activeStyle={{fontWeight:'bold',color:'red',textDecoration:'none'}}>Exemples </Link>
			</div>
		)
	}
}

export default Nav