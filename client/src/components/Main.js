import React from 'react'
import Bookmarks from './Bookmarks.js'

function Main (props) {
  const { bookmarks, handleDelete , handleUpdate} = props
    return (
    	
      <main>
        <Bookmarks
        bookmarks={bookmarks}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        />
      </main>
   
    )
}

export default Main 
