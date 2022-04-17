import "./style.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Navigate , useNavigate} from "react-router-dom"
import { getTeachersData, sortRequest } from "../Redux/data/Action";


export const Home=()=>{

    const {token, isAuthenticated}= useSelector((state)=>state.login);
    const { products }= useSelector((state)=> state.products);
    const dispatch= useDispatch();

    // console.log(token);
    const [Count, setCount] = useState(1);

    const fetchAndUpdateData=()=>{
        dispatch(getTeachersData())
    };

    useEffect(()=>{
        fetchAndUpdateData();
    },[]);

    if(!isAuthenticated){
        return <Navigate to="/login" />
    }
 
    const navigate=useNavigate();



    return (
        <>
          Home
      
        <div className="center">
 
        <button onClick={()=>{dispatch(sortRequest())}}>sort by age</button>

        <br />

       <table >
           <tr>
               <th>sr.</th>
               <th>Name </th>
               <th>Image</th>
               <th>Gender</th>
               <th>Age</th>
               <th>Classes</th>
           </tr>

       
           {products.map((e)=><tr key={e.id}
               onClick={()=>{
            
                navigate(`/classes/${e.id}`)
                // console.log("yes")
               }}
             >
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td><img src={e.img} width="100px" /></td>
                <td>{e.gender}</td>
                <td>{e.age}</td>
                <td>{e.classes.length}</td>
           </tr>
           )}


         </table>
<br />
<br />
         {/* <button onClick={handleChange1}>prev</button>
        <button onClick={handleChange}>next</button> */}
        </div>
        </>
    )
}