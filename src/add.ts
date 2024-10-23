function add(str: string): number | Error {
    if (str === '')
        return 0;

    const arrayOfStrings = str.split(',');
    return arrayOfStrings.reduce((acc, cur) => {
        acc += +cur;
        return acc;
    }, 0);

}


export default add;