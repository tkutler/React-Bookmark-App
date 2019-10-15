import React from 'react'
import Bookmark from './Bookmark.js'

function Bookmarks (props){
	const {bookmarks , handleDelete, handleUpdate} = props
	return (
		
		<div>
		{bookmarks.map( bookmark => 
			<Bookmark 
			key ={bookmark.id}
			bookmark={bookmark}
			handleDelete={handleDelete}
			handleUpdate={handleUpdate}
			/>
		)}
		</div>
		
			
	)

}


export default Bookmarks