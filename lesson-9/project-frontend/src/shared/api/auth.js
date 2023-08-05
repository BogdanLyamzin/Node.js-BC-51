import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const setToken = token => {
    if(token) {
        return instance.defaults.headers.authorization = `Bearer ${token}`;
    }
    instance.defaults.headers.authorization = "";
}

export const signup = async (data)=> {
    const {data: result} = await instance.post("/auth/signup", data);
    return result;
}

export const signin = async (data)=> {
    const {data: result} = await instance.post("/auth/signin", data);
    setToken(result.token);
    return result;
}

export const signout = async ()=> {
    const {data} = await instance.post("/auth/signout");
    setToken();
    return data;
}

export const getCurrent = async (token)=> {
    try {
        setToken(token);
        const {data} = await instance.get("/auth/current");
        return data;
    }
    catch(error) {
        setToken();
        throw error;
    }
}

export default instance;