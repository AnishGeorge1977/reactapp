import React from 'react';

const work = (props) => {
    if(props.isWorkPage){
        return(
        <div id="work" className={"collapse show"}>
            <div className={"card card-body bg-primary text-white py-1"}>
              <h2>Work Experience and Major client list</h2>
            </div>
            <div className={"card card-body py-3"}>
              <h3>Area or expertise</h3>
              <div className={"row no-gutters"}>
                <div className={"col-md-3"} style={{border:"1px solid #333"}}>
                      <ul className={"list-group"}>
                          <li className={"list-group-item  list-group-item-dark"}>Project Management - CoE </li>
                          <li className={"list-group-item"}>IT Demand Management</li>
                          <li className={"list-group-item list-group-item-dark"}>IT Demand Validation</li>
                          <li className={"list-group-item"}>Project Reporting and Statistics</li>
                          <li className={"list-group-item list-group-item-dark"}>Resource Management</li>
                      </ul>
                </div>
                <div className={"col-md-3"} style={{border:"1px solid #333"}}>
                      <ul className={"list-group"}>
                          <li className={"list-group-item  list-group-item-dark"}>Stakeholder Management</li>
                          <li className={"list-group-item"}>Process Monitoring</li>
                          <li className={"list-group-item  list-group-item-dark"}>Risk Management</li>
                          <li className={"list-group-item"}>Tools and Process adoption</li>
                          <li className={"list-group-item list-group-item-dark"}>Transition Management</li>
                      </ul>
                </div>
                <div className={"col-md-3"}  style={{border:"1px solid #333"}}>
                      <ul className={"list-group"}>
                          <li className={"list-group-item  list-group-item-dark"}>Change Management</li>
                          <li className={"list-group-item"}>Budgeting</li>
                          <li className={"list-group-item  list-group-item-dark"}>Estimation</li>
                          <li className={"list-group-item"}>Business case</li>
                          <li className={"list-group-item list-group-item-dark"}>Migration Strategy</li>
                      </ul>
                </div>
                <div className={"col-md-3"} style={{border:"1px solid #333"}}>
                      <ul className={"list-group"}>
                          <li className={"list-group-item  list-group-item-dark"}>Product Design</li>
                          <li className={"list-group-item"}>Fit/Gap Analysis</li>
                          <li className={"list-group-item  list-group-item-dark"}>Vendor Management</li>
                          <li className={"list-group-item"}>Business continuity</li>
                          <li className={"list-group-item list-group-item-dark"}>Domain consulting</li>
                      </ul>
                </div>
                <div className={"col-md-3"} style={{border:"1px solid #333"}}>
                      <ul className={"list-group"}>
                          <li className={"list-group-item  list-group-item-dark"}>Process maps</li>
                          <li className={"list-group-item"}>RFP</li>
                          <li className={"list-group-item  list-group-item-dark"}>SOW</li>
                          <li className={"list-group-item"}>Info security</li>
                          <li className={"list-group-item list-group-item-dark"}>System Design</li>
                      </ul>
                </div>
                <div className={"col-md-3"} style={{border:"1px solid #333"}}>
                      <ul className={"list-group"}>
                          <li className={"list-group-item  list-group-item-dark"}>Development</li>
                          <li className={"list-group-item"}>Testing</li>
                          <li className={"list-group-item  list-group-item-dark"}>Scope Documentation</li>
                          <li className={"list-group-item"}>Product Support</li>
                          <li className={"list-group-item list-group-item-dark"}>Warranty Support</li>
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

export default work;