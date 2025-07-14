import { useState } from "react";
import StudentTable from "./StudentTable";

const StudentForm = () => {
  const [formData, setFormData] = useState({ rollNo: -1, name: "" });
  const [students, setStudents] = useState([]);
    const addStudent =e =>{
        e.preventDefault()//prevent the form from its core behaviour of going to url
        setStudents(students.concat(formData))
    }
    const capture =e =>{
        let name =e.target.name
        let value =e.target.value
        setFormData({...formData,[name]:value})
    }
  return (
    <div>
      <form onSubmit={addStudent}>
        <label>
          Enter RollNo <input name="rollNo" type="number" onChange={capture} />
        </label>
        <br />
        <label>
          Enter Name <input name="name" required onChange={capture}/>
        </label>
        <br/>
        <button>Add Student</button>
      </form>
      <StudentTable students={students} color="yellow"/>
    </div>
  );
};

export default StudentForm;
