import secureLocalStorage from "react-secure-storage";

export const setUser = (user) => {
    for (const key in user) {
        secureLocalStorage.setItem(key, user[key]);
    }
}

export const deleteUser = () => {
    secureLocalStorage.clear();
}

export const checkTokenExpiration = () => {
    console.log(secureLocalStorage.getItem("expires_at"));
}

export const getUserName = () => {
    checkTokenExpiration();
    return secureLocalStorage.getItem("name")
};