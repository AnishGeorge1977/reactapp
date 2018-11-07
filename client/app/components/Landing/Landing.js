import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const landing = () => (
<div>
  <div className={"container bg-dark text-light"}>
    <div className={"row mt-5"}>
      <div className={"col-md-12 mb-4 text-center"}>
            <h1 className={"display-2"}>Welcome</h1>
            <p className={"lead"}>Please navigate through the page and do sign up or log in as more forms are in store !!. Thank You.</p>
            <a href ="/signup" className={"btn btn-warning mr-2"}>Sign Up</a>
            <a href="/login" className={"btn btn-success"}>Log in</a>
    </div>
    </div>
  </div>
  
  <section id="home-icons" className={"py-5"}>
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-md-4 mb-4 text-center"}>
          <a href="/portfolio" className={"btn btn-white btn-block"}>
          <i className={"fa fa-cog fa-3x mb-2"}></i></a>
          <h3>View My Profile</h3>
        </div>
        <div className={"col-md-4 mb-4 text-center"}>
          <a href="/download" className={"btn btn-white btn-block"}>
          <i className={"fa fa-cloud fa-3x mb-2"}></i></a>
          <h3>Download Resume</h3>
        </div>
        <div className={"col-md-4 mb-4 text-center"}>
          <a href="#gallery" className={"btn btn-white btn-block"}>
          <i className={"fa fa-cart-plus fa-3x mb-2"}></i></a>
          <h3>Image gallery</h3>
        </div>
      </div>
    </div>
  </section>



  <section id="gallery" className={"py-1"}>
    <div className={"container"}>
      <h1 className={"text-center"}>Photo Gallery</h1>
      <p className={"text-center"}>Check out our photos</p>
      <div className={"row mb-4"}>
        <div className={"col-md-4"}>
            <img src="/images/image_01.jpg" alt="" className={"img-fluid"}/>

        </div>

        <div className={"col-md-4"}>
            <img src="/images/image_02.jpg" alt="" className={"img-fluid"}/>

        </div>

        <div className={"col-md-4"}>
            <img src="/images/image_03.jpg" alt="" className={"img-fluid"}/>
        </div>
      </div>

      <div className={"row mb-4"}>
        <div className={"col-md-4"}>
          <img src="/images/image_04.jpg" alt="" className={"img-fluid"}/>
       </div>

       <div className={"col-md-4"}>
        <img src="/images/image_05.jpg" alt="" className={"img-fluid"}/>
     </div>

     <div className={"col-md-4"}>
      <img src="/images/image_06.jpg" alt="" className={"img-fluid"}/>
   </div>
  </div>
    </div>
  </section>


  <section id="newsletter" className={"text-center p-5 bg-dark text-white"}>
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col"}>
          <h1>Sign Up</h1>
          <form className={"form-inline justify-content-center"} action="/signup" method = "POST">
            <input type="text" className={"form-control mb-2 mr-2"} name = "username" placeholder = "User Name"/>
            <input type="text" className={"form-control mb-2 mr-2"} name = "email" placeholder = "User email"/>
            <input type="text" className={"form-control mb-2 mr-2"} name = "password" placeholder = "User password"/>
            <button className={"btn btn-primary mb-2"}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </section>


  <footer id="main-footer" className={"text-center p-4"}>
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col"}>
          <p>Copyright &copy;
            <span id="year"></span> Anish George 2018</p>
        </div>
      </div>
    </div>
  </footer>



  <div className={"modal fade"} id="videoModal">
    <div className={"modal-dialog"}>
      <div className={"modal-content"}>
        <div className={"modal-body"}>
          <button className={"close"} data-dismiss="modal">
            <span>&times;</span>
          </button>
          <iframe src="" frameborder="0" height="350" width="100%" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
  </div>
);

export default landing;