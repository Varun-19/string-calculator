function add(str: string): number | Error {
    if (str === '')
        return 0;

    const linesOfString = str.split('\n');
    return linesOfString.reduce((acc, cur, index) => {
        const arrayOfString = cur.split(',');
        acc += +arrayOfString.reduce((acc, cur) => acc += +cur, 0);
        return acc;
    }, 0);

}


export default add;