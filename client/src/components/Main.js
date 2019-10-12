import React from 'react'
import Bookmarks from './Bookmarks.js'

function Main (props) {
  const { bookmarks, handleDelete } = props
    return (
    	<>
      <main>
        <Bookmarks
        bookmarks={bookmarks}
        handleDelete={handleDelete}
        />
      </main>
      </>
    )
}

export default Main 
