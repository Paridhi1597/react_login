import React, { Component } from 'react'
import './loginPage/MyStyles.css'

 class Login extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              userName : null,
              password : null
         }
     }
   clickLoginhandler = (event) =>{
       if(this.state.userName === 'mainteny' && this.state.password === "12345678"){
           alert("login successfully")
           event.preventDefault();

       }
       else{
           alert("invalid id password try again later")
       }
   }
handleUserChange = (event) =>{
    this.setState({
        userName : event.target.value
    })

}
handlePasswordChange = (event) =>{
    this.setState({
        password : event.target.value
    })
}
     
    render() {
        
    
        return (
            <div  className="container-top-login">
              <div className = "uicard">
                  <div className = "content">
                      <div className = "header">
                          Login Form
                      </div>
                      <div>
                          <label  className = "labels">UserName</label>
                          <input type = "text" className = "inputs" value = {this.state.userName} onChange = {this.handleUserChange}></input>
                      </div>
                      <div>
                      <label className = "labels">Password</label>
                          <input type = "password" className = "inputs" value = {this.state.password} onChange = {this.handlePasswordChange}></input>
                      </div>
                      <br></br>
                      <br></br>
                      <div>
                          <button type="submit" onClick = {this.clickLoginhandler} className ="buttons">Login</button>
                      </div>
                  </div>
              </div>


                
            </div>
        )
    }
}

export default Login
