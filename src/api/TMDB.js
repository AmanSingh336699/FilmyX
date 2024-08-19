import axios from "axios";

const Api_Key ='c55b285334bf8b3c814745780aa49e43'
const Base_Url = import.meta.env.VITE_API_URL

export const fetchData = async (url, params={}) =>{
    try {
        params.api_key = Api_Key;
        console.log(Base_Url + url)

        const response = await axios.get(Base_Url + url, { params })
        console.log('Datas ',response.data)
        return response.data
    } catch (error) {
        if(error.response && error.response.status === 401){
            console.error("Unauthorized API key might be incorrect")
        }

        console.error(error.response?.data)
        throw error;
    }
}