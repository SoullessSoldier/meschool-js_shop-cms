import { API_URI } from "./constants.js";

export const getGoods = async () => {
    const response = await fetch(`${API_URI}/goods/?nopage=true`);
    if (response.ok){
        return response.json();
    } else {
        throw new Error(response.status);
    }
};

export const postGoods = async (data) => {
    const response = await fetch(`${API_URI}/goods`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    if (response.ok){
        return response.json();
    } else {
        throw new Error(response.status);
    }
};

export const getCategories = async () => {
    const response = await fetch(`${API_URI}/category/`);    
    if(response.ok){
        return response.json();
    } else {
        throw new Error(response.status);
    }
};