import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import Search from "./Search"


function Banner() {
	const [showSearch, setShowSearch] = useState(false);

	return (
		<div className="banner">
			<div className="banner_search">
				{showSearch && <Search /> }
				<Button onClick={()=> 
					setShowSearch(!showSearch)}
				className="banner_searchButton" variant="outlined">

					{showSearch ? "Hide" : "Search Dates"}
					
				</Button>
			</div>
					
					<div className="banner_info">
					
						<h1>
						Get out and stretch your imagination
						</h1>
						<h5>
						
						Go out an plan an adventure to uncover the 
						hidden wonders of the work 
						</h5>
					 <Button variant="outlined">
						Explore Nearby
					</Button>
					</div>
			</div>
	)
}

export default Banner