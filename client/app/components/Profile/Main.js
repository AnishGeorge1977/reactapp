import React from 'react';
import AnishGeorge from '../../../public/assets/img/AnishGeorge.png';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Main = () => (

    <div id="main" className={"collapse show"}>
    <div className={"container"}>
      <header id="main-header">
        <div className={"row no-gutters"}>
          <div className={"col-lg-4 col-md-5"}>
            <img style={{width:"250px" , height : "300px"}} src={AnishGeorge} alt="AnishGeorge"/>
            </div>
          <div className={"col-lg-8 col-md-7"}>
            <div className={"d-flex flex-column"}>
              <div className={"p-2 bg-dark text-white"}>
                <div className={"d-flex flex-row justify-content-between align-items-center"}>
                  <h1 className={"display-5"}>Anish George</h1>
                  <div className={"d-none d-md-block"}>
                    <a href="http://twitter.com" className={"text-white"}>
                      <i className={"fa fa-twitter"}></i>
                    </a>
                  </div>
                  <div>
                    <a href="http://facebook.com" className={"text-white"}>
                      <i className={"fa  fa-facebook"}></i>
                    </a>
                  </div>
                  <div>
                    <a href="https://linkedin.com/in/anish-george-a2491816" className={"text-white"}>
                      <i className={"fa fa-linkedin"}></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className={"p-2 bg-dark text-white"}>
                <p className={{margin:"auto"}}>Project Manager | Scrum Master | IT Service Delivery | System Design and Development</p>
              </div>
              <div className={"p-2 bg-light text-dark margin-auto"}>
              <p className={{margin:"auto"}}>Phone:+91 9847546003|Email:anishgeo@gmail.com|Skype:anish.george1977|www.anishgeo.com</p>
              </div>
              <div>
                <form action="/download" method="GET">
                  <button className={"form-control btn btn-outline-light bg-dark text-white"}>
                    <i className={"fa fa-cloud mr-2"}></i>Download Resume</button>
                  </form>
              </div>
  
              </div>
            </div>
          </div>

      </header>
     </div>
</div> 
);


export default Main;