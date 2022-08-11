import { tableGoods } from "./elems.js";
import { currencyFormatRUB } from "./utils.js";

const createRow = ({id, title, category, price}) => {
    const row = document.createElement('tr');
    row.classList.add('table-row', 'table-goods-item');
    row.dataset.id = id;
    row.innerHTML = `
    <td>${id}</td>
    <td>${title}</td>
    <td>${category}</td>
    <td class="text-end">${currencyFormatRUB(price)}</td>
    <td class="d-flex">
        <button class="btn-table btn-delete">
        <svg width="30" height="30">
            <use xlink:href="#delete" />
        </svg>
        </button>
    </td>
    `;
    return row;
};

export const tableRender = (goods) => {
    tableGoods.textContent = '';
    const rows = goods.map(createRow);    
    tableGoods.append(...rows);

};

