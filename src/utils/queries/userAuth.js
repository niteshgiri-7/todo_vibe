import Axios from "../axios";

export const login = async ({ username, password }) => {
  try {
    const { data} = await Axios.post("/users/login", {
      username,
      password,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.error);
  }
};


export const signUp = async({email,username,password})=>{
    try{
        const {data} = await Axios.post("/users/signUp",{
            email,
            username,
            password
        })
        return data;
    }catch(error){
        throw Error(error.response.data.error)
    }
}
