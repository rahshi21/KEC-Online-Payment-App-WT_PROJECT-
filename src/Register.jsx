import React from 'react';
import Navbar from './Navbar';
import './Register.css';
function Register(){
    
    const[name,setName]=React.useState('');
    const[email,setEmail]=React.useState('');
    const[rollno,setRollno]=React.useState('');
    const[student,setStudent]=React.useState('');
    const[program,setProgram]=React.useState('');
    const[dept,setDept]=React.useState('');
    function handleSubmit(){
        <h1>Submitted</h1>
    }
    return (
        <>
        <Navbar/>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            Name : <input type="text" value={name}
                onChange={(e)=>setName(e.target.value)} />
                <br />
            Email : <input type="email" value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
                <br /> 
            Roll no : <input type="text" value={rollno}
            onChange={(e)=>setRollno(e.target.value)}/>
            <br /> 
            Hosteller/Dayscholar :
                <div onChange={(e)=>setStudent(e.target.value)}>
                <input type="radio" name="student" value="Hosteller" id="student"/> Hosteller
                <br />
                <input type="radio" name="student" value="Dayscholar" id="student"/> Dayscholar
                <br />
                </div>
            Program : <input type="text" value={program}
                onChange={(e)=>setProgram(e.target.value)}/>
                <br />         
            Department : <input type="text" value={dept}
                onChange={(e)=>setDept(e.target.value)}/>
                <br /> 
                <input type="submit" value="Make Payment"/>
          </form>
        </div>
        </>
      );
}

export default Register;