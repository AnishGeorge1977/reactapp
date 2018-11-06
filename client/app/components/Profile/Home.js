import React from 'react';

const home = (props) => {
    if(props.isHomePage){
        return(
        <div id="home" className={"collapse show"}>
            <div className={"card card-body bg-primary text-white py-1"}>
              <h2>My Brief</h2>
              <p className={"lead text-justify"}>Project management professional with global experience in Project & Product management , System Design and Development.
                 On-site project management exposure in Middle East and Asia-Pacific regions - Australia , New Zealand. Proficient in Traditional , Agile - 
                Scrum , DevOps methodologies. Always keep a flare towards technology and can translate business strategies to viable IT solutions.
                <strong>Australian Permanent Residency Holder - PR # 0049542628682 and looking forward to migrate to NSW</strong></p>
            </div>
      
            <div className={"card card-body py-1"}>
              <h3>My Skills</h3>
              <h4>PROJECT MANAGEMENT : Traditional , Agile , DevOps</h4>
              <div className={"progress mb-3"}>
                <div className={"progress-bar bg-success"} style={{width:"100%"}}></div>
              </div>
              <h4>SERVICE DELIVERY : IT PMO</h4>
              <div className={"progress mb-3"}>
                <div className={"progress-bar bg-success"} style={{width:"100%"}}></div>
              </div>
              <h4>DESIGN & DEVELOPMENT : Rational Tool</h4>
              <div className={"progress mb-3"}>
                <div className={"progress-bar bg-success"} style={{width:"90%"}}></div>
              </div>
              <h4>TECHNOLOGY STACKS : Java , Web stacks , J2EE , Oracle</h4>
              <div className={"progress mb-3"}>
                <div className={"progress-bar bg-success"} style={{width:"80%"}}></div>
              </div>
              <h4>TRANSITION MANAGEMENT & INFRASTRUCTURE : On Premise , AWS & MS Azure Cloud</h4>
              <div className={"progress mb-3"}>
                <div className={"progress-bar bg-success"} style={{width:"70%"}}></div>
              </div>
            </div>
        </div>    
       );
    } else {
        return null;
    }

  };

export default home;