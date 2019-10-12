import React from 'react'
import Bookmark from './Bookmark.js'

function Bookmarks (props){
	const {bookmarks , handleDelete} = props
	return (
		<>
		<div>
		{bookmarks.map( bookmark => 
			<Bookmark 
			key ={bookmark.id}
			bookmark={bookmark}
			handleDelete={handleDelete}
			/>
		)}
		</div>
		</>
			
	)

}


export default Bookmarks