const stringArray = ["hello world"];

const titleCaseArray = stringArray.map(str => str.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
);

console.log(titleCaseArray);
