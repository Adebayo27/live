import axios from "axios";
const token = localStorage.getItem('token')
export const httpWithoutToken = async (url, data) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/${url}`, data).then((resp)=>{
        return resp.data 
      }).catch(function (error) {
          console.log(error)
        return error
      });
}

export const httpWithToken = async (url, query) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/${url}`, {query:query}, 
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    ).then((resp)=>{
        return resp.data 
      }).catch(function (error) {
          console.log(error)
        return error
      });
}