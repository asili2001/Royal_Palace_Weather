import axios from "axios";
import dotEnv from 'dotenv';
dotEnv.config('./')

const geoApify = axios.create({
    baseURL: `https://api.geoapify.com/v1/geocode/`,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    params: {
        apiKey : process.env.GEOAPIFY_API_KEY,
        format: 'json'
    },
    
});

export default geoApify;