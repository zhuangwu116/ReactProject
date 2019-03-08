

const dataformat = (data) =>{
    let datalist = data.split('T')
    return datalist[0];
}

export const calctotalpage = (value, page_size) =>{
    let totalPages = Math.ceil(value / page_size);
    return totalPages;
}

export default dataformat;