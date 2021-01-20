import React ,{ useState }from 'react'
import Students from './Students'

 const StudentList = () => {
    const [students , setdata] = useState({
        id : '',
        firstName: '',
        lastName : '',
        dob :'',
        email : '',
        phone : '',
 
        
 
     });
     const handleData = (formModel) => {
       setdata({...students,
               [students] : formModel
            });
      } 

    return (
        <div>
            <Students handleData={handleData}/>
            <table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Date of birth</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
           
                <tr>
                  <td>{students.id}</td>
                  <td>{students.firstName}</td>
                  <td>{students.lastName}</td>
                  <td>{students.dob}</td>
                  <td>{students.email}</td>
                  <td>{students.phone}</td>
                </tr>
            
            
          </tbody>
        </table>
        </div>
    )
}

export default StudentList
