import React from 'react';

const certs = (props) => {
    if(props.isCertsPage){
        return(
        <div id="certificate" class="collapse show">
        <div class="card card-body bg-primary text-white py-1">
          <div>
                  <h2>Professional Certifications</h2>
            </div>      
        </div>
    
        <div class="card card-body py-3">
          <div class="card-deck">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">PMP®</h4>
                <p class="card-text">Project Management Professional</p>
                <p class="p-2 mb-3 bg-dark text-white">
                  Issued By: PMI
                </p>
                <p class="p-2 mb-3 bg-dark text-white">
                  Valid Till: 12/2020
                </p>
              </div>
              <div class="card-footer">
                <h6 class="text-muted">Dates: 2011 - 2020</h6>
              </div>
            </div>
    
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">CSM®</h4>
                <p class="card-text">Certified Scrum Master</p>
                <p class="p-2 mb-3 bg-dark text-white">
                  Issued By: Scrum Alliance
                </p>
                <p class="p-2 mb-3 bg-dark text-white">
                  Valid Till: 06/2020
                </p>
              </div>
              <div class="card-footer">
                <h6 class="text-muted">Dates: 2012 - 2020</h6>
              </div>
            </div>
    
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">PRINCE2®</h4>
                <p class="card-text">PRINCE2® - Foundation & Practitioner</p>
                <p class="p-2 mb-3 bg-dark text-white">
                  Issued By: AXELOS
                </p>
                <p class="p-2 mb-3 bg-dark text-white">
                  Valid Till: 09/2021
                </p>
              </div>
              <div class="card-footer">
                <h6 class="text-muted">Dates: 2018 - 2021</h6>
              </div>
            </div>
            
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">SAFe®</h4>
                <p class="card-text">Certified SAFe® Practitioner</p>
                <p class="p-2 mb-3 bg-dark text-white">
                  Issued By: Scaled Agile,USA
                </p>
                <p class="p-2 mb-3 bg-dark text-white">
                  Valid Till: 06/2019
                </p>
              </div>
              <div class="card-footer">
                <h6 class="text-muted">Dates: 2017 - 2019</h6>
              </div>
            </div>
            
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">ITIL®</h4>
                <p class="card-text">ITIL® Foundation</p>
                <p class="p-2 mb-3 bg-dark text-white">
                  Issued By: AXELOS
                </p>
                <p class="p-2 mb-3 bg-dark text-white">
                  Valid Till: Present
                </p>
              </div>
              <div class="card-footer">
                <h6 class="text-muted">Dates: 2015 - </h6>
              </div>
            </div>          
            
          </div>
        </div>
      </div>
        ) }else{
        return null;
    }

};

export default certs;