import cookie from 'react-cookies'

export const saveCookie = (name, value) => {
    const expires = new Date()
    expires.setDate(expires.getDate() + 14)
    return cookie.save(name, value, { expires, path: '/'  })
}

export const deleteCookie = (name) => {
    return cookie.remove(name, { path: '/'  })
}

export const retrieveCookie = (name) => {
    const cookies = cookie.load(name)
    if (!undefined) {
        return cookies
    }
    return false
}
