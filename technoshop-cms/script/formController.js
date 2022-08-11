import { category, form } from "./elems.js";
import { getCategories, postGoods } from "./serviceAPI.js";
import { toBase64 } from "./utils.js";

const updateCategory = async () => {
    category.textContent = '';
    const categoryList = await getCategories(); 
    const categoryOption = categoryList.map(category => {
        const option = document.createElement('option');
        option.value = category;
        return option;
    });
    category.append(...categoryOption);
};

export const formController = () => {
    updateCategory();
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = [...new FormData(form)];
        const data = {};
        for (const [key, value] of formData){
            if(value){
                data[key] = value;
            }            
        }
        if(data.image.size){
            data.image = await toBase64(data.image);
        } else {
            delete data.image;
        }
        
        const goods = await postGoods(data);
        
    });
};