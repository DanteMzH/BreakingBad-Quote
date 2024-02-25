import axios from "axios";


 export const breakBadApi = axios.create({
    baseURL : 'https://api.breakingbadquotes.xyz/v1/quotes',

})