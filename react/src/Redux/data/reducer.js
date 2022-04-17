import { GET_DATA, GET_DATA_ERROR, GET_DATA_LOADING } from "./Action";

const initState={
    loading:false,
    error:false,
    products:[]
};
 
export const teacherReducer = (store=initState, {type, payload })=>{
    switch(type){
        case GET_DATA_LOADING:
            return {
                ...store,
                loading:true
            }
        case GET_DATA:
            return{
                ...store,
                loading:false,
                products:[...payload],
                error:false
            };
        case GET_DATA_ERROR:
            return {
                ...store,
                loading:false,
                error:true,
                // products:[...payload]
                }    

        default:
            return store        
    }
}