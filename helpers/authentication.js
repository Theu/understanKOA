export function authenticationApi(users) {
    const KEYRING_USR = users.map(usr => usr.username);
    const KEYRING_PSW = users.map(psw => psw.password);

    return function authenticateLogin(credentials) {
        if (!credentials) {
            return false;
        }
        if (KEYRING_USR.indexOf(credentials.username) === -1) {
            return false;
        }
        if (KEYRING_PSW.indexOf(credentials.password) === -1) {
            return false;
        }
        return true;
    }
}



