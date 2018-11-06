import React from 'react';
//import profilepic from '../../../public/assets/img/AnishGeorge.jpg';

const Main = () => (

    <div id="main" className={"collapse show"}>
    <div className={"container"}>
      <header id="main-header">
        <div className={"row no-gutters"}>
          <div className={"col-lg-4 col-md-5"}>
            <img src={'../../../public/assets/img/AnishGeorge.jpg'} alt="AnishGeorge"/>
            </div>
          <div className={"col-lg-8 col-md-7"}>
            <div className={"d-flex flex-column"}>
              <div className={"p-2 bg-dark text-white"}>
                <div className={"d-flex flex-row justify-content-between align-items-center"}>
                  <h1 className={"display-5"}>Anish George</h1>
                  <div className={"d-none d-md-block"}>
                    <a href="http://twitter.com" className={"text-white"}>
                      <i className={"fab fa-twitter"}></i>
                    </a>
                  </div>
                  <div>
                    <a href="http://facebook.com" className={"text-white"}>
                      <i className={"fab fa-facebook"}></i>
                    </a>
                  </div>
                  <div>
                    <a href="http://instagram.com" className={"text-white"}>
                      <i className={"fab fa-instagram"}></i>
                    </a>
                  </div>
                  <div>
                    <a href="https://linkedin.com/in/anish-george-a2491816" className={"text-white"}>
                      <i className={"fab fa-linkedin-in"}></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className={"p-2 bg-dark text-white"}>
                Project Manager | Scrum Master | IT Service Delivery | System Design and Development
              </div>
              <div className={"p-3 bg-black"}>
            Phone:+91 9847546003|Email:anishgeo@gmail.com|Skype:anish.george1977|www.anishgeo.com
              </div>
              <div>
                <form action="/download" method="GET">
                  <button className={"form-control btn btn-outline-light bg-dark text-white"}>
                    <i className={"fas fa-cloud mr-2"}></i>Download Resume</button>
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