function getDelimetersInsideBrackets(str: string) {
    const regex = /\[(.*?)\]/g; // Regex to match characters inside []
    let matches = [];
    let match;
    
    // Use exec to find all matches
    while ((match = regex.exec(str)) !== null) {
      matches.push(match[1]); // Add the first capturing group (the text inside brackets)
    }
  
    return matches;
  }

function add(str: string): number | Error {
    if (str === '')
        return 0;
    let sum = 0;
    let delimeter: { [key: string]: boolean } = { ',': true };
    const linesOfString = str.split('\n');
    for (let i = 0; i < linesOfString.length; i++) {
        const stringContent = linesOfString[i];
        if (i === 0) {
            let delimeterAray = getDelimetersInsideBrackets(stringContent);
            if (delimeterAray.length > 0) {
                delimeter = Object.fromEntries(delimeterAray.map(item => [item, true]));
                continue;
            }
        }
        for (let j = 0; j < stringContent.length; j++) {
            if (!delimeter[stringContent[j]]) {
                sum += +stringContent[j];
            }
        }
    }
    return sum;
}


export default add;