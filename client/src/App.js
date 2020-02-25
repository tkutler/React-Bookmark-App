import React from 'react';
import Aside from './components/Aside.js'
import Main from './components/Main.js'
import Header from './components/Header.js'
import './App.css';

class App extends React.Component {
  state ={
    bookmarks :[]
  }
  // adds bookmark to db 

  handleAdd = (e, formInputs) => {
    e.preventDefault()
    console.log(formInputs)
    fetch('/bookmarks', {
    body: JSON.stringify(formInputs),
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
      }
    })
    .then(createdBookmark => createdBookmark.json())
    .then(jsonedBookmark => {
   // add notice to bookmarks
    this.setState({
      bookmarks: [jsonedBookmark, ...this.state.bookmarks]
    })
  })
  .catch(error => console.log(error))
  }
  //refreshes current bookmark list
  componentDidMount() {
    this.getBookmarks()
  }
  //retrieves bookmarks
  getBookmarks = () => {
    fetch('http://localhost:3000/bookmarks')
      .then(response => response.json())
      .then(json => this.setState({bookmarks: json}))
      .catch(error => console.error(error))
  }
  //deletes bookmark from db
  handleDelete = (deletedBookmark) => {
  fetch(`/bookmarks/${deletedBookmark.id}`, {
     method: 'DELETE',
     headers: {
       'Accept': 'application/json, text/plain, */*',
       'Content-Type': 'application/json'
     }
   })
 .then(json => {
   const bookmarks = this.state.bookmarks.filter((bookmark) => bookmark.id !== deletedBookmark.id)
   this.setState({bookmarks})
 })
 .catch(error => console.log(error))
}
//updates db entry
  handleUpdate = (event, formInputs) => {
      event.preventDefault()
      fetch(`/bookmarks/${formInputs.id}`, {
         body: JSON.stringify(formInputs),
         method: 'PUT',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(updateBookmark => {
      // be naughty
        this.getBookmarks()
      })
      .catch(error => console.log(error))
  }
   // returned html 
  render() {
    return (
      <>
      <div className="App">

        <div className='container'>
        <Header />
          <Aside 
           handleSubmit={this.handleAdd}
          />
          <Main 
           bookmarks={this.state.bookmarks} 
           handleDelete={this.handleDelete}
           handleUpdate={this.handleUpdate}
           />
      </div>
    </div>
    </>
    );
  }
}

export default App;
