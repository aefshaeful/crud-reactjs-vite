import storageManagement from "./storageManagement"

// Service untuk menghubungkan UI dengan localstorage
const addCourses = (payload) => {
    const currentItem = storageManagement.get();
    if (currentItem !== null && currentItem.length !== 0){
        const combineItem = [...currentItem, payload];
        storageManagement.set(combineItem);
    } else {
        storageManagement.set([payload]);
    }
    return {
        data: payload,
    }
};

const getCourses = () => {
    const result = storageManagement.get();
    const response = {
        data: result !== null ? result : [],
    }

    return response;
}

// Service agar bisa ditampilkan di UI
const courseService = {
   addCourses,
   getCourses,
};

export default courseService;
