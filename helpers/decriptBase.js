export default function decriptBase(encripted = '') {
    if(encripted === null || encripted === undefined) return undefined;
    const baseToUtf = Buffer(encripted.substring(6), 'Base64').toString();
    const [username, password] = baseToUtf.split(':');
    return {username, password};
};
