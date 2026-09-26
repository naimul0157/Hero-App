import Swal from "sweetalert2";

export const getinstallationData = () => {
    const getdata = localStorage.getItem('installation');

    if (getdata) {
        const parseData = JSON.parse(getdata)
        return parseData;
    }
    else {
        return [];
    }
}
export const addinstallationData = (id) => {
    const addstore = getinstallationData();
    if (addstore.includes(id)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You already Installed This!",
        })

    }
    else {
        addstore.push(id);
        const addstringify = JSON.stringify(addstore);

        localStorage.setItem('installation', addstringify);
    }
}