import React, {Component} from 'react'
import CollapseChild from './CollapseChild.js'
import './HomeView.scss'

class HomeView extends Component {
	constructor (props) {
		super (props)
	} 
	render () {
		return (
			<div className="collapse-container">
		  	<div className="collapse-header">
		  		<h3>招聘职位</h3>
		  		<span className="collapse-empty">清空</span>
		  	</div>
		  	<CollapseChild />
		  </div>
		)
	}
}

export default HomeView
