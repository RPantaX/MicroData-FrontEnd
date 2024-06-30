import axios from "axios"
const BASE_URL = 'https://l01ezc294j.execute-api.us-east-2.amazonaws.com/';
export const findAll = async()=>{
    try {
        const response = await axios.get(`${BASE_URL}products`);
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}
export const save = async({nombreProducto, descripcion, precio, stock})=>{

    try {
        return axios.post(`${BASE_URL}product`,{
            nombreProducto, descripcion, precio, stock
        });
    } catch (error) {
        console.error(error);
    }
    return undefined;
}
export const update = async({id, nombreProducto, descripcion, precio, stock})=>{
    try {
        return axios.put(`${BASE_URL}product/${id}/stock`,{
            nombreProducto,
            descripcion,
            precio,
            stock
        });
    } catch (error) {
        console.error(error);
    }
    return undefined;
}