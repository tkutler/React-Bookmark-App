import React , { Component }from 'react'
import Form from './Form.js'
class Bookmark extends Component{
	state = {
		formVisible: false
	}
	toggleForm = () => {
		this.setState({formVisible: !this.state.formVisible})	
	}
	handleUpdate = (event, bookmark) => {
		this.props.handleUpdate(event, bookmark)
		this.toggleForm()
	}
render(){
	const {bookmark , handleDelete} = this.props
	return(
		<>
		{
			this.state.formVisible
			?
			<Form 
				bookmark={bookmark}
				handleSubmit={this.handleUpdate}
			>
			</Form>

			:<div className="bookmark">
			<h3>{bookmark.title}</h3>
			<p>{bookmark.content}</p>
			<code>{bookmark.url}</code>
			<button onClick={() => handleDelete(bookmark)}>X</button> 
			<button onClick={this.toggleForm}>Edit</button> 

			 </div>
		}
		</>
	)
  }
}

export default Bookmark