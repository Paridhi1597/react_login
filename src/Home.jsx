import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/Imagess/img1.png'


const Home = ()=> {
    return (
        <div>
           <section id= "header" className = "d">
           <div className = "container-fluid nav_bg">
              <div className = "row">
                  <div className = "col-10 mx-auto">
                      <div className = "row">
                      <div className = "col-md-6 pt-20 pt-lg-0 order-2 order-lg-2">
                        <h1>Welcome to <strong className = 'brand-name'>Admin Portal </strong></h1>
                           <h2 className ="my-3">
                               Here you can add a student manually
                                </h2>   
                                <div className = "mt-3">

                                <NavLink to = "/login" className = "design-button"> Get Started</NavLink>
                                </div>

                      </div>
                      <div className = "col-lg-6 order-1 order-lg-2 header-img">
                          <img src = {web} className = "img-fluid-animated" alt = "homePage" height= "400px"></img>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
           </section>
        </div>
    )
}

export default Home