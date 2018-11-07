import React, { Component } from 'react';
import axios from 'axios';


import Post from './Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import Navigation from './Navigation/Navigation';
import './Blog.css';

class Blog extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts : [],
            selectedPostId : null,
            error : false,
            pageStart : 0,
            pageEnd : 0,
            pageIncrement : 4,
            recordCount : 0,
            entirePosts : [],
            previousDisabled : false,
            nextDisabled:false
        }

        }
    



    componentDidMount(){
        console.log("Calling componentDidMount");
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            const fullPost = res.data;
            const posts = res.data.slice(this.state.pageStart, 
                                this.state.pageStart+this.state.pageIncrement);
            const updatedPost = posts.map(post => {
                return {
                    ...post,
                    author : "John"
                }
            });
            this.setState({ posts : updatedPost ,
                            recordCount : res.data.length,
                            pageEnd : this.state.pageStart+this.state.pageIncrement,
                            entirePosts : fullPost});
             console.log("entirePosts : componentDidMount"+this.state.entirePosts);
        }).catch(error => {
            this.setState({error : true});
        });
        this.changeButtonState(this.state.pageStart , this.state.pageStart+this.state.pageIncrement);

    }

    populateBlogEventHandler(id){
        console.log("Post ID "+id);
        this.setState({selectedPostId : id});
    }
    previousClicked(){
      const posts = this.state.entirePosts.slice(this.state.pageStart-this.state.pageIncrement, 
          this.state.pageEnd-this.state.pageIncrement);
      const updatedPost = posts.map(post => {
          return {
                  ...post,
          author : "John"
          }
      });
      this.changeButtonState(this.state.pageStart-this.state.pageIncrement ,
        this.state.pageEnd-this.state.pageIncrement);     

      this.setState({ posts : updatedPost ,
            pageStart : this.state.pageStart-this.state.pageIncrement,
            pageEnd : this.state.pageEnd-this.state.pageIncrement});
    }

    nextClicked(){
        console.log("this.state.pageEnd   ::"+this.state.pageEnd);
        const posts = this.state.entirePosts.slice(this.state.pageEnd, 
            this.state.pageEnd+this.state.pageIncrement);
        const updatedPost = posts.map(post => {
            return {
                    ...post,
            author : "John"
            }
        });
        this.changeButtonState(this.state.pageEnd , 
            this.state.pageEnd+this.state.pageIncrement);    
        this.setState({ posts : updatedPost ,
            pageStart : this.state.pageEnd,
            pageEnd : this.state.pageEnd+this.state.pageIncrement});
    }

    changeButtonState(pageStartCount , pageEndCount){
        if(pageStartCount === 0) {
            this.setState({previousDisabled : true});
        }else{
            this.setState({previousDisabled : false}); 
        }

        if(pageEndCount === this.state.recordCount){
            this.setState({nextDisabled : true});
        }else {
            this.setState({nextDisabled : false});
        }
    }

    render () {
        let  posts = <p style={{textAlign:"center"}}>Some thing went wrong !!!</p>;
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post key={post.id} 
                id={post.id}
                title={post.title.substring(0,20)+"..."} 
                author={post.author}
                clicked={()=>this.populateBlogEventHandler(post.id)} />
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                <Navigation previous={()=>this.previousClicked()}
                        next={()=>this.nextClicked()}
                        previousState={this.state.previousDisabled}
                        nextState={this.state.nextDisabled}
                    />
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;