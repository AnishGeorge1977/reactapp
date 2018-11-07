import React , {Component} from 'react';
import classes from './Navigation.css';

class Navigation extends Component {

    render(){
        return(
            <div className="Navigation">
                <button className="OrderButton" 
                disabled={this.props.previousState} 
                onClick={this.props.previous}>Previous Post
                </button>
                <button className="OrderButton" 
                disabled={this.props.nextState} 
                onClick={this.props.next}>Next Post
                </button>
            </div>
        );
    }
}


export default Navigation;