export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'))

    if (user && user.authdata) {
        return { 'Authorization': user.authdata };
    }

    return {};
}