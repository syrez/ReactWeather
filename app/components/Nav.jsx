import React from 'react'
import {Link, IndexLink} from 'react-router'

class Nav extends React.Component{

	onSearch = (e) => {
		e.preventDefault();
		alert("not yet wired");
	}

	render(){
		return(
			<nav className="navbar navbar-light bg-faded">
				<div className="container">
						<Link className="nav-item nav-link" to="/">Rweather</Link>
						<IndexLink className="nav-item nav-link" to="/" activeClassName="active">Get Weather </IndexLink>
						<Link className="nav-item nav-link" to="about" activeClassName="active">About </Link>
						<Link className="nav-item nav-link" to="examples" activeClassName="active">Exemples </Link>
						<form className="form-inline float-xs-right" onSubmit={this.onSearch}>
	    					<input className="form-control" type="text" placeholder="Search"/>
	    					<button className="btn btn-outline-warning" type="submit">Search</button>
	  					</form>
				</div>		
			</nav>
		)
	}
}

export default Nav