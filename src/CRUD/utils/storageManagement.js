// const course = [
    
//     {
//         id: 1,
//         name: "Belajar React JS",
//         description: "Belajar React JS itu mudah"
//     }
// ];

const localStorageKey = "rjc11";


const setItem = (value) => {
    const valueToString = JSON.stringify(value);
    localStorage.setItem(localStorageKey, valueToString);
};

const getItem = () => {
    const result = localStorage.getItem(localStorageKey);
    if (result) {
        return JSON.parse(result);
    }
    return null;
};


const storageManagement = {
    get: getItem,
    set: setItem
};

export default storageManagement;
