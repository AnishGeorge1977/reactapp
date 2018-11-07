import React from 'react';

const contact = () => (
        <div id="contact" className={"py-3"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-md-4"}>
              <div className={"card p-4"}>
                <div className={"card-body"}>
                  <h4>Get In Touch</h4>
                  <p>Please feel free to connect me at below address</p>
                  <h4>Address</h4>
                  <p>Pazhayachira , K-62 , Kailas Nagar , Pattom P.O , Trivandrum - 695004</p>
                  <h4>Email</h4>
                  <p>anishgeo@gmail.com</p>
                  <h4>Phone</h4>
                  <p>(+91) 9847546003</p>
                </div>
              </div>
            </div>
            <div className={"col-md-8"}>
              <div className={"card p-4"}>
                <div className={"card-body"}>
                  <h3 className={"text-center"}>Please fill out this form to contact us</h3>
                  <div className={"row"}>
                                <div className={"col-md-6"}>
                                <div className={"form-group"}>
                                    <input type="text" className={"form-control"} placeholder="First Name"/>
                                </div>
                                </div>
                                <div className={"col-md-6"}>
                                <div className={"form-group"}>
                                    <input type="text" className={"form-control"} placeholder="Last Name"/>
                                </div>
                                </div>
                                <div className={"col-md-6"}>
                                <div className={"form-group"}>
                                    <input type="text" className={"form-control"} placeholder="Email"/>
                                </div>
                                </div>
                                <div className={"col-md-6"}>
                                <div className={"form-group"}>
                                    <input type="text" className={"form-control"} placeholder="Phone Number"/>
                                </div>
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col-md-12"}>
                                <div className={"form-group"}>
                                    <textarea className={"form-control"} placeholder="Message"></textarea>
                                </div>
                                </div>
                                <div className={"col-md-12"}>
                                <div className={"form-group"}>
                                    <input type="submit" value="Submit" className={"btn btn-outline-danger btn-block"}/>
                                </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
);

export default contact;