import React from 'react';

const resume = (props) => {
    if(props.isResumePage){
        return(
            <div id="resume" class="collapse show">
            <div class="card card-body bg-primary text-white py-1">
              <h2>Resume</h2>
            </div>
            <div class="card card-body py-3">
              <h3>Where Have I Worked?</h3>
              <div class="card-deck">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">EY</h4>
                    <p class="card-text">One among the Big 4 financial services companies</p>
                    <p class="p-2 mb-3 bg-dark text-white">
                      Position: Assistant Director
                    </p>
                    <p class="p-2 mb-3 bg-dark text-white">
                      Portfolio: Global Tax IT Services
                    </p>
                  </div>
                  <div class="card-footer">
                    <h6 class="text-muted">Dates: 2011 - Till date</h6>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Cognizant</h4>
                    <p class="card-text">Leading IT Services company with a global presence</p>
                    <p class="p-2 mb-3 bg-dark text-white">
                      Position: Manager
                    </p>
                    <p class="p-2 mb-3 bg-dark text-white">
                      Portfolio: IT Service Delivery
                    </p>
                  </div>
                  <div class="card-footer">
                    <h6 class="text-muted">Dates: 2010 - 2011</h6>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">IBS</h4>
                    <p class="card-text">Airline domain IT specialist delivering projects and products for leading airlines</p>
                    <p class="p-2 mb-3 bg-dark text-white">
                      Position: Project Manager , Design & Development
                    </p>
                    <p class="p-2 mb-3 bg-dark text-white">
                      Portfolio: IT Service Projects and Product Delivery
                    </p>
                  </div>
                  <div class="card-footer">
                    <h6 class="text-muted">Dates: 2001 - 2010</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
       );
    } else {
        return null;
    }

  };

export default resume;