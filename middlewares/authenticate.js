export default async function authenticate(ctx, next) {
    const headerResult = ctx.re
    console.log('------------------------------------');
    console.log('HEY ATTAMIDDLEWARE');
    console.log('------------------------------------');
    await next();
}
