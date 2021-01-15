import React , {useState} from 'react'

const Course = () =>{
    const [data , setdata] = useState({
       id : '',
       stuName: '',
       email : '',
       stream : '',

       

    });
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
      
       alert(`id is ${data.id} , Name is ${data.stuName}, email is ${data.email} , Stream is ${data.stream}`  
        
       )
      
       
    }
    return (
        <div>
           <div className = "my-5">
               <h1 className = "text-center"> Assign Courses to student </h1>
           </div>
           <div className = "container-top">
               <div className = "row">
                   <div className = "col-md-6 col-10 mx-auto">
                   <form onSubmit = {formSubmit}>
  <div class="mb-3">
    <label for="exampleFormControlInput1" className = "la">Student ID</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" value = {data.id} required name= "id" onChange = {InputEvent}/>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1" className = "la">Student Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" value = {data.stuName} required name= "stuName" onChange = {InputEvent}/>
  </div>
  
  <div class="mb-3">
    <label for="exampleFormControlInput1" className = "la">Email</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" value = {data.email} name= "email" onChange = {InputEvent} placeholder = "abc@gmail.com" required/>
  </div>
  
  <div class="mb-3">
    <label for="exampleFormControlSelect1" className = "la">Stream</label>
    <select class="form-control" id="exampleFormControlSelect1"value = {data.stream} name= "stream" onChange = {InputEvent}>
    <option>--select--</option>
      <option>CS</option>
      <option>IT</option>
      <option>EC</option>
      <option>M.C.A.</option>
      <option>B.C.A.</option>
    </select>
  </div>
  
  
  
  <div class="col-12">
      <button type="submit" class="btn btn-primary" >Submit</button>
    </div>
</form>
                   </div>

               </div>
           </div>
        </div>
    )
}

export default Course
