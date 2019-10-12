import React from 'react';
import Aside from './components/Aside.js'
import Main from './components/Main.js'
import Header from './components/Header.js'
import './App.css';

class App extends React.Component {
  state ={
    bookmarks :[]
  }
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
  componentDidMount() {
    this.getBookmarks()
  }
  getBookmarks = () => {
    fetch('/bookmarks')
      .then(response => response.json())
      .then(json => this.setState({bookmarks: json}))
      .catch(error => console.error(error))
  }
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
           />
      </div>
    </div>
    </>
    );
  }
}

export default App;
