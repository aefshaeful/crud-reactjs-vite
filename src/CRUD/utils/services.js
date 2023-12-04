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

const updateCourses = (courseId, payload) => {
    const listCourse = storageManagement.get();
    const updateCourses = listCourse.map((item) => {
        if (item.id === courseId) {
            return {
                ...item,
                ...payload,
            }
        }
        return item;
    });

    storageManagement.set(updateCourses);

    return {
        data: payload,
    }
}

const deleteCourses = (courseId) => {
    const listCourse = storageManagement.get();
    const newListCourse = listCourse.filter((item) => item.id !== courseId);

    storageManagement.set(newListCourse);
}

// Service agar bisa ditampilkan di UI
const courseService = {
    addCourses,
    getCourses,
    updateCourses,
    deleteCourses,
};

export default courseService;
