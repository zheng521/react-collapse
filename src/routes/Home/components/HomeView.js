import React from 'react'
import './HomeView.scss'

export const HomeView = () => (
  <div className="collapse-container">
  	<div className="collapse-header">
  		<h3>招聘职位</h3>
  		<span className="collapse-empty">清空</span>
  	</div>
		
  	<div className="collapse-main">
  		<div className="collapse-main-header">
  			<span className="collapse-check"></span>
  			<h3>工程研发部门</h3>
  			<span className="collapse-number">22</span>
  		</div>
  		<ul>
  			<li className="collapse-li">
  				<span className="collapse-li-check"></span>
  				<h3>mac 开发工程师</h3>
  				<span className="collapse-li-number">4</span>
  			</li>
  		</ul>
  	</div>


  </div>
)

export default HomeView
