import axios from "axios";

const Main_url= axios.create({
    baseURL:'https://dummyjson.com'
})

Main_url.interceptors.request.use((req) => {
    let token =localStorage.getItem("token")
    if (token) {
      req.headers.authorization = `Bearer ${token}`;
    }
    return req;                                                                                                                        
  });
export default Main_url;