import React from 'react'
import Nav from './Nav'

class Main extends React.Component {
  
  render() {
    return (
      <div>
			 <Nav />
    	 <div className="row flex-items-xs-center">
			 {this.props.children}
    	 </div>
		  </div>
    )
  }
}
export default Main