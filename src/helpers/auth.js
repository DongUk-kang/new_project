import cookie from 'js-cookie';



// set in cookie
export const setCookie = (key, value) => {
    if (window !== 'undefiend') {
        cookie.set(key, value, {
            // 1 day
            expires: 1
        })
    }
}

// remove from cookie

export const removeCookie = key => {
    if (window !== 'undefined') {
        cookie.remove(key, {
            expires: 1
        });
    }
};

// get from cookie such as stored token
export const getCookie = key => {
    if (window !== 'undefined') {
        return cookie.get(key);
    }
};

// set on localstorage

export const setLocalStorage = (key, value) => {
    if (window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

// remove from localstorage
export const removeLocalStorage = key => {
    if (window !== 'undefined') {
        localStorage.removeItem(key);
    }
};

export const authenticate = (response, next) => {
    console.log('AUTHENTICATE HELPER ON SIGNIN RESPONSE', response);
    setCookie('token', response.data.token)
    setLocalStorage('user', response.data.user)
    next();
}

export const signout = (next) => {
    removeCookie('token')
    removeLocalStorage('user')
    next();
}

export const isAuth = () => {
    if (window !== 'undefined') {
        const cookieCheked = getCookie('token')
        if (cookieCheked) {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'))
            } else {
                return false;
            }
        }
    }
}