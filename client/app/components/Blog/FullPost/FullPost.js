import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    constructor(props){
        super(props);

        this.state = {
            loadedPost : null
        }
    }

    

    componentDidUpdate () {
        if(this.props.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){
                axios.get("/posts/"+this.props.id)
                .then(res => {
                    console.log(res.data);
                    this.setState({loadedPost : res.data});
                }).catch(error =>{
                    console.log(error);
                });  
                }
            }
       }

       deletePostHandler(){
           //console.log(this.props.id);
           axios.delete("/posts/"+this.props.id)
           .then(res => {
               console.log(res.data);
           });
       }   

    render () {
        
        let post = <p style={{textAlign:"center"}}>Please select a Post!</p>;
        if(this.props.id){
            let post = <p style={{textAlign:"center"}}>Loading !!!!</p>;
        }
       
        if(this.state.loadedPost){
            post = (
                
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={()=>this.deletePostHandler()  } className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
       return post;
    }
}

export default FullPost;