import axios from "axios";

const baseURL = "http://localhost:3000/api/v1/";
const header={
  'Authorization': `Bearer ${localStorage.getItem("Token")}`
}

export const Login = async (endpoint, data1) => {
  try{
    const response = await axios.post(baseURL + endpoint, data1)
    localStorage.setItem("Token", response?.data.data);
    console.log(response.data)
    return
   }
   catch(error){
       console.log(error);
   }
};

export const Register = async (endpoint, data) => {
    try{
      await axios.post(baseURL + endpoint, data)
      return "sucess";
     }
     catch(error){
         console.log(error);
     }
};

export const getNote = async (endpoint)=>{
  try {
    return await axios.get(baseURL + endpoint, {headers: header});
  } catch (error) {
    console.log(error);
  }
}

export const update = async (endpoint,id,noteObj )=>{
  try {
    return await axios.put(baseURL + endpoint + id, noteObj, {headers:header});
  } catch (error) {
    console.log(error)
  }
}

export const createNote = async (endpoint, noteObj)=>{
  try {
    return await axios.post(baseURL + endpoint, noteObj, {headers: header});
  } catch (error) {
    console.log(error);
  }
}

export const isarchived = async (endpoint, id)=>{
  try {
    return await axios.get(baseURL + endpoint + id, {headers: header})
  } catch (error) {
    console.log(error);
  }
}

export const isDeleted = async (endpoint, id)=>{
  try {
    return await axios.get(baseURL + endpoint + id, {headers: header})
  } catch (error) {
    console.log(error);
  }
}
