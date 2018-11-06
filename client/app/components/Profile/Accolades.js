import React from 'react';

const accolades = (props) => {
    if(props.isWinsPage){
        return(
            <div id="wins"className={"collapse show"}>
            <div className={"card card-body bg-primary text-white py-1"}>
              <h2>Accolades</h2>
            </div>
            <div className={"card card-body py-2"}>
              <div className={"row no-gutters"}>
                <div className={"col-md-12"} style={{border:"1px solid #333"}}>
                      <ul className={"list-group"}>
                          <li className={"list-group-item  list-group-item-dark"}>Project Management Champion @ EY- On board aspiring internal and 
                          lateral entry managers through PM on-boarding programme</li>
                          <li className={"list-group-item"}>Extra miler Rockers award @ EY for building high performing project team - FY 2013</li>
                          <li className={"list-group-item list-group-item-dark"}>Orange Belt member for driving business process improvement @ EY from GDS Operations - IT Services</li>
                          <li className={"list-group-item"}>Process Compliance award @ EY from Centre Quality Team for VoC 3.0 project</li>
                          <li className={"list-group-item list-group-item-dark"}>Feather on the cap award @ EY for delivering a memorable Project Management Day -  FY 2015</li>
                          <li className={"list-group-item"}>Certificate of Excellence from Qantas Airways for rolling out Air Cargo reservation suite of products across network centres</li>
                          <li className={"list-group-item list-group-item-dark"}>Certificate of Excellence for committed project delivery from Emirate Airlines for projects - NOMAD & Chameleon</li>
                          <li className={"list-group-item"}>Functional Area Representative in software design and development @ IBS Software services in achieving CMM level 5</li>
                      </ul>
                </div>
              </div>
            </div>
          </div>
                
    ) 
    }else{
        return null;
    }

};

export default accolades;