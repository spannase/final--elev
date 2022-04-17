import axios from "axios";

export const GET_DATA = "GET_DATA"
export const GET_DATA_LOADING ="GET_DATA_LOADING"
export const GET_DATA_ERROR="GET_DATA_ERROR";


export const getDatas=(payload)=>({
    type:GET_DATA,
    payload
});

export const getDataLoading=()=>({
    type:GET_DATA_LOADING
});

export const getError=()=>({
    type:GET_DATA_ERROR
});

export const getTeachersData=()=>(dispatch)=>{
    dispatch(getDataLoading());
    fetch("http://localhost:8080/teachers")
    .then((res)=>res.json())
    .then((res)=>dispatch(getDatas(res)))
    .catch(()=>dispatch(getError()))
}

export const paginamtion=()=>(dispatch)=>{
    dispatch(getDataLoading());
    fetch(`http://localhost:8080/teachers?_page=${count}&_limit=2`)
    .then((res)=>res.json())
    .then((res)=>dispatch(getDatas(res)))
    .catch(()=>dispatch(getError()))

}


export const sortRequest = () => async (dispatch) => {
    dispatch(getDataLoading());
    axios
      .get("http://localhost:8080/teachers?_sort=age&_order=asc")
      .then((res)=>dispatch(getDatas(res)))

        .catch(()=>dispatch(getError()))
      
  };