import Axios from "../axios";

export const login = async ({ username, password }) => {
  try {
    console.log("calling login")
    const { data} = await Axios.post("/users/login", {
      username,
      password,
    });
    console.log(data);
    return data;
  } catch (error) {
    throw Error(error.response.data.error);
  }
};


export const signUp = async({email,username,password})=>{
    try{
        console.log("calling signup")
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
