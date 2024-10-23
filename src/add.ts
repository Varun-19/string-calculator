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
  if (str === "") return 0;
  let sum = 0;
  let delimeter: { [key: string]: number } = { ",": 1 };
  let arrayOfNegativeNumbers = [];
  const linesOfString = str.split("\n");
  for (let i = 0; i < linesOfString.length; i++) {
    const stringContent = linesOfString[i];
    let currentStringValue = "";
    let currentDelimeterValue = 0;
    let currentDelimeterCharacter = "";
    let isNextNumberNegative = false;
    /** Checking if the first line contains delimeters
     *  If yes, creating a new delimeter object for that
     *  If no, continuing with sum  
     * */
    if (i === 0) {
      let delimeterAray = getDelimetersInsideBrackets(stringContent);
      if (delimeterAray.length > 0) {
        // Sets the delimeter object with exact number of delimeter characters present
        delimeter = Object.fromEntries(
          delimeterAray.map((item) => [item[0], item.length])
        );
        continue;
      }
    }
    // Looping through the characters in each line
    for (let j = 0; j < stringContent.length; j++) {
      if (stringContent[j] === "-") {
        isNextNumberNegative = true;
      }
      if (!delimeter[stringContent[j]]) {
        // Checking exact number of delimeter characters are matched before doing sum
        if (currentDelimeterCharacter && delimeter[currentDelimeterCharacter] !== currentDelimeterValue) {
          throw Error('Invalid input')
        }
        currentStringValue += stringContent[j];
        // resetting delimeter watchers
        currentDelimeterCharacter = '';
        currentDelimeterValue = 0;
      }
      if (delimeter[stringContent[j]] || j === stringContent.length - 1) {
        // Checking if my previous delimeter character and current delimeter value is same if they are continuous
        if (currentDelimeterCharacter && stringContent[j] !== currentDelimeterCharacter) {
          throw Error('Invalid input')
        }
        if (isNextNumberNegative) {
          arrayOfNegativeNumbers.push(currentStringValue);
        }
        // Adding to the sum
        if (+currentStringValue <= 1000 && !isNextNumberNegative) {
          sum += +currentStringValue;
        }
        // resetting string watchers
        currentStringValue = '';
        // Setting the current delimeter character to a variable
        currentDelimeterCharacter = stringContent[j];
        currentDelimeterValue++;
      }
    }
  }
  if (arrayOfNegativeNumbers.length) {
    throw Error(`negative numbers are not allowed ${arrayOfNegativeNumbers.join(', ')}`)
  }
  return sum;
}

export default add;
