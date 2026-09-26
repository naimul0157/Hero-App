export const getinstallationData = ()=>{
    const getdata = localStorage.getItem('installation');

    if (getdata) {
        const parseData = JSON.parse(getdata)
        return parseData;
    }
    else{
        return [];
    }
}
export const addinstallationData = (id) =>{
    const addstore = getinstallationData();
    if (addstore.includes(id)) {
        alert('this already exist');
        
    }
    else{
        addstore.push(id);
        const addstringify = JSON.stringify(addstore);

        localStorage.setItem('installation', addstringify);
    }
}