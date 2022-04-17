import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css"

export const Classes=()=>{

    const {id}=useParams();
    const [user, setuser]=useState("");


    const  getdata=()=>{
        axios.get(`http://localhost:8080/teachers/${id}`)
        .then((res)=>{
            setuser(res.data)
            console.log(user)
        })
    }

    useEffect(()=>{
      getdata();
    },[])

    return (
        <div  className="center">
            You are visiting id {id}

             <h2>Name : {user.name}</h2>
             <h2>Gender:{user.gender}</h2>
             <h4>Classes : </h4>


             
             <table>
             <tr>
               <th>Grade</th>
               <th>Section </th>
               <th>Subject</th>
              
             </tr>
             
             
{/*               
             {user.classes.map((e,i)=><tr key={i} >
                <td>{e.grade}</td>
                <td>{e.section}</td>
               
                <td>{e.subject}</td>
            
           </tr>
           )}  */}

         {/* <td>{user.classes}</td> */}
 
         </table>


        </div>
    )
}