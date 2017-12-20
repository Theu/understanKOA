export default function decrypt(encrypted) {
    if(encrypted === null || encrypted === undefined) return undefined;
    const baseToUtf = Buffer(encrypted.substring(6), 'Base64').toString();
    const [username, password] = baseToUtf.split(':');
    return {username, password};
};
