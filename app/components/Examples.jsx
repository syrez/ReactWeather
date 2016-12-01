import React from 'react'
import {Link} from 'react-router'

class Examples extends React.Component{

	render(){
		return(
			<div>
				<h2>Examples</h2>
				<p>Here are a few example location to try out:</p>
				<ol>
					<li>
						<Link to="/?location=Philadelphia">Philadelphia</Link>
					</li>
					<li>
						<Link to="/?location=Rio">Rio, Brazil</Link>
					</li>
				</ol>
			</div>
		)
	}
}

export default Examples