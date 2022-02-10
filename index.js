const fs = require('fs');
const snakecaseKeys = require('snakecase-keys')
// import mapObject, {mapObjectSkip} from 'map-obj';

const mapObject = require('map-obj')


const rawdata = fs.readFileSync('data.json');
const data = JSON.parse(rawdata);
console.log('============Original data:============');
console.log(data);


const snakeData = snakecaseKeys(data);
// console.log('\n\n');
console.log('~~~~~~~~~~~~Snake data:~~~~~~~~~~~~');
console.log(snakeData);


const transformedData = mapObject(snakeData, (key, value) => {
    const transformations = {
        age: 'edad',
        first_name: 'primer_nombre',
        last_name: 'segundo_nombre',
        // Add here more properties, example
        // client_id: 'new_property_name',
    }

    if (transformations[key]) {
        return [transformations[key], value];
    }
    return [key, value]
}, { deep: true })


console.log('~~~~~~~~~~~~Spanish keys:~~~~~~~~~~~~');
console.log(transformedData);



fs.writeFileSync('output.json', JSON.stringify(transformedData));
