import React , {Component} from 'react';
import Home from './Home';
import Resume from './Resume';
import Main from './Main';
import Certs from './Certs';
import Work from './Work';
import Accolades from './Accolades';


class Profile extends Component {
    constructor(props){
        super(props);

        this.state = {
            isHomeEnabled : true,
            isCertEnabled : false,
            isResumeEnabled : false,
            isWorkEnabled : false,
            isAccoladesEnabled:false
        }
    }

    callingHomePage(){
        this.setState({isHomeEnabled:true ,
            isCertEnabled : false,
             isResumeEnabled:false,
             isWorkEnabled : false,
             isAccoladesEnabled : false
        });
    }

    callingResumePage(){
        this.setState({isHomeEnabled:false ,
            isCertEnabled : false,
             isResumeEnabled:true,
             isWorkEnabled : false,
             isAccoladesEnabled : false
        });
    }

    callingCertPage(){
        this.setState({isHomeEnabled:false ,
            isCertEnabled : true,
             isResumeEnabled:false,
             isWorkEnabled : false,
             isAccoladesEnabled : false
        });
    }

    callingWorkPage(){
        this.setState({isHomeEnabled:false ,
            isCertEnabled : false,
             isResumeEnabled:false,
             isWorkEnabled : true,
             isAccoladesEnabled : false
        });
    }

    callingWinsPage(){
        this.setState({isHomeEnabled:false ,
            isCertEnabled : false,
             isResumeEnabled:false,
             isWorkEnabled : false,
             isAccoladesEnabled : true
        }); 
    }

    
    render(){
        return(
            <div>
                <Main />
                <p className={{margin:"auto"}}><strong>Click Buttons to 
                            Toggle between Home ,Certificates,
                             Resume ,Experience and Accolades</strong></p>
                <button className={"btn btn-primary btn-sm mr-2"}
                        onClick={()=>this.callingHomePage()}>Brief</button>
                <button className={"btn btn-warning btn-sm mr-2"}
                        onClick={()=>this.callingCertPage()}>Certificates</button>
                <button className={"btn btn-secondary btn-sm mr-2"}
                        onClick={()=>this.callingResumePage()}>Resume</button>  
                <button className={"btn btn-dark btn-sm mr-2"}
                        onClick={()=>this.callingWorkPage()}>Experience</button>  
                <button className={"btn btn-danger btn-sm mr-2"}
                        onClick={()=>this.callingWinsPage()}>Accolades</button>  

                <Home isHomePage={this.state.isHomeEnabled}/>      
                <Resume isResumePage={this.state.isResumeEnabled} />
                <Certs isCertsPage={this.state.isCertEnabled} />
                <Work  isWorkPage = {this.state.isWorkEnabled} />
                <Accolades isWinsPage= {this.state.isAccoladesEnabled} />
            </div>
        );
    }
}

export default Profile;