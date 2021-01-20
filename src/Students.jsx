import React , {useState} from 'react'
//import { useHistory ,Redirect} from "react-router-dom";
 
const Students = ( {handleData} ) =>{
    const [data , setdata] = useState('');

    const InputEvent = (event)=>{
        const {name,value} =event.target;
        setdata((preVal) =>{
            return {
                ...preVal,
                [name] : value
            }

        })

    }
    
   const formSubmit = (e)=>{
      
        e.preventDefault();
        //console.log(data)
        handleData(data)
       //alert(`id is ${data.id} , Name is ${data.firstName} ${data.lastName} ,Dob is${data.dob}, email is ${data.email} , Number is ${data.phone}` , 
       //)
       
  
    }
    return (
        <div>
           <div className = "my-5">
               <h1 className = "text-center"> Add Student </h1>
           </div>
           <div className = "container-top">
               <div className = "row">
                   <div className = "col-md-6 col-10 mx-auto">
                   <form onSubmit = {formSubmit}>
  <div className="mb-3">
    <label for="exampleFormControlInput1" className = "la">Student ID</label>
    <input type="number" className="form-control" id="exampleFormControlInput1" value = {data.id} required name= "id" onChange = {InputEvent}/>
  </div>
  <div className="mb-3">
    <label for="exampleFormControlInput1" className = "la">First Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" value = {data.firstName} required name= "firstName" onChange = {InputEvent}/>
  </div>
  <div className="mb-3">
    <label for="exampleFormControlInput1" className = "la">Last Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" value = {data.lastName} required name= "lastName" onChange = {InputEvent}/>
  </div>
  <div className="mb-3">
    <label for="exampleFormControlInput1" className = "la">Date of Birth </label>
    <input type="text" className="form-control" id="exampleFormControlInput1" value = {data.dob} required name= "dob" onChange = {InputEvent} placeholder ="dd/mm/yyyy"/>
  </div>
  <div className="mb-3">
    <label for="exampleFormControlInput1" className = "la">Email</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" value = {data.email} name= "email" onChange = {InputEvent} placeholder = "abc@gmail.com" required/>
  </div>
  
  <div className="mb-3">
    <label for="exampleFormControlInput1" className = "la">Mobile Number</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" value = {data.phone} required name= "phone" onChange = {InputEvent}/>
  </div>
  
  
  
  
  <div className="col-12">
      <button type="submit" className="btn btn-primary" >Submit</button>
    </div>
</form>
                   </div>

               </div>
           </div>
        </div>
    )
}

export default Students
