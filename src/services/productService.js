import axios from "axios"
export const findAll = async()=>{
    try {
        const response = await axios.get('https://l01ezc294j.execute-api.us-east-2.amazonaws.com/products');
        return response;
    } catch (error) {
        console.log(error);
    }
    return null;
}