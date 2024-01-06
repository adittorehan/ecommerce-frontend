import secureLocalStorage from "react-secure-storage";

export const setUser = (user) => {
    for (const key in user) {
        secureLocalStorage.setItem(key, user[key]);
    }
}


export const removeUser = () => {
    secureLocalStorage.clear();
}

export const getUserName = () => secureLocalStorage.getItem("name");