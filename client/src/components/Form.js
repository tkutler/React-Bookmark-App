import React , { Component } from 'react'
import Input from './Input.js'

class Form extends Component{
	  constructor(props){
		super(props)
		this.state = {
			title:'',
			content:'',
			url:''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	  componentWillMount(){
		if(this.props.bookmark){
			this.setState({
				title: this.props.bookmark.title || '',
				content:this.props.bookmark.content || '',
				url: this.props.bookmark.url || '',
				id: this.props.bookmark.id || ''
			})
		}
	}
	  handleChange (event) {
        this.setState({[event.target.id] : event.target.value})
    }
   
    handleSubmit(event){
    	event.preventDefault()
    	const bookmark = {
    		title: this.state.title,
    		content: this.state.content,
    		url: this.state.url
    		    	}
    	if(this.props.bookmark) bookmark.id = this.props.bookmark.id
    		this.props.handleSubmit(
    			event,
    			bookmark
    			)
    }

    render(){
	   return(
	   	<form onSubmit={this.handleSubmit}>
	   		<Input 
               handleChange={this.handleChange}
          	   name={'title'}
               placeholder={'Bookmark Title'}
               type={'text'}
               value={this.state.title}
               id={'title'}
	   		/>
	   		<Input
	   		   handleChange={this.handleChange}
          	   name={'content'}
               placeholder={'Bookmark Content'}
               type={'text'}
               value={this.state.content}
               id={'content'}
	   		/>
	   		<Input 
	   		   handleChange={this.handleChange}
          	   name={'url'}
               placeholder={'Bookmark Url'}
               type={'text'}
               value={this.state.url}
               id={'url'}
	   		/>
	<input type='submit' value={this.props.bookmark ? "update this bkmrk." : "add a bkmrk."}/>   		
	   	</form>
	   )
   }
}


export default Form