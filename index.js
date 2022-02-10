const fs = require('fs');
const snakecaseKeys = require('snakecase-keys')

const rawdata = fs.readFileSync('data.json');
const data = JSON.parse(rawdata);
console.log('============Original data:============');
console.log(data);


const snakeData = snakecaseKeys(data);
// console.log('\n\n');
console.log('~~~~~~~~~~~~Snake data:~~~~~~~~~~~~');
console.log(snakeData);


fs.writeFileSync('output.json', JSON.stringify(snakeData));
