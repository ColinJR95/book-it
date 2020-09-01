import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";

function Header() {
	return (
		<div className="header">
			<img className="header_icon" src="logob.png" alt="This is our logo"/>
			<div className="header_center">
			<input type="text" />
			<SearchIcon />
			</div>
		</div>

	)
}

export default Header